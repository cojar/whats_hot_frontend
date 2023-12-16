import { useState } from "react";
import CarouselItem from "./CarouselItem";

export default function Carousel({ mockItems, covers }) {
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
            <CarouselItem
              key={item.id}
              title={item.title}
              index={i + 1}
              covers={covers}
            />
          );
        })}
      </ul>
    </>
  );
}
