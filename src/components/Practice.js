import React, { useState } from "react";

function Practice() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={increment}>Increment</button>
      {count}
    </div>
  );
}

export default Practice;
