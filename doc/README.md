Could you open the zipped Drupal files, John? I did and can send them to you.

Keith

OSA Coxs River campaign and Watershed feature: Drupal 11 components

For John. Two Single Directory Components (SDC):

1. `coxs-campaign/` the full Coxs River campaign landing page (version 4 design, Watershed Episode 2 as the default video).
2. `watershed-feature/` a block for the GOSA home page: episode title, short blurb, click-to-play video and a button to the campaign page.

I have not been able to test these on a real Drupal site. I checked the compiled output in a browser at
1280 and 390 px wide (no horizontal scroll, no script errors, click-to-play builds the right Vimeo embed),
and the campaign component renders the same as the standalone HTML page. I did not re-test against Bulma
this round (the v3 package was tested with Bulma 1.0.2; the scoping method is unchanged). Please tell Ash what breaks.

## Install

1. Copy both folders to `themes/custom/YOURTHEME/components/`.
2. Make sure the core Single Directory Components module is enabled, then clear caches.
3. Render them from templates:

       {# Campaign page body, e.g. node--page--NID.html.twig #}
       {% include 'YOURTHEME:coxs-campaign' only %}

       {# Home page, wherever the block should sit #}
       {% include 'YOURTHEME:watershed-feature' with { campaign_url: '/PATH-TO-CAMPAIGN-PAGE' } only %}

   Every prop is optional. The defaults are Episode 2.
4. SDC attaches each component's `.css` and `.js` automatically.

No site configuration is created or changed. Only the fonts (below) need a theme `libraries.yml` entry.

## Props

| Component | Prop | Default | Purpose |
| --- | --- | --- | --- |
| both | `video_url` | Episode 2 link | Full Vimeo link including the private code |
| both | `thumbnail_url` | empty | 16:9 image for the video. Empty uses the bundled Episode 2 thumbnail (`images/watershed-ep2-thumbnail.jpg`) |
| campaign | `video_title` | Watershed, Episode 2: Salinity | Accessible name of the player |
| campaign | `episode_blurb` | Now showing: Episode 2, Salinity. | Line under the series description |
| campaign | `show_footer` | true | Acknowledgement of Country and footer strip. Turn off if the site footer already carries it |
| feature | `title` | Watershed, Episode 2: Salinity | Heading and player name |
| feature | `kicker` | New episode | Small label above the title |
| feature | `blurb` | series description | Short text under the title |
| feature | `campaign_url` | `#` | Where the button goes. Set this |
| feature | `campaign_label` | Read the campaign | Button text |

## For the next episode

Change `video_url`, `title` / `video_title` and `episode_blurb`, and add `thumbnail_url` for the new image.
No code changes.

## How it is built

- Compiled CSS only, no build step. Every class has a prefix (`cx-` for the campaign, `wf-` for the feature)
  and every rule sits under `.cx-campaign` or `.wf-feature`, so neither collides with Bulma (`.title`,
  `.section`, `.hero`, `.button`) and the two can sit on one page. Animation names are prefixed too.
- The campaign page's own header and navigation are not included, because the GOSA site has its own.
  In-page links point to `#cx-asks`, `#cx-watershed` and so on. Smooth scrolling needs
  `html { scroll-behavior: smooth; }` in the theme (optional).
- Text lives in the Twig files as plain HTML, so no text format applies. The numbered sources are in the
  campaign Twig. No iframe is in the markup: the script creates the Vimeo iframe when someone clicks.
- Plain JavaScript through `Drupal.behaviors`, no jQuery.

## Fonts

Bricolage Grotesque, Oswald, Anton, Fraunces and Libre Franklin. Without them it falls back to system
fonts and still works. To load them from Google Fonts, add to the theme's `libraries.yml` and attach it:

    gosa-watershed-fonts:
      css:
        theme:
          'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600..800&family=Oswald:wght@500;600;700&family=Anton&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Libre+Franklin:wght@400;500;600;700&display=swap': { type: external }

Or self-host them.

## Things to check on the live site

- **Content Security Policy.** `player.vimeo.com` in frame-src; `cdn.jsdelivr.net` (or `player.vimeo.com`) in
  script-src for Vimeo's player library; `fonts.googleapis.com` in style-src and `fonts.gstatic.com` in font-src
  if you load the fonts. Without the player library the video still plays, but the reset to the thumbnail at
  the end and the caption suppression stop working.
- **Vimeo embed privacy.** Episode 2's embed setting must allow the GOSA domain. I could not confirm this.
  Test playback on the live site.
- **End screen.** When the video ends the player is removed and the thumbnail returns, so Vimeo's list of
  other videos does not show. Play it to the end to confirm.
- **Placeholders in the campaign page.** The Subscribe box in the network strip does nothing yet (no form
  handler), and the email address on the Rose Jackson card has not been tested.
- **Drupal Canvas.** SDCs are the format Canvas builds on, but I have not tested that.

## Updates 2023-07-21

    ckeditor/autogrow                    4.18.0  ! 4.21.0 
    ckeditor/codemirror                  v1.18.3 ! v1.18.7
    ckeditor/fakeobjects                 4.18.0  ! 4.21.0 
    ckeditor/image                       4.18.0  ! 4.21.0 
    ckeditor/link                        4.18.0  ! 4.21.0 
    codemirror/codemirror                5.65.3  ! 5.65.12
    drupal/better_social_sharing_buttons 4.0.5   ! 4.0.6   Provides a settings page, a field, a paragraph, and a block for social sharing buttons
    drupal/console                       1.9.9   ! 1.9.10  The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
    drupal/leaflet                       10.0.16 ! 10.0.17 Integration with the Leaflet map scripting library.
    drupal/views_add_button              2.0.7   ! 2.0.8   Views Add Button
    jquery/inputmask                     5.0.7   ! 5.0.8  
    jquery/textcounter                   0.9.0   ! 0.9.1  
