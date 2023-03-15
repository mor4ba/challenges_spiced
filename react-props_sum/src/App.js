import React from "react";
import "./styles.css";

export default function App() {
  return Sum(2, 6);
}

function Sum(valueA, valueB) {
  let sum = valueA + valueB;

  return <h2>{sum}</h2>;
}
