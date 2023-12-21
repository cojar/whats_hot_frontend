import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { restaurantMockItems } from "./Home";

export default function DetailPage() {
  const { id } = useParams();
  const selectedRestaurant = restaurantMockItems.find((item) => item.id === id);

  if (!selectedRestaurant) {
    return <p>해당 맛집을 찾을 수 없습니다.</p>;
  }

  return (
    <div className="mt-5">
      <div>
        <div className="  h-96">
          <img
            src={selectedRestaurant.cover}
            alt={selectedRestaurant.title}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className=" bg-white w-full rounded-2xl p-4 -translate-y-16">
          <div class="flex justify-between">
            <h5 className="text-2xl font-bold">{selectedRestaurant.title}</h5>
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
