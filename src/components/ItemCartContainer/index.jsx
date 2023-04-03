import ProductCart from "../ProductCart";
import "./style.scss";

const ItemCartContainer = ({products}) => {
  return (
    <div>
      <div className="container">
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
    </div>
  );
};

export default ItemCartContainer;
