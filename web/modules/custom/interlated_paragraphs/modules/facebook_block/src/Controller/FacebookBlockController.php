<?php

namespace Drupal\facebook_block\Controller;

use Drupal\examples\Utility\DescriptionTemplateTrait;

/**
 * Controller routines for block example routes.
 */
class FacebookBlockController {
  use DescriptionTemplateTrait;

  /**
   * {@inheritdoc}
   */
  protected function getModuleName() {
    return 'facebook_block';
  }

}
