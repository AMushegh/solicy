import React, { useState } from "react";

import CardList from "./components/CardList/CardList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import "./App.css";
import Sider from "./components/Sider/Sider";

const App = () => {
    const [cardValues, setCardValues] = useState([]);

    const addCardHandler = () => {
        const newValue = Math.floor(Math.random() * 1000);

        if (cardValues.includes(newValue)) {
            addCardHandler();
        } else {
            setCardValues([...cardValues, newValue]);
        }
    };

    const sortCardsHandler = () => {
        const sortedValues = cardValues.sort((a, b) => a - b);
        setCardValues([...sortedValues]);
    };

    const removeCardHandler = (cardValue) => {
        setCardValues(cardValues.filter((value) => value !== cardValue));
    };

    return (
        <div className="layout">
            <div className="content">
                <Header
                    onAddCard={addCardHandler}
                    onSortCard={sortCardsHandler}
                />
                <CardList
                    cardValues={cardValues}
                    onRemoveCard={removeCardHandler}
                />
                <Footer />
            </div>
            <Sider />
        </div>
    );
};

export default App;
