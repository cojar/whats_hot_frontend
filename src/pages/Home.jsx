import Carousel from "../components/Carousel";
import RecommendedRestaurant from "../components/RecommendedRestaurant";
import Introduction from "../components/Introduction";


export default function Home() {
  
  return (
    <>
      <Introduction />
      <Carousel/>
      <RecommendedRestaurant/>
    </>
  );
}