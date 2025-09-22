import React from "react";
import "../../Styles/Pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  if (totalPages === 0) return null;

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        &laquo; Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={page === currentPage ? "active" : ""}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next &raquo;
      </button>
    </div>
  );
};

export default Pagination;
