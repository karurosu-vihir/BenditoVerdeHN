import React, { useState } from "react";
import "./CardBasecss.css";

const Modal = ({ items, setmodal }) => {
  const [showDetails, setShowDetails] = useState(false); 

  return (
    <div className="modal-overlay">
      <div className="card-container">
        <button className="close-button" onClick={() => setmodal(false)}>
          X
        </button>

        {!showDetails ? (
          
          <>
            <img
              src={items.img}
              alt={items.nombre}
              style={{
                width: "100%",
                height: "500px", 
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
            <button
              className="navigate-button"
              onClick={() => setShowDetails(true)}
            >
              Detalles
            </button>
          </>
        ) : (
          
          <>
            <div className="text">
              <h3 className="modal-title">{items.nombre}</h3>
              <p>{items.descripcion}</p>
            </div>
            <button
              className="navigate-button"
              onClick={() => setShowDetails(false)}
            >
              Regresar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
