import axios from "axios";
const fetcher = (url) =>
  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    .then((res) => res.data.data);
export default fetcher;
