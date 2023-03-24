import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCartContainer from "./components/ItemCartContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("../data/products.json")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {/* <BrowserRouter> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer products={products} />} />
          <Route path="/products/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<ItemCartContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
