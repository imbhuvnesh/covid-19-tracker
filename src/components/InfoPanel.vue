<template>

  <div class="info-panel">
    <!-- <h3>{{ countryData }}</h3> -->
    <info-box>
      <template #title>
        <h3 class="titles">Total Cases</h3>
        <p class="numbers">{{ numFormatter(countryData.cases) }}</p>
      </template>
      <template #subtitle>
        <h3 class="titles">Today</h3>
        <p class="numbers">+{{ numFormatter(countryData.todayCases) }}</p>
      </template>
      <template #sec-subtitle>
        <h3 class="titles">Active</h3>
        <p class="numbers">{{ numFormatter(countryData.active) }}</p>
      </template>
    </info-box>
    <info-box>
      <template #title>
        <h3 class="titles">Recovered Cases</h3>
        <p class="recovered numbers">{{ numFormatter(countryData.recovered) }}</p>
      </template>
      <template #subtitle>
        <h3 class="titles">Today Recovered</h3>
        <p class="recovered numbers">+{{ numFormatter(countryData.todayRecovered) }}</p>
      </template>
    </info-box>
    <info-box>
      <template #title>
        <h3 class="titles">Total Deaths</h3>
        <p class="death numbers">{{ numFormatter(countryData.deaths) }}</p>
      </template>
      <template #subtitle>
        <h3 class="titles">Deaths Today</h3>
        <p class="death numbers">+{{ numFormatter(countryData.todayDeaths) }}</p>
      </template>
      <template #sec-subtitle>
        <h3 class="titles">Critical Cases</h3>
        <p class="death numbers">{{ numFormatter(countryData.critical) }}</p>
      </template>
    </info-box>
  </div>
</template>

<script>
import InfoBox from "./InfoBox";
export default {
  props: ["countryData"],
  inject:['numFormatter'],
  components: {
    InfoBox,
  },
};
</script>

<style scoped>

.info-panel {
  display: flex;
  padding: 10px 15px;
  margin: 10px 20px;
  font-family: "Roboto", "sans-serif";
  justify-content: center;
}
h2 {
  color: white;
}
.titles {
  color: rgb(22, 121, 187);
}
.death {
  color: rgb(112, 19, 19);
}
.recovered {
  color: rgb(3, 110, 3);
}
.numbers {
  font-size: 25px;
}

@media (max-width: 990px) {
  .info-panel {
    flex-direction: column;
  }
}
</style>
