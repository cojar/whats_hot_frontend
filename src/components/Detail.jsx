import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Detail() {
  const [spots, setSpots] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://whb.pintor.dev/api/spots/${id}`);
        const data = await response.json();

        setSpots(data.data);
      } catch (error) {
        console.error('에러입니다 :', error);
      }
    };

    fetchData();
  }, [id]);

  if (!spots) {
    return <p>해당 맛집을 찾을 수 없습니다.</p>;
  }


  return (
    <div className="mt-5">
      <div>
      <div className="h-96">
          {spots.imageUri && spots.imageUri.length > 0 && (
            <img
              src={spots.imageUri[0]}
              alt={spots.name}
              className="w-full h-full object-cover rounded-2xl"
            />
          )}
        </div>
        <div className=" bg-white w-full rounded-2xl p-4 -translate-y-16">
          <div className="flex justify-between">
            <h5 className="text-2xl font-bold">{spots.name}</h5>
            <span className=" -mt-7 bg-primary w-8 h-8 rounded-lg flex justify-center items-center">
              <FontAwesomeIcon icon={faHeart} className="text-xl text-white" />
            </span>
          </div>
          <p className="mt-3">
            대한민국 제주특별자치도 서귀포시 중문관광단지 인근과 서울 강남에
            위치한 돈까스 전문 요리점 프랜차이즈이며, 방송을 타고 나서 유명세를
            얻게 된 대표적인 식당이다.
          </p>
          <div>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}