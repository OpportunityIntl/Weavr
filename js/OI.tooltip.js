var Tooltip = function(elem, opts) {
  // cache this
  var _this = this;
  
  // make elem a public property
  this.elem = elem;
  
  // default options
  var options = {
    position: _this.elem.data('tooltip-position') || 'top',
    message: _this.elem.data('tooltip'),
    max: _this.elem.data('tooltip-width') || 300,
    style: _this.elem.data('tooltip-style') || 'purple',
    zindex: _this.elem.data('tooltip-zindex') || null
  };
  
  // extend default options with 'opts' argument
  $.extend(options, opts);
  
  // create jQuery object of tooltip
  this.tip = $('<div class="tooltip ' + options.position + '"><div class="tooltip-container ' + options.style + '"><div class="tooltip-content">' + options.message + '</div></div></div>');
  
  if (options.zindex) {
    _this.tip.css('z-index', options.zindex);
  }
  
  // append tooltip to body
  $('body').append(this.tip);
  
  var tipContent = _this.tip.find('.tooltip-content');
  var tipContainer = _this.tip.find('.tooltip-container');
  
  // method to position the tooltip
  this.setPosition = function() {
    var elemOffsetX = elem.offset().left;
    var elemOffsetY = elem.offset().top;
    var elemWidth = elem.outerWidth();
    var elemHeight = elem.outerHeight();
    
    _this.tip.css({
      top: elem.offset().top + (options.position === 'bottom' ? elemHeight : 0) + 'px',
      left: Math.round((elem.offset().left + (elemWidth / 2))) + 'px',
      position: 'absolute'
    });
    
    // return _this to allow for chaining
    return _this;
  };
  
  // method to set the width of the tooltip
  this.setWidth = function() {
    // make tooltip 'visible' to browser so we can get the content width
    _this.tip.css({'display': 'block', 'visibility': 'hidden'});
    
    // reset tooltip width so we can get the natural width of the content
    tipContainer.css('width', '');
    var naturalWidth = tipContent.outerWidth();
    
    // check if options.max is a percentage or integer
    // if it's a percentage, set the max width to that percentage of the element
    var maxWidth = (typeof options.max === 'string' && options.max.slice(-1) === '%') ? (_this.elem.outerWidth() * (options.max.slice(0, -1) / 100)) : options.max;
    if (naturalWidth > maxWidth) {
      tipContainer.css('width', maxWidth);
    } else {
      tipContainer.css('width', naturalWidth);
    }
    
    // hide the tooltip again
    _this.tip.css({'display': 'none', 'visibility': 'visible'});
    
    // return _this to allow for chaining
    return _this;
  };
  
  // method to show the tooltip
  this.show = function() {
    _this.setPosition().setWidth();
    _this.tip.stop().fadeIn(500);
    
    // return _this to allow for chaining
    return _this;
  };
  
  // method to hide the tooltip
  this.hide = function() {
    _this.tip.stop().fadeOut(500);
    
    // return _this to allow for chaining
    return _this;
  };
  
  // attach event handlers when the tooltip object is instantiated
  this.elem.hover(function() {
    _this.show();
  }, function() {
    _this.hide();
  });
  this.tip.hover(function() {
    _this.show();
  }, function() {
    _this.hide();
  });
  
};
