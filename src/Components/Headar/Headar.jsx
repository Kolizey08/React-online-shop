import React from "react";
import "./Headar.css";
import {BsFillCartCheckFill} from 'react-icons/bs'

export default function Headar() {
  return (
    <div className="divHeadar">
      <h2 className="headarText">Intocode Coding Shopcamp</h2>
      <BsFillCartCheckFill />
    </div>
  );
}
