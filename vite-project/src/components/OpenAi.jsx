import React, { useState, useEffect } from "react";
import { OpenAI } from "openai";

const FetchOpenAI = () => {
  const [recipe, setRecipe] = useState("French"); // Example recipe!
  const openai = new OpenAI({
    apiKey: "import.meta.env.OPENAI_API_KEY",
  });
  console.log(openai);

  useEffect(() => {
    const fetchOpenAICompletion = async () => {
      try {
        const response = await fetch("/openai", {
          method: "GET",
        });
        // const response = await fetch(
        //   "https://jsonplaceholder.typicode.com/posts/1",
        //   {
        //     method: "GET",
        //   }
        // );

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
