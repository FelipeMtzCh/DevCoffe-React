import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../Button";
import Properties from "../Properties";
import SearchBar from "../SearchBar";
import "./style.scss";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  let [count, setCount] = useState(0);
  const Add = () => setCount((count) => count + 1);
  const Sus = () => setCount((count) => count - 1);
  const Res = () => setCount((count) => count - count);
  if(count < 0){
    count = 0;
  }
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/8b6dffa2-7851-4795-8826-1f0f3f35f435")
      .then((res) =>
        setProduct(res.data.find((item) => item.id === parseInt(id)))
      )
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="container">
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
          <Button label="Agregar al carrito" click={Res}/>
          <Button label="+" click={Add} />
          <span className="">{count}</span>
          <Button label="-" click={Sus} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
