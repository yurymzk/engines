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
    // ロケーションバーの URL が # 付きになるのがイヤ & デフォルト動作を回避するために return false;
    return false;
});

//横スクロール
$(function() {
  // イージング処理
  function easingAnimation(position, moveSpeed){
    $('html, body').animate({scrollLeft:position}, moveSpeed, 'swing');
    return false;
  }

    // コンテンツの横サイズ
    var cont = $('#container');
    var contW = $('.box').outerWidth(true) * $('div',cont).lenght;

    cont.css('width', contW);

    //スクロールスピード
    var speed = 200;
    var scrollx = 0;
    //マウスホイールで横移動
    $('html').mousewheel(function(event, mov) {
      // ターゲットがブラウザの半分を過ぎたら次のセクションまでスクロール
      snapVTarget = $('#VisionSection').offset().left;
      snapGTarget = $('#GameLink').offset().left;
      snapKTarget = $('#KidsLink').offset().left;
      snapSTarget = $('#SolutionLink').offset().left;
      snapCTarget = $('#CompanyLink').offset().left;

      // ブラウザの真ん中あたりが開始一からどれだけ進んでいるか？
      nowPos = $(this).scrollLeft() + $(window).width();  // 進んだ位置
      var movePos = $(window).width() / 3 ;
      var moveSpeed = 3000;


      var delta = event.originalEvent.deltaX ? -(event.originalEvent.deltaY) : event.originalEvent.wheelDelta ? event.originalEvent.wheelDelta : -(event.originalEvent.detail);
      if (delta < 0){
          // マウスホイールを右にスクロールしたときの処理を記載
          if (nowPos == snapVTarget){
            easingAnimation(snapVTarget, moveSpeed);
          } else if (nowPos - $(window).width() < snapGTarget) {
            easingAnimation(snapGTarget, moveSpeed);
          } else if (nowPos < snapSTarget -300 && nowPos > snapKTarget + movePos) {
            easingAnimation(snapKTarget, moveSpeed);
          } else if (nowPos < snapCTarget -300  && nowPos > snapSTarget + movePos) {
            easingAnimation(snapSTarget, moveSpeed);
          } else if (nowPos > snapCTarget + movePos) {
            easingAnimation(snapCTarget, moveSpeed);
          } else {
            // Windowsのみの対応
            if (uaObj.macFlag == false){
              if( (uaObj.browserName == "chrome") || (uaObj.browserName == "safari")){
                //webkit
                scrollx = $('body').scrollLeft() - mov * speed;
                  //ie firefox
                scrollx = $(this).scrollLeft() - mov * speed;
              }
            }
            // イージング
            $('html,body')
            .stop()
            .animate({scrollLeft: scrollx}, 'slow',$.easie(0,0,0,1));
            //イージングプラグイン使わない場合
            //.animate({ scrollLeft: scrollx }, 'normal');

            return false; // 縦スクロール不可

          }

      } else {
          // マウスホイールを左にスクロールしたときの処理を記載


            // Windowsのみの対応
            if (uaObj.macFlag == false){
              if( (uaObj.browserName == "chrome") || (uaObj.browserName == "safari")){
                //webkit
                scrollx = $('body').scrollLeft() - mov * speed;
                  //ie firefox
                scrollx = $(this).scrollLeft() - mov * speed;
              }
            }
            // イージング
            $('html,body')
            .stop()
            .animate({scrollLeft: scrollx}, 'slow',$.easie(0,0,0,1));
            //イージングプラグイン使わない場合
            //.animate({ scrollLeft: scrollx }, 'normal');

            return false; // 縦スクロール不可
      }
    });

    // ページ内リンククリック時
    $('a[href^="#"]').on('click',function() {
        var speed = 3000;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().left; // target の位置を取得
        easingAnimation(position, speed);
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


//キャラクター要素のアニメーション制御
$(function() {
  // キャラクター要素が表示域にIn-Outするときの挙動
  $('#main_chara').on('inview',function(event, isInView, visiblePartX, visiblePartY) {

    // 要素の現在位置を取得
    var charaX = $('#main_chara').offset().left;
    $(this).removeClass('flyOut'); // 初期化

    if (isInView) {
      // 表示域に入ったとき

    } else {
      // 表示域から出たとき
      // ブラウザの画面中央のX座標点を設定
      var winSize = $(window).width() / 2;
      var posX = winSize + charaX - ($(window).width() * 1.1);
    }
      $(this).addClass('flyOut');

      $('.flyOut').css({
        'transform': 'translateX(' + posX + 'px)',
        '-webkit-transform': 'translateX(' + posX + 'px)'
      })
  });
});

/*$(function() {
   // キャラクター要素をクリックしたときの挙動
  $('#main_chara').on('click',function() {
    // バウンス
    $(this).addClass('animated bounce');
    $(this).addClass('test');
    $('.test').animate({
      "animation-duration": "1s",
      "animation-fill-mode": "both",
      "animation-name": "bounce",
      "transform-origin": "center bottom"
    },{
      complete:function(){
        //animate完了後に実行
        $(this).removeClass('test');
      }
    });


  });
});
*/
