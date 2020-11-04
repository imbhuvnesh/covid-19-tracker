<template>
  <div class="header">
    <h1>Covid-19 Tracker</h1>
    <div class="dropdown">
      <select
        name="country-dropdown"
        id="country-dropdown"
        v-model="selectedCountry"
        @change="returnSelectedCountry"
      >
        <option value="" selected disabled>Select Country</option>
        <option value="worldwide">Worldwide</option>
        <option
          v-for="(country, i) in countries"
          :value="country.countryInfo.iso2"
          :key="i"
          >{{ country["country"] }}</option
        >
      </select>
    </div>
  </div>
</template>

<script>
// import { URLS, httpClient } from "../helpers/apis";
export default {
  props:['countries'],
  data() {
    return {
      selectedCountry: "",
    };
  },
  methods: {
    returnSelectedCountry(){
      this.$emit('recieve-country', this.selectedCountry);
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: "Roboto", "sans-serif";
  margin-bottom: 10px;
}
h1 {
  color: white;
  font-size: 40px;
}
.dropdown {
  color: white;
}
select {
  border: none;
  border-radius: 6px;
  height: 40px;
  -webkit-box-shadow: 9px 4px 25px -8px rgba(0, 0, 0, 0.68);
  -moz-box-shadow: 9px 4px 25px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 9px 4px 25px -8px rgba(0, 0, 0, 0.68);
}
option {
  font-size: 15px;
}
@media (max-width: 990px) {
  .header {
    flex-direction: column;
  }
}
</style>
