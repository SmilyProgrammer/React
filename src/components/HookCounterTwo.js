import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  // Increment Five
  function incrementFive() {
    for (let i = 1; i <= 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  }
  return (
    <div>
      count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button
        onClick={() =>
          setCount((prevCount) =>
            prevCount === 0 ? initialCount : prevCount - 1
          )
        }
      >
        Decrement
      </button>
      <button onClick={incrementFive}>Increment5</button>
    </div>
  );
}

export default HookCounterTwo;
