<template>
  <section id="container">
    <a href="#VisionSection"><div class="topLink"></div></a>
    <div class="backgroundLB"></div>
    <div class="backgroundBK"></div>
    <div class="backgroundGR"></div>

    <div class="box scrollsnap"><MovieSection /></div>
    <div class="box scrollsnap"><VisionSection /></div>
    <div class="box scrollsnap"><GameSection /></div>
    <div class="box scrollsnap"><KidsSection /></div>
    <div class="box scrollsnap"><SolutionSeciton /></div>
    <div class="box scrollsnap"><CompanySeciton /></div>

  <Akazukin />

  <Loading />

  </section>
</template>

<script>
import Akazukin from '~/components/Akazukin.vue'
import MovieSection from '~/components/MovieSection.vue'
import VisionSection from '~/components/VisionSection.vue'
import GameSection from '~/components/GameSection.vue'
import KidsSection from '~/components/KidsSection.vue'
import SolutionSeciton from '~/components/SolutionSeciton.vue'
import CompanySeciton from '~/components/CompanySeciton.vue'
import Loading from '~/components/Loading.vue'

export default {
  components: {
    Akazukin,
    MovieSection,
    VisionSection,
    GameSection, KidsSection,SolutionSeciton,CompanySeciton,
    Loading
  }
}
</script>

<style>
#container {
  height: 100vh;
  width: 706vw;
  width: 670vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

}

.topLink {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}
.box {
	height:100%;
}

.scrollsnap {

}
.backgroundLB {
    position: absolute;
    left: 300vw;
    width: 600px;
    height: 100vh;
    background-image: linear-gradient(-45deg,lightblue 25%, rgb(137, 191, 245) 25%, rgb(137, 191, 245) 50%,lightblue 50%, lightblue 75%, rgb(137, 191, 245) 75%,  rgb(137, 191, 245));
    background-size: 14px 14px;
}

.backgroundBK {
    position: absolute;
    left: 415vw;
    width: 600px;
    height: 100vh;
    background-image: linear-gradient(-45deg,gray 25%, lightgray 25%, lightgray 50%,gray 50%, gray 75%, lightgray 75%,  lightgray);
    background-size: 14px 14px;
}

.backgroundGR {
  display: none;
    position: absolute;
    left: 633vw;
    width: 600px;
    height: 100vh;
    background-color: white;

}


#GameSection .gameIcon img,
#KidsSection .KidsIcon img,
#SolutionSection .SolutionIcon img,
#CompanySection .CompanyIcon img
 {
    width: 200px;
    filter: drop-shadow(9px 10px 3px #222);
}


</style>
