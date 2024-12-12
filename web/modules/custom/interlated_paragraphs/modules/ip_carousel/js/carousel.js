'use strict';

(function (Drupal, drupalSettings, once) {
  Drupal.behaviors.ipParagraphsContainer = {
    attach: function (context, settings) {
      const carousels = bulmaCarousel.attach('.paragraph--type--carousel .field--name-field-pbcarousel-item',
        {autoplay: true, loop: false});

      // Loop on each carousel initialized
      for (var i = 0; i < carousels.length; i++) {
        // Add listener to  event
        carousels[i].on('before:show', state => {
          console.log(state);
        });
      }

// Access to bulmaCarousel instance of an element
      var element = document.querySelector('#my-element');
      if (element && element.bulmaCarousel) {
        // bulmaCarousel instance is available as element.bulmaCarousel
        element.bulmaCarousel.on('before-show', function (state) {
          console.log(state);
        });
      }
    }
  }
})(Drupal, drupalSettings, once);
