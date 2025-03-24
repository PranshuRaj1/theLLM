import React, { useState, useRef, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { getGroqChatCompletion } from "../Req/reqLLM";
import { ProgressSpinner } from "primereact/progressspinner";
import makeTextReadable from "../Req/makeTextReadable";
import { useAuth0 } from "@auth0/auth0-react";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const Model = () => {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const messagesEndRef = useRef(null);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleButtonClick = async () => {
    if (!userInput.trim()) return;

    setLoading(true);
    try {
      const res = await getGroqChatCompletion(userInput);
      setResponse(makeTextReadable(res));

      // Save chat to backend
      if (isAuthenticated) {
        await saveChatToBackend(userInput, res);
      }
    } catch (error) {
      console.error("Error fetching chat completion:", error);
      setResponse(<p>Error fetching response</p>);
    } finally {
      setLoading(false);
    }
  };

  const saveChatToBackend = async (userMessage, aiResponse) => {
    try {
      const response = await fetch(`${baseUrl}/api/coconversations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${await getAccessTokenSilently()}`,
        },
        body: JSON.stringify({ title: userMessage.substring(0, 50) }),
      });

      if (!response.ok) {
        throw new Error("Failed to create conversation");
      }

      const { conversationId } = await response.json();

      // Save user message
      await fetch(`${baseUrl}/api/conversations/${conversationId}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${await getAccessTokenSilently()}`,
        },
        body: JSON.stringify({ role: "user", content: userMessage }),
      });

      // Save AI response
      await fetch(`${baseUrl}/api/conversations/${conversationId}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${await getAccessTokenSilently()}`,
        },
        body: JSON.stringify({ role: "assistant", content: aiResponse }),
      });
    } catch (error) {
      console.error("Error saving chat:", error);
    }
  };

  // Scroll to bottom when response changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [response]);

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleButtonClick();
    }
  };

  return (
    <div className="h-screen bg-gray-950 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-gray-900 border-b border-gray-800">
        <h1 className="text-2xl font-bold leading-none tracking-tight dark:text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            QuickGrab
          </span>
        </h1>
        <div>
          {isAuthenticated ? (
            <div className="flex items-center">
              <span className="text-white mr-3">Hi, {user.name}</span>
              <button
                onClick={() =>
                  logout({ returnTo: "https://the-llm.vercel.app" })
                }
                className="bg-red-600 text-white py-1 px-3 rounded-lg hover:bg-red-700 focus:outline-none focus:bg-red-700 text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => loginWithRedirect()}
              className="bg-green-600 text-white py-1 px-3 rounded-lg hover:bg-green-700 focus:outline-none focus:bg-green-700 text-sm"
            >
              Sign Up / Login
            </button>
          )}
        </div>
      </div>

      {/* Message Area (Scrollable) */}
      <div className="flex-grow overflow-auto p-4">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <ProgressSpinner />
          </div>
        ) : response ? (
          <div className="max-w-2xl mx-auto my-8 text-white">{response}</div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 text-center max-w-md">
              Enter your query below to get started. Responses will appear here.
            </p>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area (Fixed at Bottom) */}
      <div className="border-t border-gray-800 bg-gray-900 p-4">
        <div className="max-w-2xl mx-auto relative">
          <InputText
            className="w-full bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3 pr-16"
            id="inputtext"
            value={userInput}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Enter your query..."
          />
          <button
            onClick={handleButtonClick}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;
