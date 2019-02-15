$(function() {
    // コンテンツの横サイズ
    var cont = $('#container');
    var contW = $('.box').outerWidth(true) * $('div',cont).lenght;

    cont.css('width', contW);
    
    //スクロールスピード
    var speed = 30;
    //マウスホイールで横移動
    $('html').mousewheel(function(event, mov) {
        //ie firefox
        $(this).scrollLeft($(this).scrollLeft() - mov * speed);
        //webkit
        $('body').scrollLeft($('body').scrollLeft() - mov * speed);

        return false; // 縦スクロール不可
    });
    $('a[href^=#]').click(function() {
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().left; // target の位置を取得
        $('html, body').animate({scrollLeft:position}, speed, 'swing');
        return false;
    });
});