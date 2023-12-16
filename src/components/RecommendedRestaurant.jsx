import Tags from "./Tags";

export default function RecommendedRestaurant() {
  return (
    <>
      <Tags />
      {/*추천숙박*/}
      <div className="w-full cursor-pointer p-2 rounded-2xl bg-white border shadow-lg flex gap-2 ">
        <div className="w-24 flex-shrink-0 bg-[url('/src/assets/restaurant1.png')] bg-cover rounded-lg"></div>
        <div className="flex-grow  flex flex-col ">
          <p className="font-bold mb-1">연돈</p>
          <p className="flex-shrink-0 text-xs content-container w-64 text-secondary overflow-hidden">
            대한민국 제주특별자치도 서귀포시 중문관광단지 인근과 서울 강남에
            위치한 돈까스 전문 요리점 프랜차이즈이며, 방송을 타고 나서 유명세를
            얻게 된 대표적인 식당이다.
          </p>
          <span className="relative -top-3 text-secondary">...</span>
          <span className=" ml-auto mt-auto text-sm w-10  text-white opacity-65 bg-primary rounded-2xl flex justify-center items-center p-1">
            태그
          </span>
        </div>
      </div>
    </>
  );
}
