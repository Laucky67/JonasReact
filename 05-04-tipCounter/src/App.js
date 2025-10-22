import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [mypercent, setMypercent] = useState(0);
  const [frpercent, setFrpercent] = useState(0);

  const handleReset = () => {
    setBill(0);
    setFrpercent(0);
    setMypercent(0);
  };
  return (
    <div className="App">
      <BillInput bill={bill} setBill={setBill} />
      <Percentage percentage={mypercent} setPercentage={setMypercent}>
        你的满意度？
      </Percentage>
      <Percentage percentage={frpercent} setPercentage={setFrpercent}>
        朋友的满意度？
      </Percentage>
      {bill > 0 && (
        <>
          <CheckOut bill={bill} mypercent={mypercent} frpercent={frpercent} />
          <Button onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, setBill }) {
  return (
    <div>
      <span>费用是多少？</span>
      <input
        type="text"
        placeholder="请输入账单费用"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

function Percentage({ percentage, setPercentage, children }) {
  return (
    <div>
      <span>{children}</span>
      <select
        value={percentage}
        onChange={(e) => setPercentage(Number(e.target.value))}
      >
        {Array.from({ length: 21 }, (_, i) => i * 5).map((percentage) => (
          <option value={percentage}>{percentage}%</option>
        ))}
      </select>
    </div>
  );
}

function CheckOut({ bill, mypercent, frpercent }) {
  let tips = (((mypercent + frpercent) / 2) * bill) / 100;
  return (
    <div>
      <p>
        你需要支付{bill + tips}元（{bill}元干饭钱+{tips}元小费）
      </p>
      <p>实际上我不会给小费，中国不流行这玩意</p>
    </div>
  );
}

function Button({ onReset }) {
  return <button onClick={onReset}>重置</button>;
}

export default App;
