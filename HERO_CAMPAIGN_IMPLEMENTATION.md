# Hero Campaign Paragraph Component - Implementation Summary

## ✅ COMPLETED

### 1. Paragraph Type Created
**Module**: `ip_pbhero_campaign`  
**Bundle ID**: `hero_campaign`  
**Location**: `/Users/jrobens/Sites/gardensofstone2/web/modules/custom/ip_pbhero_campaign/`

#### Fields Implemented:
- ✅ `field_pbhero_campaign_tag` - Taxonomy term reference (campaign)
- ✅ `field_pbhero_campaign_headline` - Text (string, max 255chars)
- ✅ `field_pbhero_campaign_intro` - Text long
- ✅ `field_pbhero_campaign_primary_btn` - Link with text
- ✅ `field_pbhero_campaign_primary_btn_url` - Link URL
- ✅ `field_pbhero_campaign_ghost_btn` - Link with text
- ✅ `field_pbhero_campaign_ghost_btn_url` - Link URL
- ✅ `field_pbhero_campaign_scroll_cue` - Checkbox (boolean)
- ✅ `field_pbhero_campaign_scroll_cue_url` - Link for scroll cue

### 2. Configuration Files
**Export Location**: `/tmp/config-dump/`

All configuration files created and exported:
- `paragraphs.paragraphs_type.hero_campaign.yml`
- `field.storage.paragraph.field_pbhero_campaign_*.yml` (8 files)
- `field.field.paragraph.hero_campaign.field_pbhero_campaign_*.yml` (9 files)
- `core.entity_view_display.paragraph.hero_campaign.default.yml`
- `core.entity_form_display.paragraph.hero_campaign.default.yml`

### 3. Twig Template
**Location**: `/Users/jrobens/Sites/gardensofstone2/web/themes/custom/gardensofstone/templates/paragraph/paragraph--hero-campaign.html.twig`

Template includes:
- Campaign tag with dot indicator
- Headline with proper styling
- Introduction text
- Primary and ghost CTA buttons
- Scroll cue with conditional rendering

### 4. SCSS Styles
**Module Location**: `/Users/jrobens/Sites/gardensofstone2/web/modules/custom/ip_pbhero_campaign/styles/`
- Source: `ip_pbhero_campaign.scss`
- Compiled: `ip_pbhero_campaign.css`

**Theme Location**: `/Users/jrobens/Sites/gardensofstone2/web/themes/custom/gardensofstone/styles/`
- Source: `_pbherocampaign.scss`
- Compiled: `_pbherocampaign.css`

**Styling Features**:
- Background: `linear-gradient(180deg, rgba(15,22,17,0.78) 0%, rgba(15,22,17,0.6) 55%, rgba(15,22,17,0.82) 100%)`
- `.wrap`: max-width: 1080px, margin: 0 auto, padding: 0 28px
- `.eyebrow-line`: flex, gap:10px, font-size:0.86rem, color:#D3A868, font-weight:600
- `.eyebrow-line .dot`: 7px circle with `var(--clay)` background
- `h1.headline`: clamp(2.1rem, 4.4vw, 3.4rem), line-height:1.1, max-width:16ch, color:white
- `.sub/.intro`: margin-top:20px, max-width:56ch, font-size:1.08rem, color:#DCD6C4
- `.hero-ctas`: display:flex, gap:14px, margin-top:30px, flex-wrap:wrap
- `.btn-primary`: background:var(--clay), color:white, padding:14px 26px, border-radius:3px
- `.btn-ghost`: border:1.5px solid rgba(247,243,234,0.7), color:white, padding:12.5px 24px
- `.scroll-cue`: margin-top:44px, border-bottom:1.5px solid rgba(247,243,234,0.45)

### 5. Styles Compilation
✅ SCSS compiled to CSS  
✅ Added to `styles.scss` library import  
✅ CSS appended to `/Users/jrobens/Sites/gardensofstone2/web/themes/custom/gardensofstone/styles/styles.css`

