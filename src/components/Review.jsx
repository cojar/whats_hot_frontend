import React, { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { FaRegPenToSquare } from "react-icons/fa6";
import Pagination from "./Pagination";
import { FaStar, FaStarHalf } from "react-icons/fa";
import Comment from "./Comment";
import { MdOutlineRateReview } from "react-icons/md";

export default function Review({ spotId }) {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [commentContents, setCommentContents] = useState({});
  const [commentError, setCommentError] = useState(null);

  const isLoggedIn = () => {
    const accessToken = localStorage.getItem("accessToken");
    return accessToken !== null;
  };

  const fetchReviews = useCallback(async () => {
    try {
      const response = await fetch(
        `https://whatshot.pintor.dev/api/reviews?spotId=${spotId}&page=${currentPage}&size=20`
      );
      const data = await response.json();
      setReviews(data.data.list);
      setTotalPages(data.data.totalPages);
    } catch (error) {
      console.error("리뷰를 불러오는 중 오류 발생:", error);
    }
  }, [spotId, currentPage]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderStarIcons = (score) => {
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
  };

  const handleCommentSubmit = async (reviewId) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        console.error("사용자가 로그인되어 있지 않습니다.");
        return;
      }

      if (!commentContents[reviewId]) {
        setCommentError("댓글 내용을 입력하세요.");
        return;
      }

      await fetch(`https://whatshot.pintor.dev/api/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          reviewId: reviewId,
          content: commentContents[reviewId],
        }),
      });

      setTimeout(() => {
        fetchReviews();
      }, 500);

      setCommentContents({ ...commentContents, [reviewId]: "" });
      setCommentError(null);
    } catch (error) {
      console.error("댓글을 작성하는 중 오류 발생:", error);
      setCommentError("댓글 작성 중 오류가 발생했습니다.");
    }
  };

  const handleCommentChange = (reviewId, content) => {
    setCommentContents({
      ...commentContents,
      [reviewId]: content,
    });
    setCommentError(null);
  };

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mb-4">
        <MdOutlineRateReview size={50} className="text-blue-500" />
        {isLoggedIn() && (
          <Link to={`/reviewForm/${spotId}`}>
            <button>
              <FaRegPenToSquare size={25} className="text-sm text-purple-600" />
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
                  <div className="border-black border border-opacity-20 my-2"></div>
                  <div className="mb-2 text-right">
                    <span className="text-xs font-bold">
                      {new Date(review.createDate).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold mb-2 w-full overflow-hidden">
                      {review.title}
                    </span>
                    <span className="border-black border border-opacity-20 my-2"></span>
                    <span className="mt-2 text-base w-full h-auto whitespace-pre-line">
                      {review.content}
                    </span>
                    <div className="border-black border border-opacity-20 my-2"></div>
                    <div className="border-white border bg-orange-300 bg-opacity-30 p-3 rounded-2xl">
                      {review.comments &&
                        review.comments.map((comment) => (
                          <div
                            key={comment.id}
                            className="mt-2 border-b-2 border-opacity-20 border-black "
                          >
                            <span className="text-base font-bold">
                              {comment.author} :{" "}
                            </span>
                            <span className="text-sm">{comment.content}</span>
                          </div>
                        ))}
                      <Comment
                        reviewId={review.id}
                        commentContent={commentContents[review.id]}
                        onCommentSubmit={handleCommentSubmit}
                        commentError={commentError}
                        onCommentChange={handleCommentChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
      {totalPages > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
