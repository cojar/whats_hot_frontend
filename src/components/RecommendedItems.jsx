import Tags from "./Tags";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import Pagination from "./Pagination";

export default function RecommendedItems() {
  const [spots, setSpots] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://whatshot.pintor.dev/api/spots?page=${currentPage}&size=5`
        );
        const data = await response.json();
        setSpots(data.data.list);
        setTotalPages(data.data.totalPages);
      } catch (error) {
        console.error("에러입니다. : ", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Tags />
      {spots.length > 0 &&
        spots.map((spot) => (
          <Link
            to={`/DetailPage/${spot.id}`}
            key={spot.id}
            className="block mt-3"
          >
            <div className="w-full cursor-pointer p-2 rounded-2xl bg-white border shadow-lg flex gap-2">
              <div
                className="w-24 flex-shrink-0 bg-cover rounded-lg"
                style={{ backgroundImage: `url(${spot.imageUri})` }}
              ></div>
              <div className="flex-grow  flex flex-col">
                <div className="flex justify-between items-center">
                  <p className="font-bold mb-1">{spot.name}</p>
                  <span className="flex items-center">
                    <p className="mr-2 text-red-500">
                      <FaStar />
                    </p>
                    <p className="font-bold">{spot.averageScore}</p>
                  </span>
                </div>
                <p className="text-xs font-bold">
                  주소 :
                  <span className="text-xs content-container">
                    {spot.address}
                  </span>
                </p>
                <p className="text-xs font-bold">
                  전화번호 :
                  <span className="text-xs content-container">
                    {spot.contact}
                  </span>
                </p>
                <div className="flex items-center mt-auto bottom-0">
                  {spot.hashtags?.length > 0 && (
                    <div className="flex ml-auto mt-auto">
                      {spot.hashtags.map((tag, index) => (
                        <span
                          key={index}
                          className="ml-1 text-xs text-white opacity-65 bg-primary rounded-2xl flex justify-center items-center p-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      {totalPages > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
}
