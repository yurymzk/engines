var uaObj = {}; //どこからでも取得できるようにグローバル扱い

(function() {

  var ua = window.navigator.userAgent.toLowerCase();

  uaObj.agentName = '';
  uaObj.deviceName ='';
  uaObj.iosVer;

  if (ua.indexOf('iphone') > 0 || ua.indexOf('ipod') > 0 || ua.indexOf('andoroid') > 0 && ua.indexOf('mobile') > 0) {

    /* スマホ */
    uaObj.deviceName = "SP";
    document.write('<meta name="viewport" content="sidth=device-width, initial-scale=1, maximum-scale=1m user-scalable=no">');

    if(ua.search(/iphone/) != -1) {

      uaObj.agentName = "iphone";

      // ios系 ver対応必要な場合に記述
      if (ua.search(/11/) != -1) uaObj.iosVer = 11;
      if (ua.search(/10/) != -1) uaObj.iosVer = 10;
      if (ua.search(/9/) != -1) uaObj.iosVer = 9;

    }else if (ua.search(/ipod/) != -1) {

      uaObj.agentName = "ipod";



    } else if (ua.search(/android/) != -1) {

      uaObj.agentName = "android";

      // androidケイ ver対応必要な場合に記述
      if (ua.search(/andorid 4/) != -1) uaObj.agentName = "andorid4";

    }

  }else if (ua.indexOf('ipad') > 0 || ua.indexOf('android') > 0) {

    /* タブレット */
    uaObj.deviceName = "TAB";

    document.write('<meta name="viewport" content="width-device-width, initial-scale=1, maximum-scale=1, user-scalable=no">'); //タブレットもレスポンシブの場合

    if (ua.search(/ipad/) != -1) {
      uaObj.agentName = "ipad";

      if (ua.search(/11/) != -1) uaObj.iosVer = 11;
      if (ua.search(/10/) != -1) uaObj.iosVer = 10;
      if (ua.search(/9/) != -1) uaObj.iosVer = 9;

    } else {
      uaObj.agentName = "android";
    }

  } else {

    /* PC */

    var ver = window.navigator.appVersion.toLowerCase();
    uaObj.browserName = '';
    uaObj.ieFlag = false;
    uaObj.macFlag = false;

    uaObj.deviceName = "PC";

    if ( ua.indexOf("msie") != -1) {
      if (ver.indexOf("msie 6.") != -1) {
        uaObj.browserName = 'ie6';
      } else if  (ver.indexOf("msie 7.") != -1) {
        uaObj.browserName = 'ie7';
      } else if  (ver.indexOf("msie 8.") != -1) {
        uaObj.browserName = 'ie8';
      } else if  (ver.indexOf("msie 9.") != -1) {
        uaObj.browserName = 'ie9';
      } else if  (ver.indexOf("msie 10.") != -1) {
        uaObj.browserName = 'ie10';
      }
      uaObj.ieFlag = true;
    } else if (ua.indexOf('trident/7') != -1) {
      uaObj.browserName = 'ie11';
      uaObj.ieFlag = true;
    } else if (ua.indexOf('edge') != -1) {
      uaObj.browserName = 'edge';
      uaObj.ieFlag = true;
    } else if (ua.indexOf('chrome') != -1) {
      uaObj.browserName = 'chrome';
    } else if (ua.indexOf('safari') != -1) {
      uaObj.browserName = 'safari';
    } else if (ua.indexOf('opera') != -1) {
      uaObj.browserName = 'opera';
    } else if (ua.indexOf('firefox') != -1) {
      uaObj.browserName = 'firefox';
    }

    var isMac = ((ua.indexOf('mac') > -1) && (ua.indexOf('os') > -1)) && !((ua.indexOf('iphone') > -1) || (ua.indexOf('ipad') > -1) || (ua.indexOf('windows') > -1));

    if (isMac) uaObj.macFlag = true;
  }
})(this);
