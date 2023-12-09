<template>
  <HeaderMain />
  <MainPage />
</template>

<script>
import HeaderMain from './components/HeaderMain.vue';
import MainPage from './components/MainPage.vue';

export default {
  name: 'App',
  components: {
    MainPage,
    HeaderMain
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;

}

p {
  margin: 0;
}

body {
  background-color: rgb(182, 255, 182);
  --col-clear: rgba(0, 0, 0, 0);
}
</style>
