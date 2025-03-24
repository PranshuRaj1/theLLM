import React from "react";

function makeTextReadable(text) {
  // Function to handle asterisk-enclosed headers
  const processAsteriskHeaders = (line) => {
    // Match content between double asterisks: **text**
    const headerMatch = line.match(/\*\*(.*?)\*\*/);

    if (headerMatch) {
      // Extract the header text between asterisks
      const headerText = headerMatch[1];
      // Replace the original **text** with properly formatted JSX
      return line.replace(
        /\*\*(.*?)\*\*/,
        `<span class="text-yellow-400 font-bold">${headerText}</span>`
      );
    }
    return line;
  };

  try {
    // Process the text line by line
    const lines = text.split("\n");
    const processedLines = [];

    lines.forEach((line) => {
      let processedLine = line;

      // If line contains double asterisks (section headers)
      if (line.includes("**")) {
        processedLine = processAsteriskHeaders(line);
      }

      // Process single asterisk bullet points
      if (line.trim().startsWith("* ")) {
        const content = line.substring(2).trim();
        processedLine = `<li><span class="text-yellow-400 mr-2">*</span>${content}</li>`;
      }

      processedLines.push(processedLine);
    });

    // Convert the processed array to HTML-like structure
    const htmlContent = processedLines.join("\n");

    // Render the content using dangerouslySetInnerHTML (in real app, consider a safer approach)
    return (
      <div className="text-white">
        <div
          dangerouslySetInnerHTML={{
            __html: htmlContent
              .replace(/<li>/g, '<div class="flex items-start mb-2">')
              .replace(/<\/li>/g, "</div>"),
          }}
          className="space-y-3"
        />
      </div>
    );
  } catch (error) {
    // Fallback for any parsing errors
    console.error("Error parsing text:", error);
    return <div className="text-white whitespace-pre-line">{text}</div>;
  }
}

// Safer approach without dangerouslySetInnerHTML
function makeTextReadableImproved(text) {
  try {
    const lines = text.split("\n");
    return (
      <div className="text-white max-w-3xl mx-auto space-y-3">
        {lines.map((line, index) => {
          // Handle section headers with double asterisks
          if (line.includes("**")) {
            const parts = line.split("**");
            return (
              <div key={index} className="my-3">
                {parts.map((part, partIndex) => {
                  // Every odd-indexed part is inside asterisks
                  if (partIndex % 2 === 1) {
                    return (
                      <span
                        key={`header-${partIndex}`}
                        className="text-yellow-400 font-bold"
                      >
                        {part}
                      </span>
                    );
                  }
                  return <span key={`text-${partIndex}`}>{part}</span>;
                })}
              </div>
            );
          }

          // Handle bullet points with single asterisk
          if (line.trim().startsWith("* ")) {
            const content = line.substring(2).trim();
            return (
              <div key={index} className="flex items-start">
                <span className="text-yellow-400 mr-2 font-bold">*</span>
                <span>{content}</span>
              </div>
            );
          }

          // Regular line
          return <div key={index}>{line}</div>;
        })}
      </div>
    );
  } catch (error) {
    console.error("Error processing text:", error);
    return <div className="text-white whitespace-pre-line">{text}</div>;
  }
}

// Export the safer version
export default makeTextReadableImproved;
