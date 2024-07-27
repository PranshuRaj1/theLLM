import React from "react";

function makeTextReadable(text) {
  // Split the text into parts based on key points and paragraph heading
  const parts = text.split(/(\d\.\s.*?:|\n\nParagraph:)/g);

  return (
    <div>
      {parts.map((part, index) => {
        if (index % 2 === 1) {
          // This part contains the key point heading or paragraph heading
          const isParagraphHeading = part.includes("Paragraph:");
          return (
            <div key={index} className="my-2">
              {isParagraphHeading ? (
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
