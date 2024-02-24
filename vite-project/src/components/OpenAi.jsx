import React, { useState, useEffect } from "react";

const FetchOpenAI = () => {
  const [recipe, setRecipe] = useState("France"); // Example recipe!

  useEffect(() => {
    const fetchOpenAICompletion = async () => {
      try {
        const response = await fetch("/openai", {
          method: "GET",
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching OpenAI completion:", error);
      }
    };

    fetchOpenAICompletion();
  }, [recipe]);

  return (
    <div>
      <h2>OpenAI API Response</h2>
      {/* {This is where we generate the styling and placement of the AI response.} */}
    </div>
  );
};

export default FetchOpenAI;
