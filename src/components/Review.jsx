import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function Review() {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://whb.pintor.dev/api/reviews?spotId=${id}`
        );
        const data = await response.json();

        console.log("API 응답:", data);

        setReviews(data.data.list);
      } catch (error) {
        console.error("에러입니다:", error);
      }
    };

    const checkLoginStatus = () => {
      const accessToken = localStorage.getItem("accessToken");
      setIsLoggedIn(!!accessToken);
    };

    fetchReviews();
    checkLoginStatus();
  }, [id]);

  return (
    <div className="mt-5">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">리뷰</h2>
        {isLoggedIn && (
          <Link
            to={`/DetailPage/${id}/review/write`}
            className="bg-blue-500 text-white text-xs p-1 rounded block mb-4"
          >
            리뷰 작성
          </Link>
        )}
      </div>

      {reviews && reviews.length > 0 ? (
        <ul className="list-none">
          {reviews.map((review) => (
            <li key={review.id} className="mb-4 p-4 border rounded">
              <div className="flex items-center mb-2">
                <img
                  src={review.authorProfileImage || "프로필 이미지 주소"}
                  alt="프로필 사진"
                  className="w-5 h-5 rounded-2xl mr-2"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-xs">
                    작성자: {review.author}
                  </span>
                  <span className="font-semibold text-xs">
                    점수: {review.score}
                  </span>
                </div>
                <div className="ml-auto">
                  <span className="font-semibold text-xs">
                    {new Date(review.createDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div>
                <span className="font-semibold text-lg">{review.title}</span>
              </div>
              <div>
                <span className="font-semibold text-base">
                  {review.content}
                </span>
              </div>
              {review.imageUri && review.imageUri.length > 0 && (
                <div>
                  <img
                    src={review.imageUri[0]}
                    alt="리뷰 이미지"
                    className="w-36 h-auto mt-2"
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg">이 식당에 대한 리뷰가 없습니다.</p>
      )}
    </div>
  );
}
