import rocket from "./rocket.png";
import "./App.css";
import { useState } from "react";
import Feedback from "./component/Feedback";

function App() {
  const [count, setCount] = useState(0);
  // setTimeout(() => setCount(count + 1), 1000);
  console.log("count", count);
  // Add Count Button
  const handlePlus = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={rocket} className="App-logo" alt="logo" /> */}
        {/* <p className="font-bold underline"> Let's Go! </p>
        <p className="text-8xl"> {count}</p>
        <button onClick={handlePlus} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Count
        </button> */}

        {/* Feedback */}
        <Feedback />
      </header>
    </div>
  );
}

export default App;
