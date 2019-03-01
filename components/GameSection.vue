<template>
    <div id="GameSection">

        <div class="background">
          <div class="gameBackImg1"><img src="/images/en_back_game.png"></div>
            <div class="GameWindowWrapper">
                <GameWindow />
                <GameWindow />
                <GameWindow />
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
    margin-left: -100px;
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
    left: -200px;
    margin-left: -200px;
    padding-left: 200px;
}
#GameSection .gameBackImg1 {
    position: absolute;
    margin-top: -3%;
    left: 65px;
    transform:skew(7deg);
    -webkit-transform: skew(7deg);
    -moz-transform: skew(7deg);
      -o-transform: skew(7deg);
}

#GameSection .button {
    position: absolute;
    right: 0;
    bottom: 0;
    margin-right: 200px;
    margin-bottom:50px;
    padding: 20px;

}
</style>
