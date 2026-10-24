---
name: drupal
description: Use for Drupal CMS development, troubleshooting, theming, module development, and Composer-based project management. Use when working with Drupal 8-11 codebases, Twig templates,_entity queries, view displays, or Drush commands. Use ONLY when the task involves Drupal-specific functionality, configuration, or debugging.
---

# Drupal Development Skill

## Overview

This skill provides guidance for working with Drupal CMS codebases, including theming, module development, entity management, and configuration.

## Key Areas

### Theming & Templates

- **Twig Templates**: Located in `web/themes/custom/[theme]/templates/`
  - Paragraph templates: `paragraph--*.html.twig`
  - Field templates: `field--*.html.twig`
  - Page templates: `page.html.twig`, `page--*.html.twig`
  - Node templates: `node--*.html.twig`
  
- **Template Variables**: Always check available variables - common ones include:
  - `content`: Renderable array of all field content
  - `paragraph`: Full paragraph entity (for paragraph templates)
  - `node`: Full node entity (for node templates)
  - `attributes`: HTML attributes element
  - `view_mode`: Current view mode

- **Best Practices**:
  - Use `|clean_class` filter for CSS classes
  - Check if content exists before rendering: `{% if content.field_name and content.field_name[0] %}`
  - Use Twig's `dump()` for debugging (disable in production)

### Entity System

- **Load Entities**:
  ```php
  $storage = \Drupal::entityTypeManager()->getStorage('node');
  $node = $storage->load($nid);
  $nodes = $storage->loadMultiple([1, 2, 3]);
  ```

- **Query Entities**:
  ```php
  $storage = \Drupal::entityTypeManager()->getStorage('paragraph');
  $query = $storage->getQuery();
  $query->condition('type', 'journey_stop');
  $query->condition('field_pbjourney_label', 'Start');
  $ids = $query->execute();
  ```

- **Entity Reference Fields**:
  - `entity_reference`: References existing entities
  - `entity_reference_revisions`: References revisions (allows inline editing)
  - Access via: `$entity->get('field_name')->referencedEntities()`

### Field Formatters & View Displays

- **View Display Config**: `core.entity_view_display.{entity_type}.{bundle}.{mode}.yml`
  - Controls how fields render in different view modes
  - Key formatters:
    - `entity_reference_revisions_entity_view`: Renders referenced entities' view modes
    - `entity_reference_label`: Shows entity labels only
    - `file_url_plain`: Returns file URL as string
    - `text_default`: Renders text fields with format

- **Common Issues**:
  - Memory exhaustion: Check for circular references or infinite loops in entity rendering
  - Wrong formatter: Ensure view display uses correct formatter for field type
  - Missing view mode: Verify referenced entities have a view mode configured

### Debugging

- **Drush Commands**:
  ```bash
  drush cr                    # Cache rebuild
  drush php:eval '...'        # Execute PHP code
  drush config:export         # Export config
  drush config:import         # Import config
  ```

- **Debugging Twig**:
  - Enable Twig debug in `services.yml`: `twig.config: { debug: true }`
  - Use `{{ dump(variable) }}` in templates
  - Check browser dev tools for template name comments

- **Debugging PHP**:
  - `kint($variable)` if Devel module enabled
  - `watchdog('debug', print_r($variable, TRUE));`
  - Use Xdebug for step-through debugging

### Common Tasks

**Add new paragraph type:**
1. Create paragraph type in UI or config
2. Define fields and view modes
3. Create Twig templates in theme
4. Import config with `drush config:import`

**Troubleshoot memory exhaustion:**
1. Check for infinite loops in Twig templates
2. Verify entity references aren't circular
3. Reduce memory limit from CLI to see errors earlier
4. Disable complex formatters to isolate issue

**Custom field formatter:**
1. Create module with `src/Plugin/Field/FieldFormatter/`
2. Extend `FormatterBase`
3. Implement `viewElements()`
4. Register in `my_module.services.yml`

## File Paths

- Core: `web/core/`
- Modules: `web/modules/contrib/`, `web/modules/custom/`
- Themes: `web/themes/custom/`
- Config: `sec/cfg/sync/`
- Files: `web/sites/default/files/`

## Tips

- Always clear caches after config changes: `drush cr`
- Use `drush updb` after code changes affecting database
- Theme preprocess functions in `theme.theme` file
- Check twig template suggestions in comments
- View mode settings affect which template renders
- Entity reference revisions need both `target_id` and `target_revision_id`
