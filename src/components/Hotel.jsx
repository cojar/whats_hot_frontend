import { useState } from "react";
import HotelItem from "./HotelItem";

const hotelsItems = [
  {
    id: 1,
    title: "유성호텔",
    content: "대전호텔입니다.",
    tags: ["유성", "좋은 뷰"],
  },
  {
    id: 2,
    title: "롯데시티호텔",
    content: "대전호텔입니다.",
    tags: ["롯데", "수영장", "루프탑"], 
  },
  {
    id: 3,
    title: "굿모닝레지던스",
    content: "대전호텔입니다.  대전호텔입니다.  대전호텔입니다.  대전호텔입니다.  대전호텔입니다.  ",
    tags: ["굿모닝", "조식포함" , "석식석식석식"],
  },
];

export default function Hotel() {
  const [HotelIstems, setCarouselHotelItems] = useState(hotelsItems);

  return (
    <>
      {/* 숙소/호텔 */}

      <div className="mt-5">
        <p className="text-xl font-bold mb-3">대전 추천 숙소/호텔</p>
      </div>
      <ul className="">
        {HotelIstems.map((HotelsItem, i) => {
          return (
            <HotelItem
              key={HotelsItem.id}
              title={HotelsItem.title}
              content={HotelsItem.content}
              tags={HotelsItem.tags}
              index={i + 1}
            />
          );
        })}
      </ul>
    </>
  );
}
