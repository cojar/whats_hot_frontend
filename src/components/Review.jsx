import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiSolidLike } from "react-icons/bi";
import { FaRegPenToSquare } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import { MdEdit } from "react-icons/md";

export default function Review({ spotId }) {
  const [reviews, setReviews] = useState([]);

  const isLoggedIn = () => {
    const accessToken = localStorage.getItem("accessToken");
    return accessToken !== null;
  };
  
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        if (spotId !== null) {
          const response = await fetch(
            `https://whb.pintor.dev/api/reviews?spotId=${spotId}`
          );
          const data = await response.json();
          setReviews(data.data.list);
        }
      } catch (error) {
        console.error("리뷰를 불러오는 중 오류 발생:", error);
      }
    };

    fetchReviews();
  }, [spotId]);
  

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-bold">리뷰</p>
        {isLoggedIn() && (
          <Link to="/review/write">
            <button>
              <FaRegPenToSquare size={20} className="text-sm text-primary" />
            </button>
          </Link>
        )}
      </div>
      <ul className="carousel carousel-center w-full space-x-3 overflow-x-auto">
        {reviews &&
          reviews.map((review) => (
            <li key={review.id} className="bg-sky-100">
              <div className="flex justify-between items-center m-2">
                <span className="text-xl font-bold h-auto">
                  {review.author}
                </span>
                <span className="text-sm w-28 mx-1 font-bold text-red-700">
                  {review.score}점
                </span>
                <MdEdit size={20} className="text-sm text-primary" />
                <TiDelete size={24} className="text-sm" />
              </div>
              <div className="carousel-item flex-col w-64 rounded-2xl border shadow-lg">
                <div className="flex justify-end items-center">
                  <span className="text-xs">
                    {review.createDate}
                  </span>
                </div>
                <div className="h-40 flex justify-center items-center">
                  {review.imageUri && review.imageUri[0] && (
                    <img
                      src={review.imageUri[0]}
                      alt=""
                      className="w-32 h-32"
                    />
                  )}
                </div>
                <span className="flex justify-end items-center">
                  <button>
                    <BiSolidLike
                      size={20}
                      className="text-sm text-primary opacity-60"
                    />
                  </button>
                  <span className="text-xs mx-2">
                    {review.liked !== undefined ? review.liked : 0}
                  </span>
                </span>
                <div className="p-2 h-full">
                  <div>
                    <p className="text-sm m-2 ">{review.title}</p>
                    <p className="text-sm m-2">{review.content}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
