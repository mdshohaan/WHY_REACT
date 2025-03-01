import { useState } from "react";

const StateChangeEffect = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count</h2>
      <button onClick={() => setCount(count + 1)}>++</button>
    </div>
  );
};

export default StateChangeEffect;
