import React from "react";
import Hotel1 from "../assets/hotel1.png";
import Hotel2 from "../assets/hotel2.png";
import Hotel3 from "../assets/hotel3.png";
import Hotel4 from "../assets/hotel4.png";
import Hotel5 from "../assets/hotel5.png";

const hotelCovers = [Hotel1, Hotel2, Hotel3, Hotel4, Hotel5];

export default function HotelItem({ title, content, tags, index }) {
  return (
    <>
      {/*추천숙박*/}
      <li>
        <div className="flex w-full rounded-2xl bg-white border shadow-lg my-3">
          <div className="flex items-center justify-center m-2">
            <img
              className="flex w-20 h-25 object-cover"
              src={hotelCovers[index-1]}
              alt=""
            />
          </div>
          <div className="w-full h-30 flex mx-2">
            <div>
              <div className="w-auto h-auto">
                <p className="font-bold my-2">{title}</p>
              </div>
              <div className="w-full overflow-hidden">
                <p className="text-sm my-2">{content}</p>
              </div>
              <div className="flex flex-wrap items-center align-middle my-2">
                {tags &&
                  tags.map((tag, i) => (
                    <div
                      key={i}
                      className="w-auto h-8 bg-blue-300 rounded-2xl mr-1 p-2 flex items-center justify-center "
                    >
                      <p className="text-xs">{tag}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
