import "./style.scss";
import { useState } from "react";

const ProductCart = ({item, count}) => {
  let [quantity, setQuantity] = useState(count);
  const Add = () => setQuantity((count) => count + 1);
  const Sus = () => setQuantity((count) => count - 1);
  item.quantity = quantity;

  return (
    <div className="item">
      <div className="item-img">
        <div></div>
      </div>
      <div className="item-props">
        <span className="title">{item.item.title}</span>
        <span className="price">${item.item.price}</span>
      </div>
      <div className="item-counter">
        <div className="btn" onClick={Sus}> - </div>
        <span className="quantity">{quantity}</span>
        <div className="btn" onClick={Add}> + </div>
      </div>
    </div>
  );
};

export default ProductCart;
