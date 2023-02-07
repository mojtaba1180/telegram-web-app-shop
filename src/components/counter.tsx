import { useState } from "react";

function Counter() {
  const [number, setNumber] = useState<number>(0);

  const incrementNumber = () => {
    setNumber((currentState) => currentState + 1);
  };

  return (
    <button
      type="button"
      className="flex w-40 items-center justify-evenly overflow-hidden rounded-lg bg-sky-500 p-2 text-center font-bold text-white transition hover:shadow-xl focus:outline-none"
      onClick={incrementNumber}>
      <span>Click Me</span>

      <span>:</span>

      <span>{number}</span>
    </button>
  );
}

export default Counter;
