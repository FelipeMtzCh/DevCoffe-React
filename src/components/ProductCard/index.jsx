import { Link } from "react-router-dom";
import "./style.scss";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="container-products">
        <div className="product">
          <div className="product-image"></div>
          <p className="name">{product.title}</p>
          <p className="description">{product.description}</p>
          <p className="price">${product.price}</p>
          {/* <button className="btn-addcart">Agregar</button> */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
