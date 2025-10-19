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

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt="" />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredints}</p>
        <span>{props.price + 3}</span>
      </div>
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
    <main className="menu">
      <h2>My Menu</h2>
      {pizzaData.map((pizza) => (
        <Pizza
          key={pizza.name}
          name={pizza.name}
          ingredints={pizza.ingredients}
          price={pizza.price}
          photoName={pizza.photoName}
        />
      ))}
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      {new Date().toLocaleDateString()}. Welcome to my Pizza Shop
    </footer>
  );
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
