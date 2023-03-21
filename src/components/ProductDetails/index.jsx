import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../Button";
import Properties from "../Properties";
import SearchBar from "../SearchBar";
import "./style.scss";

const ProductDetails = () => {
  const { id } = useParams();
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
        <span className="title">Titulo del producto</span>
        <span className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          quas possimus ut dolorem perferendis accusantium a cumque vero ipsam
          nulla? Repellendus enim ex fugit nesciunt dicta magnam perferendis
          fuga dolorem?
        </span>
        <span className="price">$50.000</span>
        <Button label="Agregar al carrito" />
      </div>
    </div>
  );
};

export default ProductDetails;
