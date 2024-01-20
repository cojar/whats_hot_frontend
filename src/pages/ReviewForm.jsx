import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function ReviewWrite() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [score, setScore] = useState("");
  const navigate = useNavigate();
  const { spotId } = useParams();

  console.log("Extracted spotId:", spotId);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      console.error("사용자가 로그인되어 있지 않습니다.");
      return;
    }

    if (image !== null) {
      formData.append("image", image);
    }

    axios.post(
      "https://whatshot.pintor.dev/api/reviews",
      {
        request: JSON.stringify({
          spotId: spotId,
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
          day: new Date().getDay(),
          title: title,
          content: content,
          score: score,
          hashtags: ["astring"],
          lock: true,
        }),
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
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
            type="number"
            className="w-full p-2 border rounded"
            step="0.5"
            min="0"
            max="5"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          리뷰 작성 완료
        </button>
      </form>
    </div>
  );
}
