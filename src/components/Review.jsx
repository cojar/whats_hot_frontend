import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiSolidLike } from "react-icons/bi";
import { FaRegPenToSquare } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import { MdEdit } from "react-icons/md";
import { FaStar, FaStarHalf } from "react-icons/fa";

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
            `https://whatshot.pintor.dev/api/reviews?spotId=${spotId}`
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

  function renderStarIcons(score) {
    const fullStars = Math.floor(score);
    const hasHalfStar = score % 1 !== 0;

    const starIcons = [];

    for (let i = 0; i < fullStars; i++) {
      starIcons.push(<FaStar key={i} className="text-yellow-500" />);
    }

    if (hasHalfStar) {
      starIcons.push(
        <FaStarHalf key={fullStars} className="text-yellow-500" />
      );
    }

    return starIcons;
  }

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-bold">리뷰</p>
        {isLoggedIn() && (
          <Link to="/reviewForm">
            <button>
              <FaRegPenToSquare size={20} className="text-sm text-primary" />
            </button>
          </Link>
        )}
      </div>
      <ul className="flex-col w-full">
        {reviews &&
          reviews.map((review) => (
            <li key={review.id} className="mt-3">
              <div className="w-full rounded-2xl border shadow-lg bg-purple-200">
                <div className="p-2 w-full">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">{review.author}</span>
                    <div className="flex items-center">
                      {renderStarIcons(review.score)}
                    </div>
                  </div>
                  <div className="border-black border border-opacity-20"></div>
                  <div className="mb-2 text-right">
                    <span className="text-xs">
                      {new Date(review.createDate).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold mb-2 w-full overflow-hidden">{review.title}</span>
                    <span className="border-black border border-opacity-20"></span>
                    <span className="mt-2 text-base w-full h-auto whitespace-pre-line">{review.content}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
