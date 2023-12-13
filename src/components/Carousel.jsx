import { useState } from "react";
import CarouselItem from "./CarouselItem";

const mockItems = [
  {
    id: "skeIDn9",
    title: "명품스시",
  },
  {
    id: "oweEjS12",
    title: "명품한우",
  },
  {
    id: "8ESkdhs",
    title: "명품국밥",
  },
  {
    id: "j9ewKs",
    title: "성심당",
  },
  {
    id: "asoiKS12",
    title: "일품갈비",
  },
];

export default function Carousel() {
  //임시 변수
  const [items, setItems] = useState(mockItems);

  return (
    <>
      {/* 맛집 */}

      <div className="mt-16">
        <p className="text-xl font-bold mb-3">현재 인기 많은 맛집</p>
      </div>
      <ul className="carousel carousel-center w-full space-x-3 ">
        {items.map((item, i) => {
          return (
            <CarouselItem key={item.id} title={item.title} index={i + 1} />
          );
        })}
      </ul>
    </>
  );
}
