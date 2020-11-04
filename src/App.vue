<template>
  <div class="app">
    <the-header
      :countries="countries"
      @recieve-country="setCountry"
    ></the-header>
    <div class="country">
      <div style="display: grid; justify-items: center" v-if="countryData.hasOwnProperty('country')">
        <h2 id="country-name">
          <strong
            >{{ countryData.country }}
            <span>({{ countryData.continent }})</span></strong
          >
        </h2>
        <p>
          <strong>Population - {{ numFormatter(countryData.population) }}</strong>
        </p>
      </div>
      <h2 v-else>Worldwide</h2>
    </div>
    <div class="app-center">
      <info-panel :countryData="countryData"></info-panel>
      <the-table :countries="countries"></the-table>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
import InfoPanel from "./components/InfoPanel";
import TheTable from "./components/Table";
import { URLS, httpClient } from "./helpers/apis";

export default {
  data() {
    return { countries: [], selectedCountry: "worldwide", countryData: {} };
  },
  provide() {
    return {
      numFormatter: this.numFormatter
    };
  },
  components: {
    TheHeader,
    InfoPanel,
    TheTable,
  },
  methods: {
    getCovidData() {
      const url =
        this.selectedCountry === "worldwide" || ""
          ? URLS.all
          : URLS.countries + `/${this.selectedCountry}`;
      return httpClient(url)
        .then((response) => (this.countryData = response.data))
        .catch((err) => console.log("Can't fetch covid data due to err:", err));
    },
    async getCountriesList() {
      const { data } = await httpClient.get(URLS.countries);
      this.countries = data;
    },
    setCountry(value) {
      this.selectedCountry = value;
      console.log(this.countryData);
      this.getCovidData();
    },
    numFormatter(num) {
      if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(0) + "K"; // convert to K for number from > 1000 < 1 million
      } else if (num > 1000000) {
        return (num / 1000000).toFixed(0) + "M"; // convert to M for number from > 1 million
      } else if (num < 900) {
        return num; // if value < 1000, nothing to do
      }
    },
  },
  mounted() {
    this.getCovidData();
    this.getCountriesList();
  },
};
</script>

<style>
body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}
body {
  background: linear-gradient(to right, #8e2de2, #4a00e0);
}
.app-center {
  display: flex;
  /* align-items: center; */
  justify-content: space-evenly;
  /* padding: 0 30px 10px 0; */
  flex: 0.8;
}
.country {
  display: flex;
  padding: 10px 15px;
  margin: 0 10px 0 0px;
  justify-content: center;
  font-family: "Roboto", "sans-serif";
  color: white;
}
#country-name {
  font-size: 30px;
}
@media (max-width: 990px) {
  .app-center {
    flex-direction: column;
    align-items: center;
  }
}
</style>
