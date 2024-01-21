import React, { useState, useEffect } from "react";
import Detail from "../components/Detail";
import Review from "../components/Review";
import { useParams } from "react-router-dom";

export default function DetailPage() {
  const { id } = useParams();

  return (
    <div>
      <Detail id={id} />
      <Review spotId={id} /> {/* spotId를 전달해줍니다. */}
    </div>
  );
}