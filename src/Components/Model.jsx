import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

const pretext = `do not use colon(:)in your response
Here is an example of the output format for a topic let it be India,
Continent Asia
Capital New Delhi
Population  1.393 billion
Area 3,287,263 km²
Religion Hinduism, Islam, Christianity, Sikhism, Buddhism, Jainism, Judaism, Zoroastrianism
Common Name Bharat
Description  India, officially the Republic of India (Hindi: Bhārat Gaṇarājya), is a country in South Asia. It is the seventh-largest country by area,
the second-most populous country, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, 
the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west; China, Nepal, 
and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; 
its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar, and Indonesia.

Note above example and answer is in the same format as above.
Now, below is a prompt, provide response in the same format as above for the same prompt provided.
The prompt is 
`;

export async function getGroqChatCompletion(message) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: pretext + message,
      },
    ],
    model: "llama3-70b-8192",
  });
}
