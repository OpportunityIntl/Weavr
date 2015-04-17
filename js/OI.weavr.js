var OI = OI || {};

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
