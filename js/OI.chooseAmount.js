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
  
  function sanitizeNumber(value) {
    return value.replace(/[^0-9\.]/g, '');
  }
  
  function formatNumber(value) {
    var re = '\\d(?=(\\d{3})+' + (options.decimals > 0 ? '\\.' : '$') + ')';
    return value.replace(new RegExp(re, 'g'), '$&,');
  }
  
  customAmountInput.on('focus', function() {
    $(this).addClass('selected');
    radios.filter(':checked').prop('checked', false);
    updateTarget(sanitizeNumber($(this).val()));
  });
  
  customAmountInput.on('change', function() {
    amount = Number(sanitizeNumber($(this).val())).toFixed(options.decimals);
    if (amount > 0) {
      updateTarget(amount);
      $(this).val('$' + formatNumber(amount));
    } else {
      updateTarget(null);
      $(this).val('');
    }
  });
  
  radios.on('click', function() {
    customAmountInput.removeClass('selected');
    amount = $(this).val();
    updateTarget(sanitizeNumber($(this).val()));
  });
};
