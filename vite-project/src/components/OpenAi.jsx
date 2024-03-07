import React, { useState, useEffect } from "react";

const FetchOpenAI = () => {
  const [recipe, setRecipeType] = useState(null);

  useEffect(() => {
    const fetchOpenAICompletion = async () => {
      try {
        const response = await fetch("/api/openai", {
          method: "GET",
        });

        const data = await response.json();
        console.log("OpenAI API Response:", data);
        setRecipeType(data);
        console.log(recipe);
      } catch (error) {
        console.error("Error fetching OpenAI completion:", error);
      }
    };

    fetchOpenAICompletion();
  }, []);

  return (
    <div>
      <h2>OpenAI API Response</h2>
      {/* {This is where we generate the styling and placement of the AI response.} */}
    </div>
  );
};

export default FetchOpenAI;
