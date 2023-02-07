import React from "react";
import "./Produkt.css";

export default function Produkt(props) {
  return (
    <div className="divProdukt">
      <div className="img_container">
        <img src={props.image} alt="" />
      </div>
      <div>
        <h2>{props.price}</h2>
        <div className="span"> {props.name} </div>
      </div>
      <button className="btn">Купить</button>
    </div>
  );
}
