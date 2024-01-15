import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Detail from "../components/Detail";
import Review from "../components/Review";
import ReviewWrite from "../components/ReviewWrite";

export default function DetailPage() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  return (
    <>
      <Detail />
      <Review reviews={reviews} setReviews={setReviews} />
      <ReviewWrite id={id} reviews={reviews} setReviews={setReviews} />
    </>
  );
}
