import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";


export default function PopularResturants() {
  return (
    <>
      {/* 맛집 */}

      <div className="mt-16">
        <p className="text-xl">현재 인기 많은 맛집</p>
      </div>
      <div className="flex">
        <div className="w-72 h-auto rounded-2xl bg-white border m-2 shadow-md">
          <ul>
            <li className="relative">
              <img
                className="w-full h-1/3 rounded-t-2xl object-cover"
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA1MTlfMTU1%2FMDAxNDk1MTI0MDM5NDIy.0p6dkRQ0_4fVasJnECzoBC43BxxNHh7XjIoyoeoPLX4g.XGNJYSYnB7IL1lVFtPSbghX_pFRvLs6LM7-ij9fLYcog.JPEG.jut2k%2F1.JPG&type=sc960_832"
                alt=""
              />
              <div className="absolute bottom-0 right-3 transform translate-x-1/2 translate-y-1/2">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-2xl text-red-500"
                />
              </div>
            </li>
            <li>
              <p className="mt-2 ml-2 text-xl">광천식당</p>
            </li>
            <li className="flex items-center mt-3">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="ml-2 text-sm text-teal-500"
              />
              <p className="ml-1 text-sm">장소위치</p>
            </li>
          </ul>
        </div>
        <div className="w-72 h-auto rounded-2xl bg-white border m-2 shadow-md"></div>
        <div className="w-72 h-auto rounded-2xl bg-white border m-2 shadow-md"></div>
      </div>
    </>
  );
}
