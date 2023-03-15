import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Button text="Buttontext" color="red" isDisabled={false} />
      <Button text="button-2" color="green" isDisabled />
    </div>
  );
}

function Button(probs) {
  return (
    <button
      disabled={probs.isDisabled}
      style={{ backgroundColor: probs.color }}
    >
      {probs.text}
    </button>
  );
}
