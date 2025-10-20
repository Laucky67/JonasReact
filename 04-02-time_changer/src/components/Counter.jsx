import React, { useState } from "react";

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date()
  date.setDate(date.getDate()+count)

  console.log(date)
  return (
    <>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((s) => s - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((s) => s + step)}>+</button>
      </div>

      <p>{date.toDateString()}</p>
    </>
  );
};

export default Counter;
