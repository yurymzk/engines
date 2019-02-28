// すべての要素が読み込み終わったら、ローディング画面を非表示にする
$(window).on('load',function() {
    $('html, body').animate({ scrollLeft: 0}, '1');

    $(".loading").delay(1200).fadeOut(800);
});


// メニューのスライド
$(function(){
    $('.logo-trigger').on('click',function() {
      $.when(
        $('.logo').toggleClass('logo-change-height')
        ).done(function(){
        $('nav').slideToggle();
      });
      $('.fa-angle-down').toggleClass('rotate');
    });
});

//横スクロール
$(function() {
    // コンテンツの横サイズ
    var cont = $('#container');
    var contW = $('.box').outerWidth(true) * $('div',cont).lenght;

    cont.css('width', contW);

    //スクロールスピード
    var speed = 100;
    var scrollx = 0;
    //マウスホイールで横移動
    $('html').mousewheel(function(event, mov) {
      if( (uaObj.browserName == "chrome") || (uaObj.browserName == "safari")){
         //webkit
        scrollx = $('body').scrollLeft() - mov * speed;
          //ie firefox
        scrollx = $(this).scrollLeft() - mov * speed;
      }

        $('html,body')
        .stop()
        .animate({scrollLeft: scrollx}, 'slow',$.easie(0,0,0,1));
        //イージングプラグイン使わない場合
        //.animate({ scrollLeft: scrollx }, 'normal');

        return false; // 縦スクロール不可
    });

    $('a[href^="#"]').on('click',function() {
        var speed = 100;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().left; // target の位置を取得
        $('html, body').animate({scrollLeft:position}, speed, 'swing');
        return false;
    });
});



//youtube全画面表示
//ムービー全画面スクリプト（PC用）
//(1)動画の画角比率を設定します。4:3の場合はここを「4/3」に変更
var movieRatio = 16/9;
//(2)画像のリサイズ関数「movieAdjust()」を作成
function movieAdjust(){
        var adjustWidth = $(window).width();
        var adjustHeight = $(window).height();
        if (adjustHeight > adjustWidth / movieRatio) {
                adjustWidth = adjustHeight * movieRatio;
        }
        $('#MovieSection iframe').css({width:(adjustWidth),height:(adjustWidth/movieRatio)});
}
//(3)画面リサイズ時と画面ロード時に関数movieAdjust()を実行
  $(window).on('load resize', function(){
    movieAdjust();
  });
