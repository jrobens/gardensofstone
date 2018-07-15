<?php
/**
 * @file
 * home_feature.features.inc
 */

/**
 * Implements hook_node_info().
 */
function home_feature_node_info() {
  $items = array(
    'home' => array(
      'name' => t('home'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}

/**
 * Implements hook_paragraphs_info().
 */
function home_feature_paragraphs_info() {
  $items = array(
    'heading' => array(
      'name' => 'Heading',
      'bundle' => 'heading',
      'locked' => '1',
    ),
    'image' => array(
      'name' => 'Image',
      'bundle' => 'image',
      'locked' => '1',
    ),
    'image_gallery' => array(
      'name' => 'Image Gallery',
      'bundle' => 'image_gallery',
      'locked' => '1',
    ),
    'image_story' => array(
      'name' => 'Image Story',
      'bundle' => 'image_story',
      'locked' => '1',
    ),
    'slideshow' => array(
      'name' => 'Slideshow',
      'bundle' => 'slideshow',
      'locked' => '1',
    ),
    'statement' => array(
      'name' => 'Statement',
      'bundle' => 'statement',
      'locked' => '1',
    ),
    'text' => array(
      'name' => 'Text',
      'bundle' => 'text',
      'locked' => '1',
    ),
    'video' => array(
      'name' => 'Video',
      'bundle' => 'video',
      'locked' => '1',
    ),
  );
  return $items;
}
