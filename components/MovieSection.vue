<template>
    <div id="MovieSection">
        <div class="MovieWindowWrapper">
                <div id="video">
                <iframe src="https://www.youtube.com/embed/S8W4yDXQ4Lc?autoplay=1&loop=1&mute=1&showinfo=0&controls=0&playlist=S8W4yDXQ4Lc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div id="video-overlay"></div>
            <div class="logo"></div>                
        </div>
    </div>
</template>



<style>
#MovieSection {
    height: 100vh;
    width: 200vw;
}
#MovieSection .MovieWindowWrapper {
    height: 100vh;
    position: relative;
    width: 100%;
}

#MovieSection #video,
#MovieSection #video-overlay {
    /* wrapperサイズに大路て、leftの位置をJQueryで指定するため、positionはabsoluteにします。 */
    position:fixed;
    top: 0;
    left: 0; 
    
    /* 以下、画面いっぱいにしうるためのCSS設定 */
    min-height: 100%;
    min-height: 100vh;
    min-width: 100%;
    min-width: 100vw;
}

#MovieSection #video {
    z-index:-2;
}

#MovieSection #video-overlay {
    z-index: -1;
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
