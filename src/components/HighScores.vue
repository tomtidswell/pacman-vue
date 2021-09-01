<template>
  <section class="HighScores">
    <!-- <div class="row"> -->
      <div class="score">Rank</div>
      <div class="lives">Name</div>
      <div class="high">High score</div>
    <!-- </div> -->
    <template class="row" v-for="(score, index) in scores" :key="index" >
      <div class="score">#{{index}}</div>
      <div class="lives">{{score.name}}</div>
      <div class="high">{{score.value}}</div>
    </template>
  </section>
</template>

<script>
export default {
  name: "HighScores",
  props: {
    msgs: Array,
  },
  data() {
    return {
      lineCount: 30,
      colours: [],
      scores: [
        {
          name: "Tom",
          value: 500,
        },
        {
          name: "Tom",
          value: 450,
        },
        {
          name: "Tom",
          value: 400,
        },
        {
          name: "Tom",
          value: 350,
        },
        {
          name: "Tom",
          value: 300,
        },
        {
          name: "Tom",
          value: 250,
        },
        {
          name: "Tom",
          value: 200,
        },
        {
          name: "Tom",
          value: 150,
        },
        {
          name: "Tom",
          value: 100,
        },
        {
          name: "Tom",
          value: 50,
        },
        {
          name: "Tom",
          value: 25,
        },
      ],
    };
  },
  computed: {
    messages() {
      return [];
    },
  },
  methods: {
    switchColours() {
      this.colours = [];
      for (let i = 0; i < this.lineCount; i++) {
        this.colours.push(`#${Math.random().toString(16).substr(2, 6)}`);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.HighScores {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: rgba(0,0,0,0.8);
  font-size: 2em;
  box-shadow: -5px -5px 50px white, 5px 5px 50px white ;
  width: 510px;
  .high,
  .lives,
  .score{
    background: linear-gradient(to bottom, #0075d6 20%, #85b3bf 48%, #3d2c09 53%, #914f25 60%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Kanit', sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .lives{
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
