<template>
  <header class="Logo">
    <div class="pacman-title"></div>
    <p>new for 1985</p>
    <h1>Pacman</h1>
    <h2>General Assembly Edition</h2>
  </header>
</template>

<script>
export default {
  name: "Logo",
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style scoped lang="scss">
.Logo {
  position: relative;
  width: 540px;
  height: 165px;
  margin: 10px;
  overflow-x: hidden;

  p {
    position: relative;
    left: 5px;
    top: 10px;
    color: #fff;
    font-size: 1.5em;
    margin: 0;
    font-style: italic;
    font-family: "Kanit", sans-serif;
    text-shadow: 0 0 5px #ddd, 0 0 10px #ddd, 0 0 20px blue, 0 0 30px purple,
      0 0 40px red, 0 0 55px #49ff18, 0 0 75px #49ff18;
  }

  h1 {
    font-family: "Kanit", sans-serif;
    font-size: 6em;
    line-height: 0.7;
    letter-spacing: -3px;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
    color: white;
    background: linear-gradient(
      to bottom,
      #0075d6 20%,
      #85b3bf 52%,
      #424242 54%,
      #424242 54%,
      #3d2c09 62%,
      #914f25 67%,
      #d337d1 79%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h2 {
    position: relative;
    left: 50%;
    top: -40%;
    font-family: "Damion", cursive;
    margin: 0;
    color: pink;
    transform: perspective(350px) rotateY(40deg) rotate(-8deg);
    text-shadow: 0 0 5px red, 0 0 10px red, 0 0 10px red, 0 0 10px red,
      0 0 20px red, 0 0 30px red;
  }
  .pacman-title {
    position: absolute;
    z-index: -1;
    top: 0px;
    left: 20px;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background-color: #ffd915;
    clip-path: polygon(
      100% 15%,
      50% 50%,
      100% 85%,
      100% 100%,
      0% 100%,
      0% 0%,
      100% 0%
    );
    animation: 8s linear titleMunch infinite;
  }
}
</style>
