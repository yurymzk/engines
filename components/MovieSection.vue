<template>
    <div id="MovieSection">
        <div class="MovieWindowWrapper">
            <video id="Video" poster="" muted autoplay loop>
                <source src="/movie.mp4" type="video/mp4">
                <source src="/movie.webm" type="video/webm">
                <p>video要素がサポートされていないブラウザでご覧になっています。</p>
            </video>
            <div class="logo"></div>                
        </div>
    </div>
</template>



<style>
#MovieSaction .MovieWindowWrapper {
    height: 100vh;
    position: relative;
    width: 100%;
}

#MovieSaction #video {
    background: url('/video/video_bg.jpg') no-repeat;
    background-attachment: fixed;
    background-position: center center;

    /* 以下、画面いっぱいにしうるためのCSS設定 */
    min-height: 100%;
    min-height: 100vh;
    min-width: 100%;
    min-width: 100vw;

    /* wrapperサイズに大路て、leftの位置をJQueryで指定するため、positionはabsoluteにします。 */
    position:fixed;
    top: 0;
    left: 0;

    z-index: 0;
}

#MovieSaction .logo {
}
</style>
