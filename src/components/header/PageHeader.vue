<template>
  <div class="homePageContainer">
    <div class="homePageContainer__title">
      <h1>THOMAS ABEL AZARIA</h1>
    </div>
    <ul class="nav">
      <li class="logo">
        <a>HOBBIES/INTEREST</a>
      </li>
      <li>
        <router-link to="/about">about</router-link>
      </li>
      <li>
        <a>events</a>
      </li>
      <li>
        <a>acomplishments</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.homePageContainer {
  &__title {
    padding: 0 10%;
    h1 {
      margin: 0;
      padding: 20px 0;
      font-family: "Roboto" sans-serif;
      font-weight: 500;
    }
  }
}

.nav {
  padding: 0 10%;
  position: relative;
  display: block;
  list-style-type: none;
  background-color: rgb(52, 189, 82);
  margin: 0;
  height: 50px;

  li {
    position: relative;
    float: right;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    a {
      padding: 10px 15px;
      color: white;
      font-family: "Roboto" sans-serif;
      font-size: 20px;
      //   background-color: pink;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
