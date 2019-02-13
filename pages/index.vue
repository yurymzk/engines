<template>
  <section class="container">
    <div class="box"><GameSection /></div>
    <div class="box"><KidsSection /></div>
    <div class="box"><SolutionSeciton /></div>
    <div class="box"><AboutSeciton /></div>

    <div>
      <logo />
      <h1 class="title">
        engines
      </h1>
      <h2 class="subtitle">
        My prime ENGINES project
      </h2>
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
import GameSection from '~/components/GameSection.vue'
import KidsSection from '~/components/KidsSection.vue'
import SolutionSeciton from '~/components/SolutionSeciton.vue'
import AboutSeciton from '~/components/AboutSeciton.vue'

export default {
  components: {
    Akazukin,
    GameSection, KidsSection,SolutionSeciton,AboutSeciton
  }
}

</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.box {
  overflow: auto;
	height:100%;
	padding: 0 30px 0 10px;
	float: left;
	width: 900px;
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
