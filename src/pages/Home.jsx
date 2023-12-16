import Carousel from "../components/Carousel";
import RecommendedRestaurant from "../components/RecommendedRestaurant";
import Introduction from "../components/Introduction";
import Restaurant1 from "../assets/restaurant1.png";
import Restaurant2 from "../assets/restaurant2.png";
import Restaurant3 from "../assets/restaurant3.png";
import Restaurant4 from "../assets/restaurant4.png";
import Restaurant5 from "../assets/restaurant5.png";
import Restaurant6 from "../assets/restaurant6.png";

const restaurantMockItems = [
  {
    id: "skeIDn9",
    title: "명품스시",
  },
  {
    id: "oweEjS12",
    title: "명품한우",
  },
  {
    id: "8ESkdhs",
    title: "명품국밥",
  },
  {
    id: "j9ewKs",
    title: "성심당",
  },
  {
    id: "asoiKS12",
    title: "일품갈비",
  },
];

const restaurantCovers = [
  Restaurant1,
  Restaurant2,
  Restaurant3,
  Restaurant4,
  Restaurant5,
  Restaurant6,
];

export default function Home() {
  return (
    <>
      <Introduction />
      <Carousel mockItems={restaurantMockItems} covers={restaurantCovers} />
      <RecommendedRestaurant />
    </>
  );
}
