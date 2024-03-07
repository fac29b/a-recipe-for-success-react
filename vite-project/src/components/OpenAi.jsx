import React, { useState, useEffect } from "react";
import { OpenAI } from "openai";

const FetchOpenAI = () => {
  // const [recipe, setRecipeType] = useState("");
  // const [recipe, setRecipeData] = useState(null);

  useEffect(() => {
    const fetchOpenAICompletion = async () => {
      try {
        const response = await fetch("/openai", {
          method: "GET",
        });

        const data = await response.json();
        console.log("OpenAI API Response:", data);
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
