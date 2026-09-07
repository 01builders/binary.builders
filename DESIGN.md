# Binary Builders design language

Binding spec for anyone (human or model) changing UI, motion, type, color, or copy on binary.builders.

The live source is `index.html`, `src/styles.css`, and `src/field.ts`. If this file and those files disagree, the code wins, then this file gets updated.

`themes/` and the old Hugo site are dead. Do not copy them.

## What it is

A single full-viewport presence page. Cool grey field, cobalt spark, two sentences, Swiss legal chrome.

Binary Builders is a research and engineering shop in Zug. The site states that. It does not sell, list services, or look like a startup landing page.

The thing people remember is the field: thousands of hairline trails in a curl-noise current, a few of them cobalt, drifting behind the headline.

## Tokens

Use CSS variables. Do not introduce a second palette.

| Token | Light | Dark | Role |
| --- | --- | --- | --- |
| `--sky` | `#d5dde6` | `#0b0d11` | Page and canvas ground |
| `--ink` | `#14171c` | `#e8edf2` | Type and most trails |
| `--spark` | `#2147ff` | `#6d8cff` | Links, CTA, inked trails |
| `--field-fade` | `213, 221, 230` | `11, 13, 17` | Canvas clear (RGB triple) |
| `--field-line` | `20, 23, 28` | `214, 220, 230` | Hairline trails |
| `--field-cobalt` | `33, 71, 255` | `90, 130, 255` | Inked trails |
| `--font-display` | `"Syne", sans-serif` | same | Only family |

Theme is `html.dark` plus `localStorage.theme`. Theme-color meta matches `--sky`.

The mark is Syne 700 **01** (`src/assets/brand/mark.svg`) — slashed zero + one, one fill. Favicon, app icons, and the X avatar are the same drawing. The old chromatic 01 (magenta/teal) is retired.

## Type

Load Syne 700 and 800 only.

| Role | Size | Weight | Tracking | Transform | Line-height |
| --- | --- | --- | --- | --- | --- |
| Headline | `clamp(48px, 9vw, 128px)` (mobile `clamp(40px, 14vw, 72px)`) | 800 | `-0.06em` | none | `0.88` |
| Wordmark | 14px | 700 | `0.04em` | uppercase | — |
| Actions (Dark / Write) | 13px | 700 | `0.08em` | uppercase | — |
| Footer | 12px | 600 | `0.03em` | none | `1.45` |
| Banner wordmark | 14px | 700 | `0.12em` | uppercase | — |
| Banner headline | 92px | 800 | `-0.06em` | none | `0.88` |

Headline sits in at most `12ch` (`11ch` on the X banner), two lines, each a full sentence with a period.

No second typeface. No optical-size tricks. No italic.

## Layout

One screen. `html, body { height: 100%; overflow: hidden; }`. No scroll, no sections stacked under the fold.

```
[ wordmark                    Dark  Write ]
[                                         ]
[              field (full bleed)         ]
[  We research.                           ]
[  We do things.                          ]
[ address                          email  ]
[                                  X · GH ]
```

- Header and footer are `position: fixed`, `z-index: 10`, `padding: 22px 28px`.
- Footer aligns to the bottom edge (`align-items: flex-end`).
- Hero is `100svh`, title anchored `end start`, `padding: 0 28px 12vh`.
- At `800px` and below: horizontal padding `18px`, title `padding-bottom: 22vh`, footer stacks and left-aligns.
- Gaps: 16px in the chrome bar, 18px between Dark and Write, 4px in footer link stack.
- No max-width container, no 12-column grid, no cards.

## Chrome

Header: “Binary Builders” wordmark left. “Dark”/“Light” toggle and “Write” (`mailto:contact@binary.builders`) right.

Footer: `Binary Builders AG` address and CHE numbers left, email and `X · GitHub` right. Address is an `<address>`, not italic.

Links inherit ink and go spark on hover. No underline. Write is spark at rest.

Focus: `outline: 2px solid var(--spark); outline-offset: 3px`.

