import React from "react";

export default function Comment({
  reviewId,
  commentContent,
  onCommentSubmit,
  commentError,
  onCommentChange,
}) {
  return (
    <div className="mt-2">
      <input
        type="text"
        placeholder="댓글을 입력하세요"
        value={commentContent || ""}
        onChange={(e) => {
          onCommentChange(reviewId, e.target.value);
        }}
      />
      <button onClick={() => onCommentSubmit(reviewId)}>댓글 작성</button>
      {commentError && <p className="text-red-500">{commentError}</p>}
    </div>
  );
}
