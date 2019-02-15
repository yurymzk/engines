<template>
  <section class="container">
    <div class="backgroundLB"></div>
    <div class="backgroundBK"></div>
    <div class="backgroundGR"></div>

    <div class="box"><MovieSection /></div>
    <div class="box"><VisionSection /></div>
    <div class="box"><GameSection /></div>
    <div class="box"><KidsSection /></div>
    <div class="box"><SolutionSeciton /></div>
    <div class="box"><AboutSeciton /></div>

    <div>
      <logo />
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
    </div>
  <Akazukin />

  </section>
</template>

<script>
import Akazukin from '~/components/Akazukin.vue'
import MovieSection from '~/components/MovieSection.vue'
import VisionSection from '~/components/VisionSection.vue'
import GameSection from '~/components/GameSection.vue'
import KidsSection from '~/components/KidsSection.vue'
import SolutionSeciton from '~/components/SolutionSeciton.vue'
import AboutSeciton from '~/components/AboutSeciton.vue'

export default {
  components: {
    Akazukin,
    MovieSection,
    VisionSection,
    GameSection, KidsSection,SolutionSeciton,AboutSeciton
  }
}
</script>

<style>
.container {
  height: 100vh;
  width: 9815px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.box {
	height:100%;
}

.backgroundLB {
    position: absolute;
    left: 3020px;
    width: 600px;
    height: 100vh;
    z-index: -10;
    background-image: linear-gradient(-45deg,lightblue 25%, rgb(137, 191, 245) 25%, rgb(137, 191, 245) 50%,lightblue 50%, lightblue 75%, rgb(137, 191, 245) 75%,  rgb(137, 191, 245));
    background-size: 14px 14px;
}

.backgroundBK {
    position: absolute;
    left: 5280px;
    width: 600px;
    height: 100vh;
    z-index: -10;
    background-image: linear-gradient(-45deg,gray 25%, lightgray 25%, lightgray 50%,gray 50%, gray 75%, lightgray 75%,  lightgray);
    background-size: 14px 14px;
}

.backgroundGR {
    position: absolute;
    left: 7018px;
    width: 600px;
    height: 100vh;
    z-index: -10;
    background-color: lightgray;

}


#GameSection .gameIcon img,
#KidsSection .KidsIcon img,
#SolutionSection .SolutionIcon img,
#AboutSection .AboutIcon img
 {
    width: 200px;
    filter: drop-shadow(9px 10px 3px #222);
}


.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.titleBox {
  width: 300px;
  height: 600px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