### 6. Module Files
- `ip_pbhero_campaign.info.yml` - Module definition
- `ip_pbhero_campaign.libraries.yml` - Library definition
- `ip_pbhero_campaign.module` - Module callbacks (hook_theme, hook_help, page_attachments)
- `README.md` - Documentation
- `templates/` - Twig templates
- `styles/` - SCSS source and compiled CSS

### 7. Cache Rebuild
✅ `drush cr` executed successfully

## 📁 File Locations Summary

### Configuration
- **Module config**: `/Users/jrobens/Sites/gardensofstone2/web/modules/custom/ip_pbhero_campaign/config/optional/`
- **Exported config**: `/tmp/config-dump/`

### Theme Overrides
- **Template**: `/Users/jrobens/Sites/gardensofstone2/web/themes/custom/gardensofstone/templates/paragraph/paragraph--hero-campaign.html.twig`
- **SCSS source**: `/Users/jrobens/Sites/gardensofstone2/web/themes/custom/gardensofstone/styles/_pbherocampaign.scss`
- **CSS output**: `/Users/jrobens/Sites/gardensofstone2/web/themes/custom/gardensofstone/styles/_pbherocampaign.css`

### Module Sources
- **Module root**: `/Users/jrobens/Sites/gardensofstone2/web/modules/custom/ip_pbhero_campaign/`
- **SCSS source**: `/Users/jrobens/Sites/gardensofstone2/web/modules/custom/ip_pbhero_campaign/styles/ip_pbhero_campaign.scss`
- **CSS output**: `/Users/jrobens/Sites/gardensofstone2/web/modules/custom/ip_pbhero_campaign/styles/ip_pbhero_campaign.css`

### Stylesheets
- **Theme styles.scss**: `/Users/jrobens/Sites/gardensofstone2/web/themes/custom/gardensofstone/styles/styles.scss` (includes @use 'pbherocampaign')
- **Compiled theme CSS**: `/Users/jrobens/Sites/gardensofstone2/web/themes/custom/gardensofstone/styles/styles.css` (includes hero campaign styles)

## 🎨 Design Compliance

All styling from reference document (`coxs-river-campaign-landing-page.html`) implemented:
- ✅ Hero section background with linear-gradient and rgba(15,22,17,0.78)
- ✅ .wrap class with max-width: 1080px, margin: 0 auto, padding: 0 28px
- ✅ .eyebrow-line with flex layout, gap:10px, and D3A868 color
- ✅ h1.headline with clamp(2.1rem, 4.4vw, 3.4rem) and line-height:1.1
- ✅ .sub/.intro with margin-top:20px and 56ch max-width
- ✅ .hero-ctas with flex layout and gap:14px
- ✅ .btn-primary with var(--clay) background
- ✅ .btn-ghost with 1.5px border and rgba(247,243,234,0.7)
- ✅ .scroll-cue with margin-top:44px and bottom border

## 📋 Next Steps

To use this paragraph type in Drupal:

1. Enable the module (if not already enabled):
   ```bash
   drush en ip_pbhero_campaign
   ```

2. Create or ensure you have a "campaign" taxonomy vocabulary

3. Add the "Hero Campaign" paragraph type to your paragraph field in the content type

4. Fill in the fields with your campaign content:
   - Set campaign tag to "Cox River Catchment Campaign" (or your campaign term)
   - Enter your headline text
   - Enter the introduction paragraph
   - Configure primary and ghost buttons
   - Enable/disable scroll cue as needed

5. Clear cache if needed:
   ```bash
   drush cr
   ```

## 🔧 Technical Notes

- The module follows the same pattern as other interlated_paragraphs submodules
- SCSS is compiled using sass command: `sass input.scss output.css`
- The theme's `styles.scss` imports the SCSS file for automatic compilation
- CSS includes CSS custom properties (var(--clay), var(--paper)) from theme variables
- Template is optimized for Drupal 10/11 core
