import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { pizzaData } from "./data";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast Pizza APP</h1>
    </header>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>My Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
    </div>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut&&"sold-out"}`}>
      <img src={pizzaObj.photoName} alt="" />
      <div >
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredints}</p>
        <span>{pizzaObj.soldOut?"Sold Out":pizzaObj.price + 3}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hourNow = new Date().getHours();
  const openHour = 0;
  const closeHour = 22;

  const isOpen = hourNow >= openHour && hourNow < closeHour;

  return (
    <footer className="footer">
      {new Date().toLocaleDateString()}. Welcome to my Pizza Shop
      <br />
      {isOpen ? <Order hourNow={hourNow}/> : (
        <div className="order">
          <p>
            We will be back in {openHour}:00 to {closeHour}:00
          </p>
        </div>
      )}
    </footer>
  );
}

function Order(props){
  return(
        <div className="order">
          <div>当前是{props.hourNow}点，正常营业中</div>
          <button className="btn">点单</button>
        </div>
      )

}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));
