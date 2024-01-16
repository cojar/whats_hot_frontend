import React, { useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "../util/fetcher";

function Introduction() {
  const { data, isLoading, error, mutate } = useSWR(
    "https://whatshot.pintor.dev/api/members/me",
    fetcher,
    {
      dedupingInterval: 10,
    }
  );

  console.log("In Introduction:", data);
  console.log("In Introduction:", error);

  if (error) {
    mutate(undefined, false);
  }

  return (
    <>
      <div className="mt-8">
        <p className="text-3xl">
          {data ? (
            <>
              <b className="text-primary">{data.username}</b>님 안녕하세요!
            </>
          ) : (
            <>
              {" "}
              <b className="text-primary">맛집, 숙박, 여행지</b>{" "}
              <span className="text-2xl font-semibold">리뷰</span>
            </>
          )}
        </p>
        {data ? (
          <>
            <p className="mt-2 text-secondary">
              {" "}
              맛집, 숙박, 여행지에 대한 리뷰를 구경하세요!
            </p>
          </>
        ) : (
          <>
            <p className="mt-2 text-secondary">
              로그인을 하면 더 많은 기능을 이용할 수 있어요!
            </p>
          </>
        )}
      </div>
    </>
  );
}

export default Introduction;
