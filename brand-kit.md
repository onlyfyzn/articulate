# Articulate — Brand Kit

> Reference document for designers and developers building graphics, marketing assets, and web/app interfaces for the Articulate brand.

---

## 1. Brand Symbol

The **asterisk/star (✦ or ★)** is the core brand mark. It appears alongside the wordmark in the app header ("Happy Sunday★") and as a standalone icon in the bottom navigation. It signals dynamism, achievement, and challenge.

---

## 2. Colour Palette

### Primary

| Name | Hex | Usage |
|---|---|---|
| Sky Blue (Gradient Start) | `#A8D4F5` | Background gradient top, light UI washes |
| Ocean Blue (Gradient End) | `#4A8FD4` | Background gradient bottom, primary surfaces |
| Interactive Blue | `#3D7FF5` | Primary CTA buttons (e.g. "Completed"), active states |

### Neutrals

| Name | Hex | Usage |
|---|---|---|
| Off White | `#F9F9F9` | Card backgrounds, content surfaces |
| Pure White | `#FFFFFF` | Text on dark/coloured backgrounds, pill buttons |
| Text Dark | `#1A1A1A` | Primary body text, headlines |
| Text Tertiary | `#8A8A8E` | Secondary labels, subtitles, locked states |
| Charcoal Card | `#1C1C1E` | Dark content cards (e.g. "15-Second Success Standard") |

### Accents

| Name | Hex | Usage |
|---|---|---|
| Amber | `#F0A030` | Secondary/outlined action buttons (e.g. "How we score") |
| Signal Red | `#FF3B30` | Alert labels, "Intelligence Briefing" tag, left-border accents |

### Gradients

**Sky Gradient** — the signature background:
```
background: linear-gradient(180deg, #A8D4F5 0%, #4A8FD4 100%);
```

**Reversed (bottom-heavy, used on skill/challenge screens):**
```
background: linear-gradient(180deg, #FFFFFF 0%, #A8D4F5 40%, #4A8FD4 100%);
```

---

## 3. Typography

The app uses **SF Pro** (Apple system font). For cross-platform and web use, the recommended web-safe equivalents are listed below.

### Type Scale

| Role | Size | Weight | Case | Example |
|---|---|---|---|---|
| Hero / Greeting | 32–36px | **Bold (700)** | Title Case | "Happy Sunday★" |
| Page Title | 28–32px | **Bold (700)** | Title Case | "Sales & Persuasion: The Hook" |
| Section Header | 17–18px | **Semibold (600)** | Title Case | "Today's task" |
| Category Label | 11–12px | **Semibold (600)** | ALL CAPS + tracked | "SALES & PERSUASION" |
| Body | 15–16px | Regular (400) | Sentence case | "Grab attention instantly" |
| Body Small | 13px | Regular (400) | Sentence case | Descriptions, briefings |
| Button Label | 16–17px | **Semibold (600)** | Title / Sentence | "Start Tri-Sprint →", "Record" |
| Micro Label | 10–11px | Regular (400) | ALL CAPS | "COME BACK TOMORROW…" |

### Font Stack (Web)

**Primary (system-first):**
```css
font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif;
```

**Google Fonts alternative (closest match):**
```css
/* Import */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

font-family: 'Inter', sans-serif;
```

### Letter Spacing

Category labels and micro labels use elevated tracking:
```css
letter-spacing: 0.08em; /* For ALL CAPS labels */
letter-spacing: 0.04em; /* For button text */
```

---

## 4. UI Component Patterns

### Buttons

**Primary (Filled):**
- Background: `#3D7FF5`
- Text: `#FFFFFF`, Semibold
- Border radius: `14px` (pill for CTAs, `14px` for in-list actions)
- Padding: `16px 24px`

**Primary CTA (Full-width pill):**
- Background: `#FFFFFF`
- Text: `#1A1A1A`, Semibold
- Border radius: `50px`
- Shadow: `0 2px 12px rgba(0,0,0,0.08)`
- Usage: "Start Tri-Sprint →", "Record"

**Secondary (Outlined):**
- Border: `1.5px solid #F0A030`
- Text: `#F0A030`, Semibold
- Border radius: `20px`
- Usage: "How we score"

**Pill Tag (Dark):**
- Background: `#1A1A1A`
- Text: `#FFFFFF`, Semibold, ALL CAPS, tracked
- Border radius: `50px`
- Padding: `6px 14px`
- Usage: "DAILY CHALLENGE"

### Cards

**Light Card:**
```css
background: #FFFFFF;
border-radius: 16px;
box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
padding: 20px;
```

**Dark Card:**
```css
background: #1C1C1E;
border-radius: 16px;
color: #FFFFFF;
padding: 20px;
```

**Intelligence / Briefing Card (Left Accent Border):**
```css
background: #FFFFFF;
border-radius: 12px;
border-left: 3px solid #FF3B30;
padding: 16px 20px;
box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
```

### Progress / Streak Ring

- Inactive: `#E5E5EA` (light grey circle)
- Active: `#1A1A1A` (filled or outlined ring)
- Used as a 7-day weekly streak tracker in a horizontal row

---

## 5. Spacing & Layout

| Token | Value | Usage |
|---|---|---|
| xs | 4px | Icon padding, tight gaps |
| sm | 8px | Internal card padding, label gaps |
| md | 16px | Section padding, button padding |
| lg | 24px | Card margin, section spacing |
| xl | 32px | Screen-level top padding |
| 2xl | 48px | Hero section clearance |

- **Screen padding:** 20px horizontal on mobile
- **Card gap:** 12–16px between stacked cards
- **Section label to content gap:** 8px

---

## 6. Iconography

- Style: **Outline / Stroke** icons (iOS SF Symbols aesthetic)
- Stroke weight: 1.5–2px
- Colour: `#8A8A8E` (inactive), `#1A1A1A` (active)
- Navigation icons: Home (star/asterisk), Skills (circle/target), Profile (person outline)
- Lock icon used for future/unavailable items

---

## 7. Motion & Interaction Principles

- **Transitions:** Smooth, 200–300ms ease-in-out (iOS native feel)
- **Completion state:** Checkmark icon animates on task completion with filled blue button
- **Tone:** Encouraging, achievement-forward — never punishing

---

## 8. Voice & Tone (from UI copy)

- **Warm but direct:** "Happy Sunday★", "Today's task"
- **Aspirational micro-copy:** "You are ranked #1 among all Articulate users this week."
- **Precision in challenge language:** "15-Second Success Standard", "Attention in first 3 seconds"
- **Minimal friction CTAs:** "Start Tri-Sprint →", "Record", "Proceed"
- Avoid jargon — keep challenge labels punchy and specific

---

## 9. Do's and Don'ts

| ✅ Do | ❌ Don't |
|---|---|
| Use the sky-to-ocean gradient as the hero background | Use flat solid blue without gradient depth |
| Use ALL CAPS with tracked spacing for category labels | Use all-caps for body text or headings |
| Keep cards white with generous rounded corners | Use sharp corners or heavy drop shadows |
| Use Signal Red (`#FF3B30`) sparingly for alerts only | Use red as a general accent or decorative colour |
| Lead with the asterisk ★ as a brand symbol | Use generic bullet points or clip-art stars |
| Use Inter or SF Pro for all type | Mix serif and sans-serif fonts |

---

*Last updated: March 2026*
