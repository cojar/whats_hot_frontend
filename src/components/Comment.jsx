import React from "react";
import { TiPencil } from "react-icons/ti";

export default function Comment({
  reviewId,
  commentContent,
  onCommentSubmit,
  commentError,
  onCommentChange,
}) {
  return (
    <>
      <div className="mt-2 relative flex items-center">
        <input
          type="text"
          placeholder="댓글을 입력하세요"
          className="w-full h-auto border p-2 rounded pr-10"
          value={commentContent || ""}
          onChange={(e) => {
            onCommentChange(reviewId, e.target.value);
          }}
        />
        <TiPencil
          onClick={() => onCommentSubmit(reviewId)}
          className="absolute right-0 cursor-pointer h-full w-8 text-purple-600"
        />
      </div>
      <div>
        {commentError && <p className="text-red-500 m-2 font-bold">{commentError}</p>}
      </div>
    </>
  );
}