import { useState } from "react";
import PlaceItem from "./PlaceItem";

const placesItems = [
  {
    id: 1,
    title: "한밭수목원",
    content: "한밭수목원입니다.",
    tags: ["수목원", "꽃"],
  },
  {
    id: 2,
    title: "오월드",
    content: "동물원입니다.",
    tags: ["동물", "놀이동산", "어린이"], 
  },
  {
    id: 3,
    title: "엑스포",
    content: "엑스포 분수 축제",
    tags: ["꿈돌이", "분수" , "축제"],
  },
];

export default function Place() {
  const [PlacesItems, setPlaceItems] = useState(placesItems);

  return (
    <>
      {/* 숙소/호텔 */}

      <div className="mt-5">
        <p className="text-xl font-bold mb-3">대전 추천 여행지</p>
      </div>
      <ul className="">
        {PlacesItems.map((PlacesItem, i) => {
          return (
            <PlaceItem
              key={PlacesItem.id}
              title={PlacesItem.title}
              content={PlacesItem.content}
              tags={PlacesItem.tags}
              index={i + 1}
            />
          );
        })}
      </ul>
    </>
  );
}
