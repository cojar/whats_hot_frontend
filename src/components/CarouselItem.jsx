import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Restaurant1 from "../assets/restaurant1.png";
import Restaurant2 from "../assets/restaurant2.png";
import Restaurant3 from "../assets/restaurant3.png";
import Restaurant4 from "../assets/restaurant4.png";
import Restaurant5 from "../assets/restaurant5.png";
import Restaurant6 from "../assets/restaurant6.png";

const covers = [
  Restaurant1,
  Restaurant2,
  Restaurant3,
  Restaurant4,
  Restaurant5,
  Restaurant6,
];

export default function CarouselItem({ title, index }) {
  return (
    <li>
      <div className="carousel-item flex-col w-36 rounded-2xl border shadow-lg ">
        <div className="h-48">
          <img
            className="w-full h-full object-cover  rounded-t-2xl"
            src={covers[index]}
            alt=""
          />
        </div>

        <div className="p-2  h-full flex flex-col">
          <div className="flex items-start">
            <p className="text-lg mb-2">{title}</p>
            <span className="ml-auto bg-primary text-white p-1 rounded-lg flex items-center align-middle -mt-6 cursor-pointer">
              <FontAwesomeIcon icon={faHeart} className="text-xl" />
            </span>
          </div>
          <div className="flex items-center mt-auto bottom-0">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-sm text-primary opacity-60"
            />
            <p className="ml-1 text-xs text-secondary mt-auto">장소위치</p>
          </div>
        </div>
      </div>
    </li>
  );
}
