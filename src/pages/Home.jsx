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
    cover: Restaurant1,
  },
  {
    id: "oweEjS12",
    title: "명품한우",
    cover: Restaurant2,
  },
  {
    id: "8ESkdhs",
    title: "명품국밥",
    cover: Restaurant3,
  },
  {
    id: "j9ewKs",
    title: "성심당",
    cover: Restaurant4,
  },
  {
    id: "asoiKS12",
    title: "일품갈비",
    cover: Restaurant5,
  },
];

export default function Home() {
  return (
    <>
      <Introduction />
      <Carousel mockItems={restaurantMockItems} />
      <RecommendedRestaurant />
    </>
  );
}
