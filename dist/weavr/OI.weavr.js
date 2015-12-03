/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-backgroundsize-flexbox-opacity-rgba-csstransforms-video-inlinesvg-svg-teststyles-testprop-testallprops-prefixes-domprefixes-css_calc-css_vhunit-css_vmaxunit-css_vminunit-css_vwunit
 */
;window.Modernizr=function(a,b,c){function z(a){i.cssText=a}function A(a,b){return z(l.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&i[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.8.3",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l=" -webkit- -moz- -o- -ms- ".split(" "),m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={svg:"http://www.w3.org/2000/svg"},q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var h,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:g+(d+1),l.appendChild(j);return h=["&#173;",'<style id="s',g,'">',a,"</style>"].join(""),l.id=g,(m?l:n).innerHTML+=h,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=f.style.overflow,f.style.overflow="hidden",f.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),f.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.flexbox=function(){return F("flexWrap")},q.rgba=function(){return z("background-color:rgba(150,255,150,.5)"),C(i.backgroundColor,"rgba")},q.backgroundsize=function(){return F("backgroundSize")},q.opacity=function(){return A("opacity:.55"),/^0.55$/.test(i.opacity)},q.csstransforms=function(){return!!F("transform")},q.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},q.svg=function(){return!!b.createElementNS&&!!b.createElementNS(p.svg,"svg").createSVGRect},q.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==p.svg};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),h=j=null,e._version=d,e._prefixes=l,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e}(this,this.document),Modernizr.addTest("csscalc",function(){var a="width:",b="calc(10px);",c=document.createElement("div");return c.style.cssText=a+Modernizr._prefixes.join(b+a),!!c.style.length}),Modernizr.addTest("cssvhunit",function(){var a;return Modernizr.testStyles("#modernizr { height: 50vh; }",function(b,c){var d=parseInt(window.innerHeight/2,10),e=parseInt((window.getComputedStyle?getComputedStyle(b,null):b.currentStyle).height,10);a=e==d}),a}),Modernizr.addTest("cssvmaxunit",function(){var a;return Modernizr.testStyles("#modernizr { width: 50vmax; }",function(b,c){var d=window.innerWidth/100,e=window.innerHeight/100,f=parseInt((window.getComputedStyle?getComputedStyle(b,null):b.currentStyle).width,10);a=parseInt(Math.max(d,e)*50,10)==f}),a}),Modernizr.addTest("cssvminunit",function(){var a;return Modernizr.testStyles("#modernizr { width: 50vmin; }",function(b,c){var d=window.innerWidth/100,e=window.innerHeight/100,f=parseInt((window.getComputedStyle?getComputedStyle(b,null):b.currentStyle).width,10);a=parseInt(Math.min(d,e)*50,10)==f}),a}),Modernizr.addTest("cssvwunit",function(){var a;return Modernizr.testStyles("#modernizr { width: 50vw; }",function(b,c){var d=parseInt(window.innerWidth/2,10),e=parseInt((window.getComputedStyle?getComputedStyle(b,null):b.currentStyle).width,10);a=e==d}),a});
;var Tooltip = function(elem, opts) {
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
;var OI = OI || {};

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
;var ChooseAmountModule = function(elem, target, options) {
  var _this = this;
  var radios = elem.find('input[type="radio"]');
  var customAmountInput = elem.find('input[type="text"].custom-amount');
  
  options = $.extend({
    decimals: 0,
    callback: function() {}
  }, options);
  
  function updateTarget(amount) {
    target.val(amount);
    options.callback.call(_this, amount);
  }
  
  this.sanitizeNumber = function(value) {
    return value.replace(/[^0-9\.]/g, '');
  };
  
  this.formatNumber = function(value) {
    var re = '\\d(?=(\\d{3})+' + (options.decimals > 0 ? '\\.' : '$') + ')';
    return value.replace(new RegExp(re, 'g'), '$&,');
  };
  
  customAmountInput.on('focus', function() {
    $(this).addClass('selected');
    radios.filter(':checked').prop('checked', false);
    updateTarget(_this.sanitizeNumber($(this).val()));
  });
  
  customAmountInput.on('change', function() {
    amount = Number(_this.sanitizeNumber($(this).val())).toFixed(options.decimals);
    if (amount > 0) {
      updateTarget(amount);
      $(this).val('$' + _this.formatNumber(amount));
    } else {
      updateTarget(null);
      $(this).val('');
    }
  });
  
  radios.on('click', function() {
    customAmountInput.removeClass('selected');
    amount = $(this).val();
    updateTarget(_this.sanitizeNumber($(this).val()));
  });
};
