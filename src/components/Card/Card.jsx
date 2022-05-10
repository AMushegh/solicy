import React from "react";

import "./Card.css";

const Card = ({ text, onRemove }) => {
    return (
        <div className="card">
            <span className="card__close-icon" onClick={() => onRemove(text)}>
                &times;
            </span>
            {text}
        </div>
    );
};

export default Card;
