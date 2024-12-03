import React, { useState } from "react";
import "./CardBase.css";

const Modal = ({ items, setmodal }) => {
  return (
    <div className="modal-overlay">
      <div className="card-container">
        <button className="close-button" onClick={() => setmodal(false)}>
          X
        </button>
        <img 
          src={items.img} 
          alt={items.nombre} 
          className="modal-image"
        />
        <div className="text">
          <h3 className="modal-title">{items.nombre}</h3>
          <p>{items.descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
