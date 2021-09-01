<template>
  <section class="Loading">
    <div class="load-line" v-for="(colour, index) in colours" :key="index" :style="{'background-color': colour}"></div>
    <div class="load-text">
      <div v-for="(message, index) in messages" :key="index">> {{message}}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    msgs: Array
  },
  data() {
    return {
      lineCount: 30,
      colours: [],
      initialMessages: [
        'BOOTING.',
        'Preparing to load "Pacman v3".',
        'Press play on tape...',
      ]
    }
  },
  created() {
    window.setInterval(this.switchColours, 100)
  },
  beforeUnmount() {
    window.clearInterval(this.switchColours)
  },
  computed: {
    messages() {
      return [
        ...this.initialMessages,
        ...this.msgs,
      ]
    }
  },
  methods: {
    switchColours() {
      this.colours = []
      for (let i = 0; i < this.lineCount; i++) {
        this.colours.push(`#${Math.random().toString(16).substr(2, 6)}`)
      }
    }
  },
}
</script>

<style scoped lang="scss">
  .Loading{
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: black;
    .load-line{
      background-color: #0075d6;
      flex-grow: 1;
      opacity: 0.8;
    }
    .load-text{
      position: absolute;
      top: 20%;
      left: 20%;
      width: 60%;
      height: 60%;
      color: white;
      background-color: rgba(0,0,0,0.8);
      font-size: 1em;
      font-family: 'Courier New', Courier, monospace;
      font-weight: 300;
      z-index: 5;
      padding: 5px;
    }
  }
</style>
