<template>
    <div id="MovieSection">
        <div class="MovieWindowWrapper">
                <div id="video">
                <iframe src="https://www.youtube.com/embed/S8W4yDXQ4Lc?playlist=S8W4yDXQ4Lc&autoplay=1&loop=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            <div class="logo"></div>                
        </div>
    </div>
</template>



<style>
#MovieSection {
    height: 100vh;
    width: 100vw;
}
#MovieSection .MovieWindowWrapper {
    height: 100vh;
    position: relative;
    width: 100%;
}

#MovieSection #video {
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

    
}

#MovieSection #video iframe{
  position: fixed;
  z-index: 0;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
}

#MovieSection .logo {
}
</style>
