import React, { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";

export default function Carousel() {
  const [spots, setSpots] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://whatshot.pintor.dev/api/spots?page=${currentPage}&size=50`;

        if (selectedCategory !== null) {
          url += `&category=${selectedCategory}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        setSpots(data.data.list);
      } catch (error) {
        console.error("에러입니다 :", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://whatshot.pintor.dev/api/categories?parentId=-1"
        );
        const data = await response.json();
        setCategories(data.data.list);
      } catch (error) {
        console.error("에러입니다. : ", error);
      }
    };

    fetchCategories();
    setCurrentPage(1);
    fetchData();
  }, [currentPage, selectedCategory]);

  const handleCategorySelect = (categoryId) => {
    setCurrentPage(1);
    setSelectedCategory(categoryId === "all" ? null : categoryId);
  };

  return (
    <>
      <div className="mt-16 mb-5">
        <div className="grid grid-cols-6 gap-2 text-sm">
          <button
            className="h-8 bg-gray-200 rounded-2xl flex items-center justify-center cursor-pointer outline-none focus:outline-none"
            onClick={() => handleCategorySelect("all")}
          >
            <p className="opacity-70">전체</p>
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              className="h-8 bg-gray-200 rounded-2xl flex items-center justify-center cursor-pointer outline-none focus:outline-none"
              onClick={() => handleCategorySelect(category.id)}
            >
              <p className="opacity-70">{category.name}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-2">
        <p className="text-xl font-bold mb-3">
          현재 인기 많은{" "}
          {selectedCategory
            ? categories.find((e) => e.id === selectedCategory)?.name
            : "장소"}
        </p>
      </div>

      <ul className="carousel carousel-center w-full space-x-3 overflow-x-auto">
        {spots.map((spot) => (
          <CarouselItem
            key={spot.id}
            name={spot.name}
            images={spot.imageUri}
            id={spot.id}
            address={spot.address}
          />
        ))}
      </ul>
    </>
  );
}