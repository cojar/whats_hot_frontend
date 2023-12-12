import PopularResturants from "../components/PopularRestaurants";
import RecommendedAccommodation from "../components/RecommendedAccommodation";
import RecommendedDestinations from "../components/RecommendedDestinations";
import Tags from "../components/Tags";
import Introduction from "../components/Introduction";

export default function Home() {
  return (
    <>
      <Introduction />
      <PopularResturants />
      <Tags />
      <RecommendedAccommodation />
      <Tags />
      <RecommendedDestinations />
    </>
    
  );
}
