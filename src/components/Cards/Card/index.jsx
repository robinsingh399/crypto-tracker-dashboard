import React from "react";
import FavoriteButton from "../../FavouriteButton";

export const Card = ({
  id,
  img,
  currentPrice,
  marketCap,
  name,
  symbol,
  priceChange24h,
}) => {
  const isPositive = priceChange24h >= 0;
  const formatted = Math.abs(priceChange24h).toFixed(3);

  const style = {
    color: isPositive ? "green" : "red",
    fontWeight: "bold",
  };

  return (
    <div className="crypto-card">
      <div className="crypto-card__header">
        <img src={img} alt="Bitcoin" />
        <div className="crypto-card__title">
          <h2>{name}</h2>
          <span className="crypto-card__title-symbol">{symbol}</span>
        </div>
      </div>
      <div className="crypto-card__body">
        <p className="crypto-card__price">{`$${currentPrice}`}</p>
        <p>
          <span style={style}>
            {isPositive ? "+" : "-"}
            {formatted}
          </span>
        </p>
        <div className="crypto-card__marketcap">
          <p>Market Cap:</p>
          <p>{`$${marketCap.toLocaleString("en-US")}T`}</p>
        </div>
      </div>
      <FavoriteButton cardId={id} />
    </div>
  );
};
