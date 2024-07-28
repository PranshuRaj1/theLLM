import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { getGroqChatCompletion } from "../Req/reqLLM";
import { ProgressSpinner } from "primereact/progressspinner";
import makeTextReadable from "../Req/makeTextReadable";
import { useAuth0 } from "@auth0/auth0-react";

const Model = () => {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleButtonClick = async () => {
    setLoading(true);
    try {
      const chatCompletion = await getGroqChatCompletion(userInput);
      const res = chatCompletion.choices[0]?.message?.content || "";
      setResponse(makeTextReadable(res));
    } catch (error) {
      console.error("Error fetching chat completion:", error);
      setResponse(<p>Error fetching response</p>);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-gray-950 flex flex-col justify-between p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-center">
            QuickGrab
          </span>
        </h1>
        <div className="text-right">
          {isAuthenticated ? (
            <div>
              <h3 className="text-white text-xl mb-2">Hi, {user.name}</h3>
              <button
                onClick={() =>
                  logout({ returnTo: "https://thellm.netlify.app" })
                }
                className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:bg-red-700"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => loginWithRedirect()}
              className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:bg-green-700"
            >
              Sign Up / Login
            </button>
          )}
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center mt-4">
          <ProgressSpinner />
        </div>
      ) : (
        response && <div className="mt-4 text-white">{response}</div>
      )}

      <div className="mb-4 flex items-center justify-center">
        <div className="relative w-full max-w-lg">
          <InputText
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="inputtext"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Enter your query"
            style={{ paddingRight: "6rem" }}
          />
          <button
            onClick={handleButtonClick}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;
