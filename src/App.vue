<template>
  <nav>
    <button @click="stage='loading'">Loading screen</button>
    <button @click="stage='game'">Game</button>
    <button @click="stage='high-scores'">High scores</button>
  </nav>
  <!-- <img alt="Vue logo" src="./assets/images/bg2reduced.jpeg"> -->
  <Logo />
  <Loading v-if="stage === 'loading'" :msgs="['Welcome to Your Vue.js App']"/>
  <HighScores v-if="stage === 'high-scores'" :msgs="['Welcome to Your Vue.js App']"/>
</template>

<script>
import Logo from './components/Logo.vue'
import Loading from './components/Loading.vue'
import HighScores from './components/HighScores.vue'

export default {
  name: 'App',
  components: {
    Logo,
    Loading,
    HighScores,
  },
  data() {
    return {
      stage: 'high-scores', 
    }
  },
}
</script>

<style lang="scss">

body {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: black;
  flex-direction: column;
  margin: 0;
  background-image: url('~@/assets/images/bg2reduced.jpeg');
  overflow-x: hidden;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  nav{
    position: relative;
    z-index: 1000;
  }
}
</style>
