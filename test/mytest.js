import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  stages: [
    // Up to 20 users withint 30 seconds
    { duration: "30s", target: 10 },
    // Stay at 20 users for 60 seconds
    { duration: "1m", target: 10 },
    //Down  to 0 users over 30 seconds
    { duration: "30s", target: 0 },
  ],
};

export default function () {
  let url = "http://localhost:3000/api/blog";

  const payload = JSON.stringify({
    page: 100,
    search: "",
    filters: {
      CurrentAffairs: false,
      Education: false,
      Music: false,
      Philosophy: false,
      PoliticalScience: false,
      Science: false,
      History: false,
      Law: false,
      Games: false,
      Books: false,
      FoodandDrink: false,
      DataSource: false,
      WebTech: false,
      Economics: false,
      Medicine: false,
    },
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  let res = http.post(url, payload, params);
  check(res, { "status was 200": (r) => r.status == 200 });
  sleep(1);
}
