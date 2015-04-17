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
;var OI = OI || {};

OI.utils = {
  
  popover : function (elem, pos, msg) {
    var pop = $('<div class="popover ' + pos + '"><div>' + msg + '</div></div>');
    if (pos == 'top') {
      elem.before(pop);
    } else if (pos == 'bottom') {
      elem.after(pop);
    }
    
    pop.children().delay(100).fadeIn(500).delay(4000).fadeOut(500,function(){
      pop.remove();
    });
    
    elem.focusin(function(){
      pop.remove();
    });
  },
  
  limitToRegex : function(input,regex) {
    input.keypress(function(e){
      var k = e.which;
      var keychar = String.fromCharCode(k);
      if ([0,8,13,32].indexOf(k) != -1 || regex.test(keychar)) {
        return true;
      } else {
        return false;
      }
    });
  },
  
  setupSelect : function(elem) {
    elem.focus(function(){
      elem.parents('.select').addClass('focus');
    }).blur(function(){
      elem.parents('.select').removeClass('focus');
    });
    elem.change(function(){
      if (elem.val() === '') {
        elem.addClass('select-placeholder');
      } else {
        elem.removeClass('select-placeholder');
      }
    });
    
    // Add placeholder class on init if value is blank
    if (elem.val() === '') {
      elem.addClass('select-placeholder');
    }
  },
  
  validateEmail : function(email) {
		var re = /^[0-9a-zA-Z][-.+_a-zA-Z0-9]*@([0-9a-zA-Z][-._0-9a-zA-Z]*\.)+[a-zA-Z]{2,6}$/;
		return re.test(email);
	},
  
  valign: function(selector, children) {
    
    selector = typeof selector !== 'undefined' ?  selector : $('body');
    children = typeof children !== 'undefined' ? children : true;
    
    if (typeof OI.utils.isDesktop === 'undefined') OI.utils.detectScreenSize();
    
    var obj;
    
    if (OI.utils.isDesktop || OI.utils.isNetbook) obj = children ? $('.valign', selector) : selector;
    if (OI.utils.isTablet) obj = children ? $('.t-valign', selector) : selector;
    if (OI.utils.isMobile) obj = children ? $('.m-valign', selector) : selector;
    
    obj.each(function(){
      $(this).imagesLoaded(function(){
        if (Modernizr.csstransforms) {
          $(this).css({
            'transform': 'translateY(-' + $(this).height() / 2 + 'px)',
            '-webkit-transform': 'translateY(-' + $(this).height() / 2 + 'px)',
            '-moz-transform': 'translateY(-' + $(this).height() / 2 + 'px)',
            '-ms-transform': 'translateY(-' + $(this).height() / 2 + 'px)',
            'opacity': 1
          });
        } else {
          $('section').css('overflow', 'hidden');
          $(this).css({
            'margin-top': -$(this).height() / 2
          });
        }
      });
    });
  },
  
  detectScreenSize: function() {
    OI.utils.isDesktop = false;
    OI.utils.isTablet = false;
    OI.utils.isMobile = false;
    var windowWidth = $(window).width();
    if (windowWidth >= 1024) {
      OI.utils.isDesktop = true;
      //console.log('Is desktop');
    } else if (windowWidth < 1024 && windowWidth >= 960) {
      OI.utils.isNetbook = true;
      //console.log('Is netbook');
    } else if (windowWidth < 960 && windowWidth > 480) {
      OI.utils.isTablet = true;
      //console.log('Is tablet');
    } else if (windowWidth <= 480) {
      OI.utils.isMobile = true;
      //console.log('Is mobile');
    }
  },
  
  handleWideScreens: function(element, ratio, className) {
    className = (typeof className != 'undefined') ? className : 'widescreen';
    OI.utils.determineWindowRatio(element, ratio, className);
    $(window).resize(function(){
      OI.utils.determineWindowRatio(element, ratio, className);
    });
  },
  
  determineWindowRatio: function(element, ratio, className) {
    var windowRatio = $(window).width() / $(window).height();
    if (windowRatio > ratio) {
      element.addClass(className);
    } else {
      element.removeClass(className);
    }
  },
};

// set up select input placeholder styling
$('.select select').each(function(){
	OI.utils.setupSelect($(this));
});

// set up tooltips
$('[data-tooltip]').each(function() {
  new Tooltip($(this));
});

// set up character restrictions on inputs (does not work on Android)
$('[data-pattern]').each(function(){
	var pattern = $(this).data('pattern');
	var regex;
	if (pattern == 'numeric') {
		regex = /[0-9]/;
	} else if (pattern == 'alpha') {
		regex = /[a-zA-Z]/;
	} else if (pattern == 'alphanumeric') {
		regex = /[a-zA-Z0-9]/;
	} else {
		regex = new RegExp(pattern);
	}
	OI.utils.limitToRegex($(this),regex);
});
