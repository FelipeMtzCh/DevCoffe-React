import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
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
      .get("https://mocki.io/v1/8b6dffa2-7851-4795-8826-1f0f3f35f435")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer products={products} />} />
        <Route path="/:id" element={<ItemDetailContainer products={products} />} />
        <Route path="/cart" element={<ItemCartContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
