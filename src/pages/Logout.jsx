import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .post(
        "https://whb.pintor.dev/api/members/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((res) => {
        console.log("logout: ", res);
        window.localStorage.removeItem("accessToken");
        navigate("/");
      })
      .catch((err) => {});
  }, []);
}
