import React from "react";

export const CryptoDetailsInfo = ({ label, value, percentageChange }) => {
  const isPositive = percentageChange >= 0;
  const formatted = Math.abs(percentageChange).toFixed(3);

  const style = {
    color: isPositive ? "green" : "red",
    fontWeight: "bold",
  };

  return (
    <div className="crypto-card-details__prices-change ">
      <p class="title">
        {label} <span class="tooltip"> ⓘ</span>
      </p>
      <p class="value">
        {value}{" "}
        {percentageChange && (
          <p style={style}>
            {isPositive ? "+" : "-"}
            {`${formatted}%`}
          </p>
        )}
      </p>
    </div>
  );
};
