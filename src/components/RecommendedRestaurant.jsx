import Tags from "./Tags";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function RecommendedRestaurant() {
  const [spots, setSpots] = useState([]);
  const firstThreeSpots = spots.slice(0, 3);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://whb.pintor.dev/api/spots");
        const data = await response.json();
        setSpots(data.data.list);
      } catch (error) {
        console.error("에러입니다. : ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Tags />
      {firstThreeSpots.map((spot) => (
        <Link to={`/DetailPage/${spot.id}`} key={spot.id}>
          <div className="w-full cursor-pointer p-2 rounded-2xl bg-white border shadow-lg flex gap-2 ">
            <div
              className="w-24 flex-shrink-0 bg-cover rounded-lg"
              style={{ backgroundImage: `url(${spot.imageUri})` }}
            ></div>
            <div className="flex-grow  flex flex-col ">
              <p className="font-bold mb-1">{spot.name}</p>
              <p className="flex-shrink-0 text-xs content-container w-64 text-secondary overflow-hidden">
                대한민국 제주특별자치도 서귀포시 중문관광단지 인근과 서울 강남에
                위치한 돈까스 전문 요리점 프랜차이즈이며, 방송을 타고 나서
                유명세를 얻게 된 대표적인 식당이다.
              </p>
              <div className="flex items-center mt-auto bottom-0">
                {spot.hashtags?.length > 0 && (
                  <div className="flex ml-auto mt-auto">
                    {spot.hashtags.map((tag, index) => (
                      <span
                        key={index}
                        className="ml-1 text-xs text-white opacity-65 bg-primary rounded-2xl flex justify-center items-center p-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
