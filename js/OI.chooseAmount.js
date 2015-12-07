var ChooseAmountModule = function(elem, target, options) {
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
  
  function getAmount(input) {
    var value = Number(_this.sanitizeNumber(input.val()));
    var amount = value.toFixed(value % 1 !== 0 ? options.decimals : 0);
    return amount > 0 ? amount : null;
  }
  
  this.sanitizeNumber = function(value) {
    return value.replace(/[^0-9\.]/g, '');
  };
  
  this.formatNumber = function(value) {
    var re = '\\d(?=(\\d{3})+' + (options.decimals > 0 ? '\\.' : '$') + ')';
    return String(value).replace(new RegExp(re, 'g'), '$&,');
  };
  
  customAmountInput.on('focus', function() {
    $(this).addClass('selected');
    radios.filter(':checked').prop('checked', false);
    
    updateTarget(getAmount($(this)));
  });
  
  customAmountInput.on('keyup', function() {
    updateTarget(getAmount($(this)));
  });
  
  customAmountInput.on('change', function() {
    var amount = getAmount($(this));
    updateTarget(amount);
    $(this).val(amount > 0 ? '$' + _this.formatNumber(amount) : '');
  });
  
  radios.on('click', function() {
    customAmountInput.removeClass('selected');
    updateTarget(_this.sanitizeNumber($(this).val()));
  });
};
