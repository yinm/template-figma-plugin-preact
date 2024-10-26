import { useState } from "preact/hooks";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={() => setCount((v) => v + 1)}>
        count up
      </button>
    </div>
  );
}
