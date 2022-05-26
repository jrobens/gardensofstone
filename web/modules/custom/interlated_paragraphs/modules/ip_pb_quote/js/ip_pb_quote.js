(($, Drupal, once) => {

  'use strict';
  const issuerTarget = document.getElementById('edit-field-para-issuer-information-0-subform-field-bond-issuer-wrapper');
  const observerConfig = {attributes: false, childList: true, subtree: true};


  Drupal.behaviors.ipPbQuote = {
    attach(context, group_info) {
      once('cbi-bond-country-edit-2', '#node-bond-edit-form', context).forEach((e) => {

      })
    }

  }
})(jQuery, Drupal, once);

// https://medium.com/@mandy.michael/resize-text-to-fit-the-parent-with-variable-font-width-axis-16921b6687ae
