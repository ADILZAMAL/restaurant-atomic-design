import React from "react";
import "./styles.css";
export default function Text({ text, type, gutterBottom }) {
  console.log(type);
  return (
    <p className={`text ${type} ${gutterBottom ? "gutterBottom" : ""}`}>
      {text}
    </p>
  );
}
