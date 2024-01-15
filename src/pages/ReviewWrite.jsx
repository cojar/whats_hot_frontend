import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ReviewWrite({ id, reviews, setReviews }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [score, setScore] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        console.error("사용자가 로그인되어 있지 않습니다.");
        return;
      }

      const formData = new FormData();
      formData.append("spotId", id);
      formData.append("title", title);
      formData.append("content", content);
      formData.append("score", score);
      formData.append("image", image);

      const response = await fetch("https://whb.pintor.dev/api/reviews", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      });

      if (response.ok) {
        setReviews((prevReviews) => [
          ...prevReviews,
          { title, content, score, image },
        ]);
        navigate(`/DetailPage/${id}`);
      } else {
        console.error("리뷰 작성에 실패했습니다.");
      }
    } catch (error) {
      console.error("에러입니다:", error);
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
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          리뷰 작성 완료
        </button>
      </form>
    </div>
  );
}
