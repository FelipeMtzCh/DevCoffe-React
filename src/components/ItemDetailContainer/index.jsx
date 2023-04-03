import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../Button";
import Properties from "../Properties";
import SearchBar from "../SearchBar";
import "./style.scss";

const ItemDetailContainer = ({ products }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  return (
    <div className="container">
      <div className="searchbar">
        <SearchBar />
      </div>
      <div className="image"></div>
      <div className="slider">
        <div className="item selected"></div>
        <div className="item deselected"></div>
        <div className="item deselected"></div>
      </div>
      <div className="props">
        <Properties />
      </div>
      <div className="container-footer">
        <span className="title">{product.title}</span>
        <span className="description">{product.description}</span>
        <span className="price">${product.price}</span>
        <Button label="Agregar al carrito" />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
