# Hero Campaign Paragraph Bundle

## Overview

The `ip_pbhero_campaign` module provides a Hero Campaign paragraph type for displaying campaign intro content on front pages.

## Installation

1. Enable the module:
   ```bash
   drush en ip_pbhero_campaign
   ```

2. Clear cache:
   ```bash
   drush cr
   ```

## Fields

- **field_pbhero_campaign_tag**: Taxonomy term reference to campaign terms
- **field_pbhero_campaign_headline**: Main headline text (string)
- **field_pbhero_campaign_intro**: Long-form introduction text (text_long)
- **field_pbhero_campaign_primary_btn**: Primary button text (link)
- **field_pbhero_campaign_primary_btn_url**: Primary button URL (string)
- **field_pbhero_campaign_ghost_btn**: Ghost button text (link)
- **field_pbhero_campaign_ghost_btn_url**: Ghost button URL (string)
- **field_pbhero_campaign_scroll_cue**: Checkbox to show/hide scroll cue (boolean)
- **field_pbhero_campaign_scroll_cue_url**: Scroll cue URL (string)

## Styling

The module uses a linear gradient background matching the reference design:
- Background: `linear-gradient(180deg, rgba(15,22,17,0.78) 0%, rgba(15,22,17,0.6) 55%, rgba(15,22,17,0.82) 100%)`
- Content wrapper with max-width: 1080px, margin: 0 auto, padding: 0 28px
- Headline: `clamp(2.1rem, 4.4vw, 3.4rem)` with line-height 1.1
- Primary button: Background `#8C3B2E` (clay) with white text
- Ghost button: Border `1.5px solid rgba(247,243,234,0.7)` with white text
- Scroll cue: `margin-top: 44px` with bottom border

## Template

`templates/paragraph/paragraph--hero-campaign.html.twig`

## SCSS Source

`styles/ip_pbhero_campaign.scss`

## Compilation

SCSS is compiled to CSS in the same directory:
- Source: `styles/ip_pbhero_campaign.scss`
- CSS: `styles/ip_pbhero_campaign.css`

## Usage

1. Add the "Hero Campaign" paragraph type to your paragraph field
2. Configure the fields with your campaign content
3. The styling will be automatically applied via the library

## Files

- `config/optional/` - Configuration files for the paragraph type and fields
- `templates/` - Twig template for rendering
- `styles/` - SCSS source and compiled CSS
- `ip_pbhero_campaign.info.yml` - Module info
- `ip_pbhero_campaign.libraries.yml` - Library definition
- `ip_pbhero_campaign.module` - Module callbacks
- `README.md` - This file
