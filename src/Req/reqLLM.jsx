import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

const pretext = `Your task is to provide comprehensive, structured information about any search query.

Always format your response with the following sections in this exact order:
1. Basic information (Name, Category, Date of Birth/Founding, Location, etc. as appropriate)
2. Famous for (Key achievements or notable aspects)
3. Contributions (Major impacts or innovations)
4. Path to success (How they achieved prominence or developed)
5. Description (detailed information in bullet points)

Here is an example for a person:

Virat Kohli
Category Professional Cricketer
Nationality Indian
Born November 5, 1988
Teams Royal Challengers Bangalore, Indian National Cricket Team
Role Batsman, Former Captain

Famous for
• One of cricket's greatest batsmen with exceptional consistency across all formats
• Former captain of the Indian cricket team with impressive win record
• Holder of numerous batting records in international cricket

Contributions
• Revolutionized fitness standards in Indian cricket
• Developed aggressive batting technique particularly effective in run chases
• Transformed Indian test cricket with emphasis on pace bowling

Path to Success
• Led India to U-19 World Cup victory in 2008
• Refined technique after initial struggles in international cricket
• Consistent performance in IPL and domestic cricket
• Stepped up after retirement of senior players like Sachin Tendulkar

Description
• Regarded as one of the greatest batsmen in cricket history with outstanding technique
• Known for his aggressive captaincy style and passionate on-field demeanor
• Holds the record for fastest batsman to reach 10,000 ODI runs
• Received India's highest sporting honor, the Rajiv Gandhi Khel Ratna award
• Established the Virat Kohli Foundation to help underprivileged children
• Married to Bollywood actress Anushka Sharma
• Follows a strict fitness regimen and plant-based diet
• Has endorsement deals with numerous global brands
• Advocates for environmental causes and sustainable development

For other topics like places, events, concepts, or organizations, adapt the structure accordingly while maintaining comprehensive bullet-pointed sections.

Now, please provide information about:`;

export async function getGroqChatCompletion(message) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: pretext + message,
      },
    ],
    model: "llama3-70b-8192",
    temperature: 0.4, // Slightly lower temperature for more consistency
    max_tokens: 1500, // Increased token limit for more comprehensive responses
  });
}
