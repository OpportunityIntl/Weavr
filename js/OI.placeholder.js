var OI = OI || {};

OI.placeholder = {
  init: function() {
    OI.placeholder.setup();
    
    $('body').on('focus', '[placeholder]', function(){
      var placeholderText = $(this).attr('placeholder');
      var currentValue = $(this).val();
      if (currentValue === placeholderText || currentValue === '') {
        if ($(this).attr('type') !== 'password') {
          $(this).val('').removeClass('ie-placeholder');
        }
      }
    }).on('blur', '[placeholder]', function(){
      var placeholderText = $(this).attr('placeholder');
      var currentValue = $(this).val();
      if (currentValue === '') {
        if ($(this).attr('type') !== 'password') {
          $(this).val(placeholderText).addClass('ie-placeholder');
        }
      }
    });
    
    $('input[type="submit"]').click(function(){
      $(this).parents('form').find('[placeholder]').each(function() {
        var placeholderText = $(this).attr('placeholder');
        var currentValue = $(this).val();
        if ($(this).attr('type') === 'password') {
          $(this).show();
          $(this).prev('input').hide();
        } else {
          if (currentValue == placeholderText) {
            $(this).val('');
          }
        }
      });
    });
  },
  
  setup: function() {
    $('[placeholder]').each(function(){
      var placeholderText = $(this).attr('placeholder');
      var currentValue = $(this).val();
      if (currentValue === '') {
        if ($(this).attr('type') == 'password') {
          OI.placeholder.setupPasswordInput($(this), placeholderText);
        } else {
          $(this).val(placeholderText).addClass('ie-placeholder');
        }
      }
    });
  },
  
  reset: function() {
    $('[placeholder]').each(function(){
      $(this).blur();
    });
  },
  
  setupPasswordInput: function(input, placeholderText) {
    $newInput = $('<input type="text"]>');
    $newInput.attr('class', input.attr('class'))
      .attr('id', input.attr('id'))
      .val(placeholderText)
      .addClass('ie-placeholder');
    
    input.hide();
    input.before($newInput);
    
    $newInput.focus(function() {
      $(this).hide();
      input.show().focus();
    });
    
    input.blur(function() {
      if ($(this).val() === '') {
        $(this).hide();
        $newInput.show();
      }
    });
  }
};

OI.placeholder.init();
