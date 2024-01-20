import Carousel from "../components/Carousel";
import RecommendedRestaurant from "../components/RecommendedItems";
import Introduction from "../components/Introduction";

export default function Home() {
  return (
    <>
      <Introduction />
      <Carousel />
      <RecommendedRestaurant />
    </>
  );
}
