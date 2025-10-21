import React, { useState } from "react";

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset (){
    setCount(0)
    setStep(1)
  }

  console.log(date);
  return (
    <>
      <div>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span> Step: {step}</span>
        {/* <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button> */}
      </div>
      <div>
        <button onClick={() => setCount((s) => s - step)}>-</button>
        <input
          type="text"
          placeholder="请输入增加的天数..."
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((s) => s + step)}>+</button>
      </div>

      <p>{date.toDateString()}</p>
      <button onClick={handleReset}>重置</button>
    </>
  );
};

export default Counter;
