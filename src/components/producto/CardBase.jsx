import React from 'react';
import './cardBase.css';

const CardBase = ({ children, isVisible, onClose }) => {
    return (
        <div className={`card-container ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="card">
                {children}
                <button className="close-button" onClick={onClose}>X</button>
            </div>
        </div>
    );
};

export default CardBase;
