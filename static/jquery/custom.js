// すべての要素が読み込み終わったら、ローディング画面を非表示にする
$(window).on('load',function() {
    $('html, body').animate({ scrollLeft: 0}, '1');

    $(".loading").delay(1200).fadeOut(800);
});


// メニューのスライド
$(function(){
    $('.logo-trigger').on('click',function() {
        $('nav').slideToggle();
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
    //マウスホイールで横移動
    $('html').mousewheel(function(event, mov) {
        //ie firefox
        $(this).scrollLeft($(this).scrollLeft() - mov * speed);
        //webkit
        $('body').scrollLeft($('body').scrollLeft() - mov * speed);

        return false; // 縦スクロール不可
    });
    $('a[href^="#"]').on('click',function() {
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().left; // target の位置を取得
        $('html, body').animate({scrollLeft:position}, speed, 'swing');
        return false;
    });
});

// マウスホイールのスムーススクロール
$(function() {
  function KeepMouseWheelSmooth() {
    var t = this;
    t.scrollTargetPos = 0;
    t.scrollPos = 0;
    t.delta;
    t.timeoutId;
    t.decelerationBase = 0.1; // この値が小さいほど原則率がゆるやかになる

    t.wheelFlag = false;

    t.mouseWheelEvent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';

    t.bodyW = $('body').innerWidth();
    t.winW = $('window').width();

    $(document).on(t.mouseWheelEvent, function(e) {

      //safariだとテキスト選択中おかしい
      if(!t.wheelFlag) {
        var selection = getSelection();
        if(selection.rangeCount > 0) {
          var range = selection.getRangeAt(0);
          selection.removeAllRanges;
        }
      }

      e.preventDefault();
      clearTimeout(t.timeoutId);
      t.wheelFlag = true;

      t.delta = e.originalEvent.deltaX ? -(e.originalEvent.deltaX) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);

      // Firefoxだけdeltaの値が10分の1
      if(uaObj.browserName == 'firefox') t.delta = t.delta * 15;

      t.scrollPos -= t.delta; //ターゲットY値　リミット値を設ける
      if(t.scrollPos < 0) t.scrollPos = 0;
      if(t.scrollPos > t.bodyW - t.winW) t.scrollPos = t.bodyW - t.winW;

      t.timeoutId = setTimeout(function() {t.wheelFlag = false; } , 1000); //ホイール完了後は処理軽減

      return false;

    });

    // ブラウザから出たとき　処理軽減
    $('body').on('mouseleave', function(e) {

      clearTimeout(t.timeoutId);
      t.wheelFlag = false;
      t.deceleration = 0; //スクロールバーのノブの動作をさせた時のガクるのを抑えるため
      return false;
    });

    $('body').on('mouseenter', function(e) {

      t.deceleration = t.decelerationBase;
      return false;
    });

    // スクロールバーで動作させたあとの値取得
    t.scrollFunc = function() {
      // スクロールバーの処理
      if (!t.wheelFlag) {
        t.scrollPos = $(document).scrollLeft();
        t.scrollTargetPos = $(document).scrollLeft();
      }
    }

    //初期値を取得
    t.scrollPos = $(document).scrollLeft();
    t.scrollTargetPos = $(document).scrollLeft();

    $(window).on('scroll', function() { t.scrollFunc() });

    t.smoothScrollfunc = function () {

      if(t.wheelFlag) {
        var ty = (t.scrollPos - $(document).scrollTop()) * t.deceleration; //（ターゲットX値 - 現在X値）* 減速率
        t.scrollTargetPos += Math.floor(ty);
        $(document).scrollLeft((t.scrollTargetPos));
      }

      requestAnimationFrame(t.smoothScrollfunc); //requestAnimationFrame

    }

    t.deceleration = t.decelerationBase;
    t.smoothScrollfunc();
  }

  // PCのみ発動
  if(uaObj.deviceName == 'PC') var KeepMouseWheelSmooth = new KeepMouseWheelSmooth();

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
