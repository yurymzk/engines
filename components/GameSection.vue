<template>
    <div id="GameSection">

        <div class="background">
            <div class="GameWindowWrapper">
                <GameWindow />
                <GameWindow />
                <GameWindow />
            </div>
        </div>
        <div class="gameIcon"><img src="/images/en_icon_game_01.png"></div>

        
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
    width: 2000px;
    position: relative;
}

#GameSection .background {
    position: absolute;
    width: 2000px;
    height: 100vh;
    margin-left: 100px;
    border-bottom: 100vh solid cornflowerblue;
    border-left: 150px solid transparent;
    border-right: 200px solid transparent;

}

#GameSection .GameWindowWrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

#GameSection .gameIcon {
    position: absolute;
    top: 30%;
    left: 80px;
}


#GameSection .button {
    position: absolute;
    right: 0;
    bottom: 0;
    margin-right: 50px;
    margin-bottom:50px;
    padding: 20px;
 
}
</style>