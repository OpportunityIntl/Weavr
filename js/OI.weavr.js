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
	}
};

// set up select input placeholder styling
$('.select select').each(function(){
	OI.utils.setupSelect($(this));
});

// set up tooltips
$('[data-tooltip]').each(function() {
  new Tooltip($(this));
});

// disable links styled as buttons with .disabled class
$('body').on('click.disabledButton', 'a.btn.disabled', function() {
  return false;
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
