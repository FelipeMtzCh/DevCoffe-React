import { Link } from "react-router-dom";
import Button from "../Button";
import ProductCard from "../ProductCard";
import SearchBar from "../SearchBar";
import "./style.scss";

const ItemListContainer = ({ products }) => {
  return (
    <div className="parent">
      <SearchBar />
      <div className="categories">
        <Link to="/">
          <Button label="Todos" />
        </Link>
        <Link to="/categories/:idCategory">
          <Button label="Cafes" />
        </Link>
        <Link to="/categories/:idCategory">
          <Button label="Endulzantes" />
        </Link>
        <Link to="/categories/:idCategory">
          <Button label="Maquinas" />
        </Link>
      </div>
      <span className="main-title">Productos Destacados</span>
      <div className="main-container">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ItemListContainer;
