<template>
    <div id="GameSection">

        <div class="background">
          <div class="gameBackImg1"><img src="/images/en_back_game.png"></div>
          <div class="gameBackImg2"><img src="/images/en_back_game_typo.png"></div>
                      <div class="GameWindowWrapper">
                <GameWindow v-model="posts[0]"/>
                <GameWindow v-model="posts[1]"/>

            </div>
        </div>

        <div class="gameIcon" id="GameLink"><img src="/images/en_icon_game_01.png"></div>

        <div class="button">ボタン</div>

    </div>
</template>

<script>
import GameWindow from '~/components/GameWindow.vue'

export default {
    components: {
        GameWindow
    },

    data() {
      return {
      posts: require('~/assets/json/game.json')
      }
    }
}
</script>


<style>





#GameSection {
    height: 100vh;
    width: 120vw;
    position: relative;
}


#GameSection .background {
    position: absolute;
    width: 120vw;
    height: 100vh;
    margin-left: -7vw;
    background-color: #3FA2FF;
    transform:skew(-7deg);
    -webkit-transform: skew(-7deg);
	   -moz-transform: skew(-7deg);
	     -o-transform: skew(-7deg);
}

#GameSection .GameWindowWrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    transform:skew(7deg);
    -webkit-transform: skew(7deg);
    -moz-transform: skew(7deg);
      -o-transform: skew(7deg);

}

#GameSection .gameIcon {
    position: absolute;
    top: 30%;
    left: -13vw;
    margin-left: -13vw;
    padding-left: 13vw;
}
#GameSection .gameBackImg1 {
    position: absolute;
    margin-top: -3%;
    left: 6vw;
    transform:skew(7deg);
    -webkit-transform: skew(7deg);
    -moz-transform: skew(7deg);
      -o-transform: skew(7deg);
}
#GameSection .gameBackImg2 {
    position: absolute;
    bottom: 4vw;
    right: 0;
    transform:skew(7deg);
    -webkit-transform: skew(7deg);
    -moz-transform: skew(7deg);
      -o-transform: skew(7deg);
}

#GameSection .button {
    position: absolute;
    width: 5vw;
    height: 5vw;
    right: 0;
    bottom: 0;
    margin-right: 20vw;
    margin-bottom: 3vw;
    padding: 1.2vw;
    color: white;
    background-color: navy;

}
</style>
