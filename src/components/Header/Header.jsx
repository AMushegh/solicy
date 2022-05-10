import React from "react";

import "./Header.css";

const Header = ({ onAddCard, onSortCard }) => {
    return (
        <header className="header">
            <button onClick={onAddCard}>add card</button>
            <button onClick={onSortCard}>sort card</button>
        </header>
    );
};

export default Header;
