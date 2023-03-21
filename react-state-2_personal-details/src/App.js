import React from "react";
import "./styles.css";
import Form from "./components/Form.js";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState("");

  function handleChange(change) {
    setData(change);
    console.log(data);
  }
  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form execute={handleChange} />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{data.name}</span>
      </p>
      <p>
        Email: <span className="output">{data.email}</span>
      </p>
    </div>
  );
}
