import axios from "axios";

const loadTests = axios.create({
  baseURL: "https://dev-portal.xyzreviews.com/api/reviews/api/reviews/",
  timeout: 300000
});

export function canInsert() {
  return loadTests.head("load-tests/can-insert");
}

export function postReviews(count) {
  return loadTests.post(`load-tests/${count}`).then(res => res.data);
}

export function getReviews() {
  return getResult("reviews");
}

export function getCompanies() {
  return getResult("companies");
}

export function getTotal() {
  return getResult("total");
}

export function getUsersStatistic() {
  return getResult("users-statistic");
}

export function deleteReviews() {
  return loadTests.delete("load-tests");
}

function getResult(screen) {
  return loadTests.get(`load-tests/${screen}`).then(res => res.data);
}
