import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import ProductCart from "../ProductCart";
import Button from "../Button";
import "./style.scss";

const ItemCartContainer = () => {
  const { cartArray } = useContext(CartContext);
  console.log(cartArray);
  return (
    <div>
      <div className="container">
        {cartArray.map((item, i) => {
          return <ProductCart key={i} item={item} count={item.quantity} />;
        })}
        <Link to="./checkout">
          <Button label="Finalizar compra" size="large" />
        </Link>
      </div>
    </div>
  );
};

export default ItemCartContainer;
