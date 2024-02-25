import React from "react";
import Input from "./Input";
import Button from "./Button";
import "../css/Button.css";
import "../css/Input.css";
import "../css/Container.css";
import "../css/Body.css";
import FetchOpenAI from "./OpenAi";

export const Container = () => {
  return (
    <main aria-label="container" className="container">
      <h1>
        Don't know what to cook? No worries recipe for succsess app does the
        thinking for you.
      </h1>
      <Input />
      <section className="button-section">
        <Button>Italian</Button>
        <Button>Chinese</Button>
        <Button>Peruvian</Button>
        <Button>Surprise me</Button>
      </section>
      <FetchOpenAI />
    </main>
  );
};

export default Container;
