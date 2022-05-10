import React from "react";

import Card from "../Card/Card";

import "./CardList.css";

const CardList = ({ cardValues, onRemoveCard }) => {
    return (
        <ul className="card-list">
            {cardValues.map((cardValue) => (
                <li key={cardValue}>
                    <Card onRemove={onRemoveCard} text={cardValue} />
                </li>
            ))}
        </ul>
    );
};

export default CardList;
