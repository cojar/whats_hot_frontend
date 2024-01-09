import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function CarouselItem({ id, name, images, address }) {
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
                <FontAwesomeIcon icon={faHeart} className="text-xl" />
              </span>
            </div>
            <div className="flex items-center mt-auto bottom-0">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-sm text-primary opacity-60"
              />
              <p className="ml-1 text-xs text-secondary mt-auto whitespace-nowrap overflow-hidden">{address}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}