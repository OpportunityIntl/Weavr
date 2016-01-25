var iOSSafariViewportUnitsFix = function(settings) {
  var userAgent = window.navigator.userAgent;
  var isBuggySafari = /(iPhone|iPod|iPad).+AppleWebKit/i.test(userAgent) && (function() {
    var iOSversion = userAgent.match(/OS (\d)/);
    return iOSversion && iOSversion.length >1 && parseInt(iOSversion[1]) < 8;
  })();
  
  if (isBuggySafari) {
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    var viewportHeight = window.innerHeight;
    var viewportWidth = window.innerWidth;
    var css = '';
    
    for (i = 0, length = settings.length; i < length; i++) {
      var unit = settings[i].value.match(/(vh|vw|vmin|vmax)/);
      var amount = parseInt(settings[i].value);
      var val;
      
      switch (unit[0]) {
        case 'vh':
          val = (amount / 100) * viewportHeight;
          break;
        case 'vw':
          val = (amount / 100) * viewportWidth;
          break;
        case 'vmin':
          val = (amount / 100) * (Math.min(viewportHeight, viewportWidth));
          break;
        case 'vmax':
          val = (amount / 100) * (Math.max(viewportHeight, viewportWidth));
          break;
      }
      
      if (settings[i].query) {
        css += '@media ' + settings[i].query + ' {';
      }
      
      css += settings[i].selector + "{" + settings[i].property + ": " + val + "px;} ";
      
      if (settings[i].query) {
        css += '} ';
      }
    }

    style.type = 'text/css';
    
    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
  }
};
