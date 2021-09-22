<template>
  <div class="appContainer">
    <page-header></page-header>

    <div class="appOutlet">
      <quote-gen></quote-gen>
      <router-view></router-view>

      <home-page></home-page>
    </div>
  </div>
</template>

<script>
import QuoteGen from "./components/body/QuoteGen.vue";

export default {
  name: "App",
  components: {
    QuoteGen
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100&display=swap");
.appContainer {
  // background-color: rgb(214, 212, 212);
  // height: 100vh;
}
.appOutlet {
  padding: 0 10%;
}
h1 {
  // font-family: "Roboto" sans-serif;
  // font-weight: 500;
}

p {
  font-family: "Roboto" sans-serif;
}
template {
  margin: 0;
}
.appContainer {
  margin: 0;
}
</style>
