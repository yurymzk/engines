<template>
    <div class="movie_wrapper">
        <img class="movie_fitImage" src="">
        <div class="movie_centered">
            <div class="movie_contents">
                <div class="movie_logo">ENGINES</div>
            </div>
        </div>
    </div>
</template>

<style>

.movie_fitImage {
    position: absolute;
}
</style>

<script>
   
var winH = $(window).height();
$('.movie_wapper').outerHeight(winH);

$(window).on('load',function() {
    setBgImg($('.movie_fitImage'));
});

$(window).on('resize',function(){
    winH = $(window).height();
    $('.movie_wrapper').outerHeight(winH);
    setBgImg($('.movie_fitImage'));
});

function setBgImg(object){
    // 画像サイズ取得
    var imgW = object.width();
    var imgH = object.height();

    //ウインドウサイズ取得
    var winW = $(window).width();
    var winH = $(window).height();

    //幅・高さの拡大率取得
    var scaleW = winW / imgW;
    var scaleH = widH / imgH;

    //幅・高さの拡大率の大きいものを取得
    var fixScale = Math.max(scaleW, scaleH);

    //画像の幅高さを設定
    var setW = imgW * fixScale;
    var setH = imgH * fixScale;
    
    //画像の位置を設定
    var moveX = Math.floor((winW - setW) / 2);
    var moveY = Math.floor((winH - setH) / 2);

    //設定した数値でスタイルを適用
    object.css( {
        'width' : setW,
        'height' : setH,
        'left' : moveX,
        'top' : moveY
    });

}
</script>

