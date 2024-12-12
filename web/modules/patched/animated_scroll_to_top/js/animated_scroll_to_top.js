(function ($, Drupal) {
  Drupal.behaviors.animated_scroll_to_top = {
    attach: function (context, drupalSettings) {
      $(once('animated_scroll_to_top', 'body', context)).append('<a href="#" class="scrollup">' + Drupal.t('Scroll') + '</a>');
      let position = drupalSettings.animated_scroll_to_top_position;
      let button_bg_color = drupalSettings.animated_scroll_to_top_button_bg_color;
      let hover_button_bg_color = drupalSettings.animated_scroll_to_top_button_hover_bg_color;
      let button_height = drupalSettings.animated_scroll_to_top_button_height;
      let button_width = drupalSettings.animated_scroll_to_top_button_width;
      let button_position_bottom = drupalSettings.animated_scroll_to_top_button_bottom + "px";
      let button_position_left_right = drupalSettings.animated_scroll_to_top_button_position + "px";
      let $scrollup = $('.scrollup', context);
      if (position === 1) {
        $scrollup.css({"left": "100px", "background-color": button_bg_color});
        $scrollup.css({
          "left": button_position_left_right,
          "background-color": button_bg_color,
          "height": button_height,
          "width": button_width,
          "bottom": button_position_bottom
        });
      } else {
        $scrollup.css({"right": "100px", "background-color": button_bg_color});
        $scrollup.css({
          "right": button_position_left_right,
          "background-color": button_bg_color,
          "height": button_height,
          "width": button_width,
          "bottom": button_position_bottom
        });
      }
      $scrollup.hover(function () {
        $(this).css("background-color", hover_button_bg_color);
      }, function () {
        $(this).css("background-color", button_bg_color);
      });
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $scrollup.fadeIn();
        } else {
          $scrollup.fadeOut();
        }
      });
      $scrollup.click(function () {
        $("html, body").animate({
          scrollTop: 0
        }, 300);
        return false;
      });
    }
  };
})(jQuery, Drupal);
