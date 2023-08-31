import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./HomePage";

function App() {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return <HomePage products={Products} />;
}

export default App;
