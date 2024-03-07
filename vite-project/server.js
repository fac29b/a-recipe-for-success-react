import { fileURLToPath } from 'url';
import { createServer } from 'vite';
import express from 'express';
import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const __dirname = fileURLToPath(new URL('.', import.meta.url));

(async () => {
  const app = express();

  app.use(cors()); // CORS MIDDLEWARE 
  app.use(express.json());

  // Correct instantiation of OpenAIApi with your environment variable
  const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  }));

  const vite = await createServer({
    configFile: false,
    root: __dirname,
    server: {
      middlewareMode: 'html',
    },
  });

  app.use(express.json());
  app.use(vite.middlewares);

  app.get("/api/openai", async (req, res) => {
    try {
      // Correct use of the gpt-3.5-turbo model
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: "Provide a recipe."
          },
        ],
        max_tokens: 2000,
      });
      res.json(completion.data);
    } catch (error) {
      console.error("Failed to fetch from OpenAI:", error);
      res.status(500).json({ error: "Failed to fetch from OpenAI" });
    }
  });

  // PORT FOR SERVER HOSTING
  app.listen(1337, () => {
    console.log('Server running at http://localhost:1337');
  });
})();
