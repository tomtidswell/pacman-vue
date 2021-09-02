<template>
  <section class="Game">
    GRID
  </section>
</template>

<script>
export default {
  name: "Game",
  props: {
    msgs: Array,
  },
  data() {
    return {
      lineCount: 30,
      colours: [],
    }
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
.Game {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: rgba(0,0,0,0.8);
  box-shadow: -5px -5px 50px white, 5px 5px 50px white ;
  width: 510px;
}
</style>
