<template>
    <div id="KidsSection">
    <div class="background">
        <div class="KidsBackImg1"><img src="/images/en_back_kids.png"></div>
        <div class="KidsBackImg2"><img src="/images/en_back_kids_typo.png"></div>
        <div class="KidsWindowWrapper">
            <div class="titleBox">
                <div class="KidsImg1"><img src="/images/en_img_kids_01.png"></div>
                <p>「君はほんとはすごいんだ！！」を伝えたい</p>
                <p>キッズプロジェクト</p>
                <p>ダミー文章</p>
                <div class="button">ボタン</div>

            </div>

            <div class="KidsMovie">
            <div class="KidsMovie-movie">
                <iframe src="https://www.youtube.com/embed/S8W4yDXQ4Lc?autoplay=1&loop=0&mute=1&showinfo=0&controls=0&playlist=S8W4yDXQ4Lc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            <div class="KidsMovie-overlay"></div>
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
    margin-left: 8vw;

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
    left: 3vw;
    margin-left: -13vw;
    padding-left: 13vw;
}

#KidsSection .KidsBackImg1 {
    position: absolute;
     margin-top: -9%;
    left: 6vw;
    transform:skew(7deg);
        -webkit-transform: skew(7deg);
	       -moz-transform: skew(7deg);
	         -o-transform: skew(7deg);
}
#KidsSection .KidsBackImg2 {
    position: absolute;
    bottom: 3vw;
    right: 0;
    transform:skew(7deg);
        -webkit-transform: skew(7deg);
	       -moz-transform: skew(7deg);
	         -o-transform: skew(7deg);
}

#KidsSection .titleBox {
    background-color: orange;
    width: 23vw;
    height: 76vh;
}
#KidsSection .KidsImg1 {
    margin : 2vw;;
}

#KidsSection .button {
    width: 18vw;
    margin: 1vw auto;
    padding: 1vw;
    color: white;
    background-color: #FF1B1B;
    border-radius: 0.3vw;
    -webkit-border-radius: 0.3vw;/* for Safari and Chrome 対応*/
    -moz-border-radius: 0.3vw;/* for Firefox 対応*/

}


#KidsSection .KidsMovie {
    position: relative;
    width: 50vw;
    height: 35vw;
    background-color: white;
    margin: 0 1.7vw;
}

#KidsSection .KidsMovie-movie,
#KidsSection .KidsMovie-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
}

#KidsSection .KidsMovie-movie {
  background-color: white;
}

#KidsSection .KidsMovie iframe {
  width: 100%;
  height: 100%;
}
</style>
