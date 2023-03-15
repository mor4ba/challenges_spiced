import React from "react";
import "./styles.css";

export default function App() {
  return helloWorldArticle();
}

function helloWorldArticle() {
  return (
    <article>
      <h1>Hello world</h1>
      <p>This is some paragraph</p>
    </article>
  );
}
