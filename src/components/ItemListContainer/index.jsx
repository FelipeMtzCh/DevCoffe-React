import Button from "../Button";
import ProductCard from "../ProductCard";
import SearchBar from "../SearchBar";
import "./style.scss";

const ItemListContainer = ({ products }) => {
  return (
    <div className="parent">
      <SearchBar />
      <div className="categories">
        <Button label="Todos" />
        <Button label="Cafes" />
        <Button label="Endulzantes" />
        <Button label="Maquinas" />
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