Light-mode wordmark uses `mix-blend-mode: multiply`. Dark mode drops the blend.

The header is the wordmark only. The 01 is for favicons, app icons, X avatar, and the lockup in `src/assets/brand/`.

## The field

Implemented in `src/field.ts`. Mount it with `mountField(host)` on the hero.

- 1600 specks, 22-point tails, round caps.
- Curl of a three-term sine field. Time step `0.0016`.
- Every fourth speck is cobalt (`--field-cobalt`), the rest ink (`--field-line`). Width 1.8px vs 1.15px. Peak alpha 0.7 vs 0.52.
- Pointer repels weakly. Leave the canvas, repulsion dies.
- Freeze the spatial scale on first layout so a window resize does not jump the current. Rebuild the backing store only when its pixel size changes, then paint in that same turn. `prefers-reduced-motion: reduce` seeds the field and does not step it.
- Canvas is `position: absolute; inset: 0; pointer-events: none`. Title stays above it (`z-index: 1`).

The field is the only motion system. Do not add page-load fades, scroll reveals, typed headlines, or a second canvas.

## Voice

Write like the headline: short sentences, periods, no filler.

- Site line: “We research. We do things.”
- Toggle labels: “Dark” and “Light”, not icons.
- CTA: “Write”, not “Get in touch” or “Contact us”.
- Social: “X” and “GitHub”, middot between them.

No mission paragraphs, no “we empower”, no emojis, no exclamation marks. Product and protocol names stay lowercase where they are (x, GitHub). Company name is two words, title case.

## Assets

Source: `src/assets/brand/`. Served copies live in `pub/`.

| File | Use |
| --- | --- |
| `mark.svg` | Syne 700 01, `currentColor`. Favicon, avatar, lockup. |
| `wordmark.svg` | Outlined Syne 700 `BINARY BUILDERS`. |
| `lockup.svg` | 01 + wordmark. |
| `avatar-light.png` / `avatar-dark.png` | X profile. Same 01 on sky, padded for a circle crop. Upload 800×800. |
| `favicon.svg` | Mark, no ground. Fill follows `prefers-color-scheme`. |
| `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png` | Tab icon fallbacks, transparent. |
| `apple-touch-icon.png` | 180, ink, transparent. |
| `android-chrome-192x192.png`, `android-chrome-512x512.png` | Manifest icons, same. |

Do not CSS-filter a color file into looking on-brand. Change the SVG fill.

## Surfaces beyond the homepage

Keep the same tokens, type, chrome, and field. Change structure, not language.

| Surface | Notes |
| --- | --- |
| Homepage | Spec above. |
| X banner | `banner.html` + `src/banner.css`. 1500×500. Wordmark top-left. Title vertically centered, 92px, 80px side inset. Same field. |
| Inner page (if one is added) | Same header/footer. Field can stay or drop to flat `--sky` if type is dense. Still Syne, still no cards. |
| Dark / light | First-class pair. Recolor through the tokens, not a one-off invert. |

New controls are text. If a button is required, it is uppercase Syne 700, no fill, no radius, spark on hover. Do not add shadows, gradients, glass, or border-radius.

## Do not

These are the defaults this site is built against:

- Inter, Geist, Space Grotesk, IBM Plex, or a serif display
- Warm cream, terracotta, acid green, near-black + one neon
- Logo magenta/teal as fills or accents; chromatic 01; CSS-filtered color marks
- Rounded pills, cards, hero gradients, numbered `01 / 02 / 03` markers
- Broadsheet hairline column layouts
- Stock 8px spacing scale, Bootstrap breakpoints, BEM utility soup
- Lottie, particle-js, or a second animation library
- Copy longer than the thought

## Check

- Tokens only, both themes.
- Syne 700/800, headline tracking `-0.06em`, chrome uppercase.
- Field still full-bleed, trails intact while resizing, reduced-motion respected.
- Mark is 01, ink on sky. Spark still cobalt.
- Copy still short.
- No new typeface, radius, shadow, or motion system.
