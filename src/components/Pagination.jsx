import React, { useEffect, useState } from "react";
import {
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
} from "react-icons/fa";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const handleBackPage = () => {
    onPageChange(currentPage - 1);
  };

  const handleBackPages = () => {
    onPageChange(currentPage - 5);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  const handleNextPages = () => {
    onPageChange(currentPage + 5);
  };

  const renderPageButtons = () => {
    const buttons = [];
  
    let startPage = Math.max(1, Math.floor((currentPage - 1) / 5) * 5 + 1);
    let endPage = Math.min(totalPages, startPage + 4);
  

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-3 py-1 mx-1 border rounded ${i === currentPage ? 'bg-blue-500 text-white' : ''}`}
        >
          {i}
        </button>
      );
    }
  
    return buttons;
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={handleBackPages}
        className="px-3 py-1 mx-1 border rounded"
        disabled={currentPage <= 1}
      >
        <FaAngleDoubleLeft />
      </button>
      <button
        onClick={handleBackPage}
        className="px-3 py-1 mx-1 border rounded"
        disabled={currentPage <= 1}
      >
        <FaAngleLeft />
      </button>
      {renderPageButtons()}
      <button
        onClick={handleNextPage}
        className="px-3 py-1 mx-1 border rounded"
        disabled={currentPage >= totalPages}
      >
        <FaAngleRight />
      </button>
      <button
        onClick={handleNextPages}
        className="px-3 py-1 mx-1 border rounded"
        disabled={currentPage + 4 >= totalPages}
      >
        <FaAngleDoubleRight />
      </button>
    </div>
  );
}