import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isActive, setfirst] = useState(false);

  function handleClick() {
    //isActive = !isActive;
    setfirst((current) => !current);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Active!" : "deactivated"}
      </button>
    </main>
  );
}
