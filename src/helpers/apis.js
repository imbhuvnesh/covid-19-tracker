import axios from "axios";

const HTTP_TIMEOUT = 10000;
const BASE_URL = "https://disease.sh";

export const httpClient = axios.create({
  timeout: HTTP_TIMEOUT,
  baseURL: BASE_URL,
  headers: { "content-type": "application/json" },
});

export const URLS = {
  countries: BASE_URL + "/v3/covid-19/countries",
  all: BASE_URL + "/v3/covid-19/all",
};
