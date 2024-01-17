import Tags from "./Tags";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import Pagination from "./Pagination";

export default function RecommendedRestaurant() {
  const [spots, setSpots] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // 페이지당 보여질 음식점 수, 필요에 따라 조절 가능

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://whatshot.pintor.dev/api/spots");
        const data = await response.json();
        setSpots(data.data.list);
      } catch (error) {
        console.error("에러입니다. : ", error);
      }
    };

    fetchData();
  }, []);

  const totalSpots = spots.length;
  const totalPages = Math.ceil(totalSpots / itemsPerPage);

  const indexOfLastSpot = currentPage * itemsPerPage;
  const indexOfFirstSpot = indexOfLastSpot - itemsPerPage;
  const currentSpots = spots.slice(indexOfFirstSpot, indexOfLastSpot);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Tags />
      {currentSpots.map((spot) => (
        <Link
          to={`/DetailPage/${spot.id}`}
          key={spot.id}
          className="block mt-3"
        >
          <div className="w-full cursor-pointer p-2 rounded-2xl bg-white border shadow-lg flex gap-2 ">
            <div
              className="w-24 flex-shrink-0 bg-cover rounded-lg"
              style={{ backgroundImage: `url(${spot.imageUri})` }}
            ></div>
            <div className="flex-grow  flex flex-col ">
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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
