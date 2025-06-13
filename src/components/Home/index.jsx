import React, { useEffect, useMemo, useRef, useState } from "react";
import { Cards } from "../Cards";
import { Pagination } from "../Pagination";
import loaderSvg from "../loader/ringLoader.svg";
import "./style.scss";

export const Home = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("dayChange");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 12;

  const debounceTimeout = useRef(null);

  useEffect(() => {
    const fetchData = async function () {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
        );
        const data = await response.json();

        if (data) {
          setData(data);
        }
      } catch (error) {
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    const value = event.target.value;

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    // We are using here deboucing to limit the api calls to reduce the load on server .
    debounceTimeout.current = setTimeout(() => {
      setSearchTerm(value);
    }, 300);
  };

  const filteredData = useMemo(() => {
    return data
      .filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (sortKey === "price") {
          return a.current_price - b.current_price;
        } else if (sortKey === "marketCap") {
          return a.market_cap - b.market_cap;
        } else {
          return a.price_change_24h - b.price_change_24h;
        }
      });
  }, [data, searchTerm, sortKey]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(startIdx, startIdx + itemsPerPage);

  if (loading) {
    return (
      <div className="preLoader">
        <img src={loaderSvg} alt="Loading..." width={100} height={100} />;
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="crypto-actionBar">
      <div className="crypto-actionBar__search-wrapper">
        <span className="crypto-actionBar__search-icon">🔍</span>
        <input
          type="text"
          className="crypto-actionBar__search-input"
          placeholder="Search cryptocurrencies..."
          onChange={handleSearchChange}
        />
      </div>
      <div className="crypto-actionBar__dropdown-container">
        <label for="crypto-select">Sort By:</label>
        <select
          id="crypto-select"
          className="crypto-actionBar__dropdown"
          onChange={(e) => setSortKey(e.target.value)}
        >
          <option value="price">Price</option>
          <option value="marketCap">Market Cap</option>
          <option value="dayChange" defaultValue>
            24h Change
          </option>
        </select>
      </div>
      <Cards currentItems={currentItems} />
      <Pagination
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};
