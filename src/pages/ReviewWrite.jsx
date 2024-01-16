import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ReviewWrite({ id, setReviews }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [score, setScore] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("spotId", id);
      formData.append("title", title);
      formData.append("content", content);
      formData.append("score", score);

      if (image !== null) {
        formData.append("image", image);
      }

      console.log("전송할 폼 데이터:", formData);

      const response = await fetch("https://whb.pintor.dev/api/reviews", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("리뷰 작성 성공:", responseData);
        setReviews((prevReviews) => [...prevReviews, responseData.data]);
        navigate(`/DetailPage/${id}`);
      } else {
        const errorData = await response.json();
        console.error("리뷰 작성 실패:", errorData);
        // 서버에서 전달하는 에러 메시지 처리 추가
      }
    } catch (error) {
      console.error("에러입니다:", error);
      // 일반적인 에러 처리 추가
    }
  };

  return (
    <div className="mt-5">
      <h2 className="text-2xl font-bold mb-4">리뷰 작성</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">제목</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">내용</label>
          <textarea
            className="w-full p-2 border rounded"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">점수</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">
            이미지 업로드
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImage(e.target.files.length > 0 ? e.target.files[0] : null)
            }
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          리뷰 작성 완료
        </button>
      </form>
    </div>
  );
}