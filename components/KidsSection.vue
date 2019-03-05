<template>
    <div id="KidsSection">
    <div class="background">
        <div class="KidsBackImg1"><img src="/images/en_back_kids.png"></div>
        <div class="KidsWindowWrapper">
            <div class="titleBox">
                <p>「君はほんとはすごいんだ！！」を伝えたい</p>
                <p>キッズプロジェクト</p>
                <p>ダミー文章</p>
                <div class="button"></div>

            </div>

            <div class="KidsMovie">

                <iframe src="https://www.youtube.com/embed/S8W4yDXQ4Lc?autoplay=1&loop=0&mute=1&showinfo=0&controls=0&playlist=S8W4yDXQ4Lc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>


            </div>
        </div>

    </div>

    <div class="KidsIcon" id="KidsLink"><img src="/images/en_icon_kids_01.png"></div>



    </div>
</template>

<style>
#KidsSection {
    height: 100vh;
    width: 100vw;
    position: relative;
}

#KidsSection .background {
    position: absolute;
    width: 100vw;
    height: 100vh;
    margin-left: 135px;

    background-color: #FF1B1B;
    transform:skew(-7deg);
    -webkit-transform: skew(-7deg);
	   -moz-transform: skew(-7deg);
	     -o-transform: skew(-7deg);
}

#KidsSection .KidsWindowWrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transform:skew(7deg);
        -webkit-transform: skew(7deg);
	       -moz-transform: skew(7deg);
	         -o-transform: skew(7deg);
}

#KidsSection .KidsIcon {
    position: absolute;
    top: 30%;
    left: 50px;
    margin-left: -200px;
    padding-left: 200px;
}

#KidsSection .KidsBackImg1 {
    position: absolute;
     margin-top: -9%;
    left: 135px;
    transform:skew(7deg);
        -webkit-transform: skew(7deg);
	       -moz-transform: skew(7deg);
	         -o-transform: skew(7deg);
}

#KidsSection .titleBox {
    background-color: orange;
}

#KidsSection .KidsMovie {
    width: 800px;
    height: 600px;
    background-color: white;
    margin: 0 40px;
}

#KidsSection .KidsMovie iframe {
  width: 100%;
  height: 100%;
}
</style>
