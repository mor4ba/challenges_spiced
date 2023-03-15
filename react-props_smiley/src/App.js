import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley smiling={true} />;
}

function Smiley({ smiling }) {
  return <h2>{smiling ? <span>sunny!</span> : <span>raining...</span>}</h2>;
}
