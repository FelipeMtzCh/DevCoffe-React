import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("../data/products.json")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer products={products} />} />
        <Route path="/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
