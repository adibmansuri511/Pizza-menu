import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozzarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozzarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozzarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozzarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <>
      <header className="header">
        <h1 style={style}>Fast React Pizza Co.</h1>
      </header>
    </>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <>
      <main className="menu">
        <h2>Our Menu</h2>

        {numPizzas > 0 ? (
          <>
            <p>
              Authentic Italian cuisine. 6 creative dishes to choose from. All
              from our stone oven, all organic, all delicious.
            </p>

            <ul className="pizzas">
              {pizzas.map((pizza) => {
                return <Pizza pizzaObj={pizza} key={pizza.name} />
              })}
            </ul>
          </>
        ) : (
          <p>We are still working on our menu. Please come back later.</p>
        )}

        {/* <Pizza
          name="Focaccia"
          ingredients="Bread with italian olive oil and rosemary"
          price={10}
          photoName="pizzas/focaccia.jpg"
        />
        <Pizza
          name="Pizza Margherita"
          ingredients="Tomato and mozzarella"
          price={10}
          photoName="pizzas/margherita.jpg"
        />
        */}
      </main>
    </>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  // if (pizzaObj.soldOut) {
  //   return (
  //     <>
  //       {null};
  //     </>
  //   );
  // }

  return (
    <>
      <li className={`pizza${pizzaObj.soldOut ? " sold-out" : ""}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.photoName} />
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <p><b>
          <span>{`${pizzaObj.soldOut ? "SOLD OUT" : `Price:${pizzaObj.price}$`}`}</span>
        </b></p>
      </li>
    </>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We are currently open!");
  // } else {
  //   alert("Sorry we are closed.");
  // }

  return (
    <>
      <footer className="footer">
        {isOpen ? <Order openHour={openHour} closeHour={closeHour} /> :
          (
            <p>We are happy to welcome you between {openHour}:00 and {closeHour}:00.</p>
          )}
      </footer>
    </>
  );
}

function Order({ openHour, closeHour }) {
  return (
    <>
      <div className="order">
        <p>
          We are open from {openHour}:00 to {closeHour}:00. Come visit us or order online.
        </p>
        <button className="btn">Order</button>
      </div>
    </>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);