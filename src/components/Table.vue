<template>
  <div class="table">
    <h3>Live Cases by Country</h3>
    <table>
      <tr v-for="(country, i) in countries" :key="i">
        <td>{{ country.country }}</td>
        <td>
          <strong>{{ country.cases.toLocaleString() }}</strong>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ["countries"],
};
</script>

<style scoped>
.table {
  /* margin-top: 20px; */
  overflow: scroll;
  color: #6a5d5d;
  background-color: white;
  height: 400px;
  opacity: 0.7;
  background-color: #fff;
  font-family: "Roboto", "sans-serif";
  justify-content: space-between;
  padding: 5px 10px;
  margin: 5px 10px 5px 10px;
  border-radius: 14px;
  -webkit-box-shadow: 9px 4px 25px -8px rgba(0, 0, 0, 0.68);
  -moz-box-shadow: 9px 4px 25px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 9px 4px 25px -8px rgba(0, 0, 0, 0.68);
}
.table tr {
  display: flex;
  justify-content: space-between;
}

.table td {
  padding: 0.5rem;
  border: none;
}
.table tr:nth-of-type(odd) {
  background-color: #fff;
}
</style>
