<template>
    <div id="KidsSection">
    <div class="background">
        <div class="KidsWindowWrapper">
            <div class="titleBox">
                <p>「君はほんとはすごいんだ！！」を伝えたい</p>
                <p>キッズプロジェクト</p>
                <p>ダミー文章</p>
                <div class="button"></div>

            </div>

            <div class="KidsMovie"></div>
        </div>

    </div>

    <div class="KidsIcon"><img src="/images/en_icon_kids_01.png"></div>



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

    background-color: red;
    transform:skew(-18deg);
    -webkit-transform: skew(-18deg);
	   -moz-transform: skew(-18deg);
	     -o-transform: skew(-18deg);
}

#KidsSection .KidsWindowWrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transform:skew(18deg);
        -webkit-transform: skew(18deg);
	       -moz-transform: skew(18deg);
	         -o-transform: skew(18deg);}

#KidsSection .KidsIcon {
    position: absolute;
    top: 30%;
    left: 70px;
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
</style>
