import React from "react";
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from "react-icons/fa";

export default function Pagination ({ currentPage, totalPages, onPageChange }) {
  const visiblePages = Array.from({ length: Math.min(totalPages, 5) }, (_, index) => index + 1);

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  const handleNextPages = () => {
    onPageChange(currentPage + 5);
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => onPageChange(currentPage - 5)}
        className="px-3 py-1 mx-1 border rounded"
        disabled={currentPage <= 1}
      >
        <FaAngleDoubleLeft />
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 py-1 mx-1 border rounded"
        disabled={currentPage <= 1}
      >
        <FaAngleLeft />
      </button>
      {visiblePages.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`px-3 py-1 mx-1 border rounded ${
            pageNumber === currentPage ? "bg-gray-300" : ""
          }`}
        >
          {pageNumber}
        </button>
      ))}
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
};

