import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartIcon from "../../assets/svg/CartIcon.svg";
import "./style.scss"

const CartWidget = () => {
  const {cartArray} = useContext(CartContext);
  return (
    <div>
      <img className="icon" src={CartIcon} alt="" />
      <div className="counter">{cartArray.length}</div>
    </div>
  );
};

export default CartWidget;