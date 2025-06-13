import React from "react";
import "./style.scss";

export const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPageButtons = () => {
    const buttons = [];

    buttons.push(
      <button
        key="first"
        className={`pagination-controls__btn ${
          currentPage === 1 ? "active" : ""
        }`}
        onClick={() => goToPage(1)}
      >
        1
      </button>
    );

    if (currentPage > 6) {
      buttons.push(
        <span key="start-ellipsis" className="ellipsis">
          ...
        </span>
      );
    }

    const start = Math.max(2, currentPage);
    const end = Math.min(currentPage + 4, totalPages - 1);

    for (let i = start; i <= end; i++) {
      buttons.push(
        <button
          key={i}
          className={`pagination-controls__btn ${
            currentPage === i ? "active" : ""
          }`}
          onClick={() => goToPage(i)}
        >
          {i}
        </button>
      );
    }

    if (currentPage + 4 < totalPages - 1) {
      buttons.push(
        <span key="end-ellipsis" className="ellipsis">
          ...
        </span>
      );
    }

    if (totalPages > 1) {
      buttons.push(
        <button
          key="last"
          className={`pagination-controls__btn ${
            currentPage === totalPages ? "active" : ""
          }`}
          onClick={() => goToPage(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="pagination-controls">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="pagination-controls__btn"
      >
        Prev
      </button>
      {getPageButtons()}
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="pagination-controls__btn"
      >
        Next
      </button>
    </div>
  );
};
