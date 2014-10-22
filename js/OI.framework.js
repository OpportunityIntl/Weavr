var OI = OI || {};

OI.utils = {
  tooltip : function (elem, pos, msg) {
    var tip = $('<div class="tooltip ' + pos + '"><div>' + msg + '</div></div>');
    if (pos == 'top') {
      elem.before(tip);
    } else if (pos == 'bottom') {
      elem.after(tip);
    }
    
    elem.hover(function(){
      tip.children().stop(true,true).delay(250).fadeIn(500);
    },function(){
      tip.children().stop(true,true).delay(250).fadeOut(500);
    });
  },
  
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
    })
    elem.change(function(){
      if (elem.val() === '') {
        elem.addClass('select-placeholder');
      } else {
        elem.removeClass('select-placeholder');
      }
    }).change();
  },
  
  validateEmail : function(email) {
		var re = /^[0-9a-zA-Z][-.+_a-zA-Z0-9]*@([0-9a-zA-Z][-._0-9a-zA-Z]*\.)+[a-zA-Z]{2,6}$/;
		return re.test(email);
	},
  
  valign: function(selector, children) {
    
    selector = typeof selector !== 'undefined' ?  selector : $('body');
    children = typeof children !== 'undefined' ? children : true;
    
    if (typeof OI.child.isDesktop === 'undefined') OI.utils.detectScreenSize();
    
    if (OI.child.isDesktop || OI.child.isNetbook) var obj = children ? $('.valign', selector) : selector;
    if (OI.child.isTablet) var obj = children ? $('.t-valign', selector) : selector;
    if (OI.child.isMobile) var obj = children ? $('.m-valign', selector) : selector;
    
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
    })
  },
  
  detectScreenSize: function() {
    console.log('Detecting screen size');
    
    OI.child.isDesktop = false;
    OI.child.isTablet = false;
    OI.child.isMobile = false;
    var windowWidth = OI.child.windowWidth;
    if (windowWidth >= 1024) {
      OI.child.isDesktop = true;
      //console.log('Is desktop');
    } else if (windowWidth < 1024 && windowWidth >= 960) {
      OI.child.isNetbook = true;
      //console.log('Is netbook');
    } else if (windowWidth < 960 && windowWidth > 480) {
      OI.child.isTablet = true;
      //console.log('Is tablet');
    } else if (windowWidth <= 480) {
      OI.child.isMobile = true;
      //console.log('Is mobile');
    }
  },
}

// set up select input placeholder styling
$('.select select').each(function(){
	OI.utils.setupSelect($(this));
});

// set up tooltips
$('[data-tooltip]').each(function(){
	var pos = $(this).data('tooltip-position') !== undefined ? $(this).data('tooltip-position') : 'top';
	OI.utils.tooltip($(this), pos, $(this).data('tooltip'));
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
