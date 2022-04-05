import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    const increaseCount = count + 1;
    setCount(increaseCount);
  };

  const decreaseCount = () => {
    const decreaseCount = count - 1;
    setCount(decreaseCount);
  };

  return (
    <div className="App">
      <h1>Contador</h1>
      <h2> {count}</h2>
      <button onClick={increaseCount}> + </button>
      <button onClick={decreaseCount}> - </button>
    </div>
  );
}

export default App;
