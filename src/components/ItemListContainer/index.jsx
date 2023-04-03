import Button from "../Button";
import ProductCard from "../ProductCard";
import SearchBar from "../SearchBar";
import "./style.scss";
import { Link, useParams } from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from "axios";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/8b6dffa2-7851-4795-8826-1f0f3f35f435")
      .then((res) =>{
        if(category){
          setProducts(res.data.filter((product)=> product.category === category))
        }else{
          setProducts(res.data)
        }
      } )
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <div className="parent">
      <SearchBar />
      <div className="categories">
        <Link to="/">
          <Button label="Todos" />
        </Link>
        <Link to="/cafe">
          <Button label="Cafes" />
        </Link>
        <Link to="/endulzantes">
          <Button label="Endulzantes" />
        </Link>
        <Link to="/maquinas">
          <Button label="Maquinas" />
        </Link>
        <Link to="/accesorios">
          <Button label="Accesorios" />
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
