const baseUrl = process.env.API_BASE_URL;

export async function getGroqChatCompletion(message) {
  const response = await fetch(`${baseUrl}/api/groq-completion`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error("Failed to get chat completion");
  }

  return response.json();
}
