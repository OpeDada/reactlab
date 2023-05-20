import React from "react";
import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function handleInput1Change(e) {
    setInput1(e.target.value);
  }

  function handleInput2Change(e) {
    setInput2(e.target.value);
  }

  function plus(e) {
    e.preventDefault();
    setResult(Number(input1) + Number(input2));
  }

  function minus(e) {
    // Add the code for the minus function
    e.preventDefault();
    setResult(Number(input1) - Number(input2));
  }

  function times(e) {
    // Add the code for the plus function
    e.preventDefault();
    setResult(Number(input1) * Number(input2));
  }

  function divide(e) {
    // Add the code for the divide function
    e.preventDefault();
    setResult(Number(input1) / Number(input2));
  }

  function resetInput(e) {
    // Add the code for the resetInput function
    e.preventDefault();
    setInput1("");
    setInput2("");
  }

  function resetResult(e) {
    // Add the code for the resetResult function
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <input
          pattern="[0-9]"
          value={input1}
          type="number"
          placeholder="Type a number"
          onChange={handleInput1Change}
        />
        <input
          type="number"
          placeholder="Type another number"
          value={input2}
          onChange={handleInput2Change}
        />
        <h2>Result: {result}</h2>
        <button onClick={plus}>Add</button>
        <button onClick={minus}>Subtract</button>
        <button onClick={times}>Multiply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>
      </form>
    </div>
  );
}

export default App;
