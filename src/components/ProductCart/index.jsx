import "./style.scss";

const ProductCart = () => {
  return (
    <div className="item">
      <div className="item-img">
        <div></div>
      </div>
      <div className="item-props">
        <span className="title">Titulo del producto</span>
        <span className="price">$50000</span>
      </div>
      <div className="item-counter">
        <div className="btn"> - </div>
        <span className="quantity">01</span>
        <div className="btn"> + </div>
      </div>
    </div>
  );
};

export default ProductCart;
