<template>
  <div class="home">
    <h1>CAMP MATE</h1>
    <preset />
    <list />
  </div>
</template>

<script>
// @ is an alias to /src
import topbob from '@/components/topbob.vue'
import list from '@/components/list.vue'
import preset from '@/components/preset.vue'

export default {
  name: 'home',
  components: {
    topbob,
    list,
    preset
  }
}


</script>

<style>
  body {
    background-image: url(../../img/background.jpeg);
    background-position: center;
    background-size: auto;
    background-repeat: no-repeat;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }

  h1 {
    font-size: 3rem;
    padding: 1rem;
    margin: 0;
    color: #f7f7f7;
    background-color: #232422;
  }

  .preset-menu {
    margin: 1% 5%;
    text-align: left;
    color: #f7f7f7;
  }

  .presets {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1%;
    text-align: center;
    color: black;
    padding: 0;
    background-color: transparent;
  }

  
  .presets li:hover {
    background-color: #dddddd;
  }

  .preset {
    background-color: #f7f7f7;
    padding: 8% 0;
    cursor: pointer;
  }

  p img {
      transform: rotate(0deg);
      width: 1.5%;
    }

  p img:hover {
      transform: rotate(90deg);
      width: 1.5%;
    }
</style>
