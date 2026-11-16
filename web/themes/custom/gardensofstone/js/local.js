(function ($, Drupal) {
  Drupal.behaviors.gardensofstone = {
    attach: function (context, settings) {
      // Native HTML5 <details>/<summary> accordion used for journey stops (pure CSS)
      
      // Copy text button functionality
      $(context).find('.copy-btn').on('click', function () {
        var $button = $(this);
        var copyTarget = $button.data('copy-target');
        var $sampleText = $('.sample_submission[data-sample="' + copyTarget + '"]');
        
        if ($sampleText.length) {
          var textToCopy = $sampleText.text().trim();
          
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(textToCopy).then(function () {
              copySuccess($button);
            }).catch(function (err) {
              fallbackCopy(textToCopy, $button);
            });
          } else {
            fallbackCopy(textToCopy, $button);
          }
        }
      });
    }
  };
  
  function copySuccess($button) {
    $button.addClass('copied').text('Copied!');
    setTimeout(function () {
      $button.removeClass('copied').text('Copy text');
    }, 2000);
  }
  
  function fallbackCopy(text, $button) {
    var $temp = $('<textarea>');
    $('body').append($temp);
    $temp.val(text).select();
    document.execCommand('copy');
    $temp.remove();
    copySuccess($button);
  }
})(jQuery, Drupal);
