import CartIcon from "../../assets/svg/CartIcon.svg";
import "./style.scss"

const CartWidget = ({ content }) => {
  return (
    <div>
      <img className="icon" src={CartIcon} alt="" />
      <div className="counter">{content}</div>
    </div>
  );
};

export default CartWidget;