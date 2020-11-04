<template>
  <div class="info-box card" style="width: 15rem;">
    <div class="card-body">
      <h4 class="card-title">
        <slot name="title"></slot>
      </h4>
      <h4 class="card-subtitle">
        <slot name="subtitle"></slot>
      </h4>
      <h4 class="card-subtitle">
        <slot name="sec-subtitle"></slot>
      </h4>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-body {
  font-size: 20px;
}
.card-title{
  color: black;
}
.info-box {
  display: flex;
  opacity: 0.6;
  background-color: #fff;
  font-family: "Roboto", "sans-serif";
  justify-content: center;
  padding: 5px 10px;
  margin: 5px 10px 5px 10px;
  border-radius: 14px;
  -webkit-box-shadow: 9px 4px 25px -8px rgba(0, 0, 0, 0.68);
  -moz-box-shadow: 9px 4px 25px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 9px 4px 25px -8px rgba(0, 0, 0, 0.68);
  flex-grow: 1;
}
</style>
