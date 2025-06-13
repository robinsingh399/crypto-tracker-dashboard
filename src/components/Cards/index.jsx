import React from "react";
import { Card } from "./Card";
import { Link } from "react-router-dom";
import "./style.scss";

export const Cards = ({ currentItems }) => {
  return (
    <div className="card-container">
      {currentItems.map((coin) => {
        const {
          image,
          current_price,
          market_cap,
          name,
          symbol,
          price_change_24h,
          id,
        } = coin;

        const cardKey = "cardCoin-" + id;
        return (
          <Link to={`/coin/${id}`} key={cardKey}>
            <Card
              id={id}
              img={image}
              currentPrice={current_price}
              marketCap={market_cap}
              name={name}
              priceChange24h={price_change_24h}
              symbol={symbol}
            />
          </Link>
        );
      })}
    </div>
  );
};
