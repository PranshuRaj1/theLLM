import React from "react";

function makeTextReadable(text) {
  // Split the text into parts based on key points, paragraph headings, and brief descriptions
  const parts = text.split(
    /(\d\.\s.*?:|\n\nParagraph:|\*\*Brief Description\*\*|Description|Paragraph|Religion|Area|Population|Capital|Continent|Common Name|Description|Medical Uses)/g
  );

  return (
    <div>
      {parts.map((part, index) => {
        if (index % 2 === 1) {
          // This part contains key point heading, paragraph heading, or brief description

          if (part.includes("Brief Description:")) {
            return (
              <div key={index} className="my-2">
                <span className="font-bold text-green-500">
                  Brief Description:
                </span>
                <div className="ml-4">
                  <p>{parts[index + 1] ? parts[index + 1].trim() : null}</p>
                </div>
              </div>
            );
          }

          if (part.startsWith("•")) {
            // Handle bullet points
            return (
              <div key={index} className="my-2">
                <div>
                  <span className="font-bold text-yellow-500">
                    {part.trim()}
                  </span>
                  <div className="ml-4">
                    {parts[index + 1] ? <p>{parts[index + 1].trim()}</p> : null}
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div key={index} className="my-2">
              {part.includes("Paragraph:") ? (
                <span className="font-bold text-blue-500">
                  {part.replace("Paragraph:", "").trim()}
                </span>
              ) : (
                <div>
                  <span className="font-bold text-yellow-500">
                    • {part.replace(/\*\*/g, "").trim()}
                  </span>
                  <div className="ml-4">
                    {parts[index + 1] ? <p>{parts[index + 1].trim()}</p> : null}
                  </div>
                </div>
              )}
            </div>
          );
        }
        return null; // Skip the non-key point parts
      })}
    </div>
  );
}

export default makeTextReadable;
