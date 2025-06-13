import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export const Header = () => {
  const toggleMobileViewHandler = () => {
    const sideModal = document.getElementById("sideModal");
    const overlay = document.getElementById("sideModalOverlay");
    sideModal?.classList.add("open");
    overlay?.classList.add("show");
  };

  const themeHandler = () => {
    document.body.classList.toggle("light-mode");
  };

  const closeSideModal = () => {
    const sideModal = document.getElementById("sideModal");
    const overlay = document.getElementById("sideModalOverlay");
    sideModal.classList.remove("open");
    overlay.classList.remove("show");
  };

  return (
    <>
      <header className="crypto__header">
        <Link to="/">
          <div className="crypto__header-logo">💰 CryptoX</div>
        </Link>

        <nav className="crypto__header-nav-links" id="navLinks">
          <Link to="/">Home</Link>
          <Link to="/market">Market</Link>
          <Link to="/wallet">Wallet</Link>
          <Link to="/news">News</Link>
        </nav>

        <div className="crypto__header-theme">
          <div className="theme-toggle-container">
            <label className="theme-toggle-container__label">Dark Theme</label>
            <input
              type="checkbox"
              id="theme-toggle"
              className="theme-toggle-checkbox"
              onChange={themeHandler}
            />
            <label for="theme-toggle" className="theme-toggle-label">
              <span className="theme-toggle-ball"></span>
            </label>
          </div>
          <button
            id="menuToggle"
            className="hamburger"
            onClick={toggleMobileViewHandler}
          >
            ☰
          </button>
        </div>
      </header>

      {/* <!-- Side Modal --> */}
      <div
        className="crypto__header-modal"
        id="sideModalOverlay"
        onClick={closeSideModal}
      ></div>
      <aside className="crypto__header-modal-side" id="sideModal">
        <button
          className="close-modal"
          id="closeModal"
          onClick={closeSideModal}
        >
          ✕
        </button>
        <nav className="crypto__header-modal-nav">
          <Link to="/">Home</Link>
          <Link to="/market">Market</Link>
          <Link to="/wallet">Wallet</Link>
          <Link to="/news">News</Link>
        </nav>
      </aside>
    </>
  );
};
