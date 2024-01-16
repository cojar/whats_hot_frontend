import { React, memo } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default memo(function CarouselItem({ id, name, images, address }) {
  return (
    <li>
      <Link to={`/DetailPage/${id}`} key={id}>
        <div className="carousel-item flex-col w-36 rounded-2xl border shadow-lg">
          <div className="h-48">
            {images && images.length > 0 && (
              <>
                {images.map((image, index) => (
                  <img
                    key={index}
                    className="w-full h-full object-cover rounded-t-2xl"
                    src={image}
                    alt={`Image ${index + 1}`}
                  />
                ))}
              </>
            )}
          </div>

          <div className="p-2 h-full flex flex-col">
            <div className="flex items-start">
              <p className="text-lg mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                {name}
              </p>
              <span className="ml-auto bg-primary text-white p-1 rounded-lg flex justify-center items-center -mt-6 cursor-pointer">
                <FaHeart size={20} />
              </span>
            </div>
            <div className="flex items-center mt-auto bottom-0">
              <FaLocationDot
                size={14}
                className="text-sm text-primary opacity-60"
              />
              <p className="ml-1 text-xs text-secondary mt-auto whitespace-nowrap overflow-hidden">
                {address}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
});
