import React, { useState, useEffect } from "react";
import Detail from "../components/Detail";
import Review from "../components/Review";

export default function DetailPage() {
  const [selectedSpotId, setSelectedSpotId] = useState(null);

  useEffect(() => {
    const url = window.location.href;
    const spotIdIndex = url.indexOf("/DetailPage/") + "/DetailPage/".length;
    const spotId = url.substring(spotIdIndex);
    setSelectedSpotId(spotId);
  }, []);

  return (
    <>
      <Detail spotId={selectedSpotId} />
      <Review spotId={selectedSpotId} />
    </>
  );
}