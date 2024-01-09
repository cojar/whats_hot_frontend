import React, { useEffect, useState } from 'react';
import CarouselItem from './CarouselItem';

export default function Carousel() {
  
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://whb.pintor.dev/api/spots');
        const data = await response.json();
        setSpots(data.data.list);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <>
      <div className="mt-16">
        <p className="text-xl font-bold mb-3">현재 인기 많은 맛집</p>
      </div>
      <ul className="carousel carousel-center w-full space-x-3 ">
        {spots.map((spot) => (
          <CarouselItem key={spot.id} name={spot.name} images={spot.imageUri} id={spot.id} address={spot.address}/>
        ))}
      </ul>
    </>
  );
}