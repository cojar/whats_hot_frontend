import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ReviewWrite() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [score, setScore] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 이미지 업로드
      let imageUrl = null;
      if (image) {
        const formData = new FormData();
        formData.append("image", image);

        // 이미지 업로드 후 서버에서 받아온 URL
        const uploadResponse = await fetch(
          "https://whb.pintor.dev/api/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const uploadResult = await uploadResponse.json();

        if (!uploadResult.success) {
          console.error("이미지 업로드 실패:", uploadResult.message);
          return;
        }

        imageUrl = uploadResult.data.imageUrl;
      }

      // 리뷰 작성 완료 후 서버에 전송
      const reviewResponse = await fetch("https://whb.pintor.dev/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          spotId: id,
          title,
          content,
          score: parseFloat(score) || 0, // 소수점도 허용하며, 값이 없으면 0으로 처리
          imageUri: imageUrl ? [imageUrl] : [], // 이미지가 선택되었을 때만 URL 추가
        }),
      });

      const result = await reviewResponse.json();

      if (result.success) {
        console.log("리뷰 작성이 완료되었습니다.");
        // 리뷰 작성 완료 후 동작 (예시: `/DetailPage/:id`로 이동)
        navigate(`/DetailPage/${id}`);
      } else {
        console.error("리뷰 작성 실패:", result.message);
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
