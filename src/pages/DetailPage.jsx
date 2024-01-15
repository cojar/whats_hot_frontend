import React, { useState } from "react";
import Detail from "../components/Detail";
import Review from "../components/Review";

export default function DetailPage() {
  const [reviews, setReviews] = useState([]);

  return (
    <>
      <Detail />
      <Review reviews={reviews} setReviews={setReviews} />
    </>
  );
}
