import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { toast } from "react-hot-toast";
import { collection, getDocs } from "@firebase/firestore";
import db from "../../../db/firebase-config.js"
import Button from "../Button";
import Properties from "../Properties";
import SearchBar from "../SearchBar";
import "./style.scss";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const productsRef = collection(db, "products");
  let [count, setCount] = useState(1);
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const Add = () => setCount((count) => count + 1);
  const Sus = () => setCount((count) => count - 1);
  const Res = () => {
    toast.success("Producto agregado al carrito!!");
    addToCart(count, product);
    setCount(0);
  };
  if (count < 1) {
    setCount(1);
  }

  const fetchProducts = async () => {
    const productsCollection = await getDocs(productsRef);
    const res = productsCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProduct(res.find((product) => product.id === id));
  };
  useEffect(() => {
    fetchProducts();
  }, [id]);
  console.log(product);

  return (
    <div className="container-detail">
      <div className="searchbar">
        <SearchBar />
      </div>
      <div className="image"></div>
      <div className="slider">
        <div className="item selected"></div>
        <div className="item deselected"></div>
        <div className="item deselected"></div>
      </div>
      <div className="props">
        <Properties />
      </div>
      <div className="container-footer">
        <span className="title">{product.title}</span>
        <span className="description">{product.description}</span>
        <span className="price">${product.price}</span>
        <div className="cart-section">
          <Button label="Agregar al carrito" size="small" click={Res} />
          <Button label="+" size="medium" click={Add} />
          <span className="count">{count}</span>
          <Button label="-" size="medium" click={Sus} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
