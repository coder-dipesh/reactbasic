import { useState } from "react";

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Good
  const handleGood = () => {
    setGood(good + 1);
  };
  // Neutral
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  // Bad
  const handleBad = () => {
    setBad(bad + 1);
  };
  return (
    <div className="">
      <h2>Feedback</h2>
      <p>What do you think about this app?</p>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      <p>Good : {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad : {bad}</p>
      <p>All : {good + neutral + bad}</p>
    </div>
  );
};

export default Feedback;
