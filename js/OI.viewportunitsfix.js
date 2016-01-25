(function(document, window){
  var userAgent = window.navigator.userAgent;
  var isBuggySafari = /(iPhone|iPod|iPad).+AppleWebKit/i.test(userAgent) && (function() {
    var iOSversion = userAgent.match(/OS (\d)/);
    return iOSversion && iOSversion.length >1 && parseInt(iOSversion[1]) < 8;
  })();
  
  if (isBuggySafari) {
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    var viewportHeight = window.innerHeight;
    
    var css = ".viewport-height {height: " + viewportHeight + "px;} ";
    css    += ".viewport-three-quarter-height {height: " + (viewportHeight * 0.75) + "px;} ";
    css    += ".viewport-half-height {height: " + (viewportHeight * 0.5) + "px} ";
    css    += ".viewport-quarter-height {height: " + (viewportHeight * 0.25) + "px;} ";
    css    += ".viewport-two-thirds-height {height: " + (viewportHeight * 0.66) + "px;} ";
    css    += ".viewport-one-third-height {height: " + (viewportHeight * 0.33) + "px;} ";

    style.type = 'text/css';
    
    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
  }
  
})(document, window);
