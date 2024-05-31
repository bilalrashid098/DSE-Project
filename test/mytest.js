import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  stages: [
    { duration: "30s", target: 10 },
    { duration: "1m", target: 10 },
    { duration: "30s", target: 0 },
  ],
};

export default function () {
  let testURL = "http://localhost:3000/api/blog";

  const reqPayload = JSON.stringify({
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

  const reqParams = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = http.post(testURL, reqPayload, reqParams);

  check(response, { Status: (res) => res.status == 200 });

  sleep(1);
}
