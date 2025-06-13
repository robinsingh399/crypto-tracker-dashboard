import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoChart } from "./CryptoChart";
import "./style.scss";
import { CryptoDetailsInfo } from "./CryptoDetailsInfo";

export const CryptoDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async function () {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}`
        );
        const data = await response.json();

        if (data) {
          setData(data);
          console.log(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return null;
  }

  const { image, name, symbol, description, market_data } = data;

  const {
    price_change_24h,
    price_change_percentage_24h,
    price_change_percentage_7d,
    price_change_percentage_30d,
    market_cap,
    market_cap_change_percentage_24h,
    total_volume,
  } = market_data;

  return (
    <>
      <div>
        <div className="crypto-card-details__header">
          <div className="crypto-card-details__header-details">
            <div className="crypto-card-details__header-info">
              {" "}
              <img src={image.large} alt="Bitcoin" className="coin-img" />
              <div className="crypto-card-details__header-name">
                <h2>{name}</h2>
                <p>{symbol}</p>
              </div>
            </div>

            <div className="crypto-card-details__prices">
              <CryptoDetailsInfo
                label="Price Change (24h)"
                value={price_change_24h}
                percentageChange={price_change_percentage_24h}
              />
              <CryptoDetailsInfo
                label="Price Change (7d)"
                percentageChange={price_change_percentage_7d}
              />
              <CryptoDetailsInfo
                label="Price Change (30d)"
                percentageChange={price_change_percentage_30d}
              />
              <CryptoDetailsInfo
                label="Market Cap"
                value={`$${market_cap.usd}`}
                percentageChange={market_cap_change_percentage_24h}
              />
              <CryptoDetailsInfo
                label="Total Volume"
                value={`$${total_volume.usd}`}
              />
            </div>
          </div>

          <div className="crypto-card-details__description">
            <p className="description">{description.en}</p>
          </div>
        </div>

        <div className="crypto__chart">
          <CryptoChart id={id} />
        </div>
      </div>
    </>
  );
};
