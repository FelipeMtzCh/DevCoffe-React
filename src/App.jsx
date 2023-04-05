import "./App.css";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCartContainer from "./components/ItemCartContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import FormCheckout from "./components/FormCheckout";
import CartProvider from "./contexts/CartContext";

function App() {
  return (
    <div>
      <CartProvider>
        <Toaster position="top-right" reverseOrder={true} />
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/:category" element={<ItemListContainer />} />
          <Route path="/products/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<ItemCartContainer />} />
          <Route path="/cart/checkout" element={<FormCheckout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
