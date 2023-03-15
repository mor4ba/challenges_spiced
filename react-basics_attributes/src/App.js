import React from "react";
import "./styles.css";

export default function App() {
  return (
    <article className="article">
      <h2 className="article__title">TITEL</h2>
      <label htmlFor="input1">
        <input id="input1" type="text"></input>
      </label>
      <a href="#" className="article__link">
        article-link
      </a>
    </article>
  );
}
