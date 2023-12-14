import Carousel from "../components/Carousel";
import RecommendedDestinations from "../components/RecommendedDestinations";
import Tags from "../components/Tags";
import Introduction from "../components/Introduction";
import Place from "../components/Place";
import Hotel from "../components/Hotel";

export default function Home() {
  return (
    <>
      <Introduction />
      <Carousel />
      <Tags />
      <Hotel  />
      <Tags />
      <Place />
    </>
  );
}
