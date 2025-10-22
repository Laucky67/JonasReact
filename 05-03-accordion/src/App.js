import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion faqs={faqs} />
    </div>
  );
}

function Accordion({ faqs }) {
  const [curOpen, setCurOpen] = useState(1);

  return (
    <div className="accordion">
      {faqs.map((faq, i) => (
        <AccordionItem
          title={faq.title}
          text={faq.text}
          num={i}
          key={faq.title}
          curOpen={curOpen}
          setCurOpen={setCurOpen}
        />
      ))}
    </div>
  );
}

function AccordionItem({ title, text, num, curOpen, setCurOpen }) {
  const handleToggleItem = (num) => {
    if (num === curOpen) setCurOpen(null);
    else setCurOpen(num);
  };

  return (
    <div
      className={`item ${num === curOpen ? "open" : ""}`}
      onClick={() => handleToggleItem(num)}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{num === curOpen ? "-" : "+"}</p>

      {num === curOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
