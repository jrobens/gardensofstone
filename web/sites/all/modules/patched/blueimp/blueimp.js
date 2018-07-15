(function ($) {

  /**
   * @file
   * Javascript support files.
   *
   */

  Drupal.behaviors.blueimp = {


    attach: function (context, settings) {
      // Read URL paramters
      // Create modal
      var carouselContainer;
      var blueImpSelector = Drupal.settings.blueimp.trigger;

      blueImpSelector.split("\n").forEach(function (it) {
        $(it).parent().attr('id', "blueimp-gallery-carousel-container");
      });

      // field - name - field - slideshow
      blueimp_create_modal('#blueimp-image-carousel', Drupal.settings.blueimp);

      blueImpSelector.split("\n").forEach(function (it) {
        blueImpSetup(it);
      });

      // field-name-field-images-para-slideshow
      //  var trigger = Drupal.settings.blueimp.trigger;
      // var module_path = Drupal.settings.blueimp.module_path;


    }
  };

  /**
   *
   * @param selector
   */
  function blueImpSetup(selector) {
    blueimp.Gallery(
      $(selector).find("a"),
      {
        container: '#blueimp-image-carousel',
        carousel: true,
        onslide: function (index, slide) {
          var sourceEl = jQuery(selector).find('a')[index];
          var text = jQuery(sourceEl).data("description");
          var blueImp = $('#blueimp-image-carousel').find('.slides');
          blueImp.find('.description').remove();
          if (text) {
            blueImp.append('<div class="description">' + text + '</>');
            //   var contentCleaned = text.replace(/(\r\n\t|\n|\r\t)/gm, "");
            //  blueImp.append('<style type="text/css">#blueimp-image-carousel .slides::after {content:"' + contentCleaned + '"}</style>')
          }
        }
      }
    );
    /*
        $('#blueimp-image-carousel').on('slide', function (event, index, slide) {
          var sourceEl = jQuery(Drupal.settings.blueimp.trigger).find('a')[index];
          var text = jQuery(sourceEl).data("description");
          var blueImp = $('#blueimp-image-carousel').find('.slides');
          blueImp.find('.description').remove();
          if (text) {
            blueImp.append('<div class="description">' + text + '</>');
          }
        });
        */
  }

  function blueimp_create_modal(id, p) {
    // $('body').append('<div id="blueimp-gallery-carousel" class="blueimp-gallery blueimp-gallery-carousel">');
    /*
  if ( p.startControls ) { $('#blueimp-gallery-carousel').addClass( "blueimp-gallery-controls" ) };
  if ( p.carousel ) { $('#blueimp-gallery-carousel').attr( "data-carousel", "true" ) };
  if ( !p.continuous ) { $('#blueimp-gallery-carousel').attr( "data-continuous", "false" ) };
  if ( !p.hidePageScrollbars ) { $('#blueimp-gallery-carousel').attr( "data-hidePageScrollbars", "false" ) };
  if ( !p.startSlideshow ) { $('#blueimp-gallery-carousel').attr( "data-startSlideshow", "true" ) };
  */
    //$('#blueimp-gallery-carousel').attr( "data-slideshowInterval", p.slideshowInterval );
    //$('#blueimp-gallery-carousel').attr( "data-transitionSpeed", p.transitionSpeed );
    /* $('#blueimp-gallery-carousel').append('<div class="slides" />');
     $('#blueimp-gallery-carousel').append('<h3 class="title" />');
     $('#blueimp-gallery-carousel').append('<a class="prev">‹</a>');
     $('#blueimp-gallery-carousel').append('<a class="next">›</a>');
    // $('#blueimp-gallery-carousel').append('<a class="close">x</a>');
     $('#blueimp-gallery-carousel').append('<a class="play-pause">›</a>');
     $('#blueimp-gallery-carousel').append('<ol class="indicator"></ol>');
    */

    $('#blueimp-gallery-carousel-container').append('<div id="blueimp-image-carousel" class="blueimp-gallery blueimp-gallery-carousel">');
    $('#blueimp-image-carousel').append('<div class="slides"></div>');
    $('#blueimp-image-carousel').append('<h3 class="title"></h3>');
    $('#blueimp-image-carousel').append(' <a class="prev">‹</a>');
    $('#blueimp-image-carousel').append('<a class="next">›</a>');
    $('#blueimp-image-carousel').append('<a class="play-pause"></a>');

  }

}(jQuery));

/*
<div id="blueimp-gallery-carousel" class="blueimp-gallery blueimp-gallery-carousel">
    <div class="slides"></div>
    <h3 class="title"></h3>
    <a class="prev">‹</a>
    <a class="next">›</a>
    <a class="play-pause"></a>
    <ol class="indicator"></ol>
</div>

<script>
blueimp.Gallery(
    document.getElementById('links').getElementsByTagName('a'),
    {
        container: '#blueimp-gallery-carousel',
        carousel: true
    }
);
</script>

 */
