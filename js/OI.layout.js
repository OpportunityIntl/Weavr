var OI = OI || {};

OI.layout = {
  init: function() {
    OI.layout.overlayHeightFix();
    
    if (!Modernizr.csstransforms) {
      OI.layout.verticalAlignCenterPolyfill();
    }
    
    $(window).resize(function() {
      OI.layout.overlayHeightFix();
    });
  },
  
  overlayHeightFix: function() {
    $('.content-overlay').each(function() {
      var contentHeight = $(this).outerHeight(true);
      var containerHeight = $(this).parent().height();
      if (contentHeight > containerHeight) {
        $(this).parent().css('min-height', contentHeight);
      }
    });
  },
  
  verticalAlignCenterPolyfill: function() {
    $('.content-overlay.middle').each(function() {
      var contentHeight = $(this).outerHeight(true);
      $(this).css('margin-top', -contentHeight / 2);
    });
  }
};

OI.layout.init();
