# 🎨 Visual Design Overview

## Color Palette

```
Primary Background:  #0A0F24 (Midnight Navy)
Accent Color:        #E7B10A (Royal Gold)
Text Color:          #F5F5F5 (Warm White)
Card Background:     #1E2433 (Slate Gray)
Card Light:          #2A3042 (Slate Gray Light)
```

### Color Usage:
- **Midnight Navy (#0A0F24)**: Main background, button text
- **Royal Gold (#E7B10A)**: Hover effects, borders, icons, highlights, links
- **Warm White (#F5F5F5)**: Primary text, headings
- **Slate Gray (#1E2433)**: Card backgrounds, containers
- **Slate Gray Light (#2A3042)**: Input fields, secondary cards

## Typography

### Font Stack:
```
Headings:    Poppins / Inter (bold, clean)
Body:        Nunito / Roboto (readable, friendly)
Numbers:     JetBrains Mono (monospace, technical)
```

### Font Sizes:
- Hero Title: 5xl-7xl (48px-72px)
- Section Titles: 4xl-5xl (36px-48px)
- Card Titles: 2xl-3xl (24px-30px)
- Body Text: base-lg (16px-18px)
- Small Text: sm-xs (12px-14px)

## Layout Structure

### Page Flow:
```
┌─────────────────────────────────┐
│  Navbar (Fixed)                 │ ← Transparent → Solid on scroll
├─────────────────────────────────┤
│                                 │
│  Hero (Full Screen)             │ ← Animated background
│  - Name & Tagline               │ ← Large text, CTA buttons
│  - Scroll Indicator             │
│                                 │
├─────────────────────────────────┤
│  About (Timeline)               │ ← Cards + Stats
├─────────────────────────────────┤
│  Academics (2 Cards)            │ ← Progress bars
├─────────────────────────────────┤
│  Projects (3 Cards Grid)        │ ← Modal details
├─────────────────────────────────┤
│  Experience (Timeline)          │ ← Alternating cards
├─────────────────────────────────┤
│  Interests (Icon Grid)          │ ← 8 items
├─────────────────────────────────┤
│  Aspirations (3 Phases)         │ ← Stacked cards
├─────────────────────────────────┤
│  Skills (3 Categories)          │ ← Progress bars
├─────────────────────────────────┤
│  Resume (PDF Viewer)            │ ← Download button
├─────────────────────────────────┤
│  Contact (Form + Links)         │ ← Social icons
├─────────────────────────────────┤
│  Footer                         │ ← Links & Credits
└─────────────────────────────────┘
```

## Component Styles

### 1. Hero Section
```
Design: Split layout (text left, graphic right)
Background: Animated glowing orbs (gold/10% opacity)
Text: Large white heading, gold subtitle
Buttons: Solid gold + Outlined gold
Animation: Fade in from sides, rotating circles
```

### 2. About Section
```
Cards: Slate gray with gold border (20% → 60% on hover)
Timeline: Vertical line (gold), circular nodes
Stats: 2x2 grid, large numbers in JetBrains Mono
Animation: Fade up on scroll
```

### 3. Academics Section
```
Layout: 2-column grid
Cards: Full-height with gradient header
Progress Bars: Gold gradient fill, animated width
Badges: Colored status pills (green/blue)
Hover: Border glow, shadow increase
```

### 4. Projects Section
```
Layout: 3-column grid (1 col on mobile)
Cards: Slate gray, gradient top strip
Tech Badges: Gold outline pills with icons
Modal: Full-screen overlay with card details
Hover: Lift up 8px, shadow glow
```

### 5. Experience Section
```
Layout: Centered timeline with alternating cards
Timeline: Vertical gold line with circular nodes
Cards: Slate gray, achievement bullets
Icons: Gold circles with white icons
Animation: Fade from alternating sides
```

### 6. Interests Section
```
Layout: 4-column grid (2 cols on mobile)
Cards: Small square cards with gradient border
Icons: Large (5xl), gold color
Hover: Icon rotates and scales
Animation: Pop in with stagger
```

### 7. Aspirations Section
```
Layout: Stacked full-width cards
Cards: Large with gradient accent strip
Goals: 2-column grid of checkmark items
Icons: Large (5xl) with rotation animation
Dividers: Gold vertical line between sections
```

### 8. Skills Section
```
Layout: 3-column grid
Cards: Full-height with gradient header
Progress Bars: Gold with shimmer effect
Icons: Animated on hover (scale + rotate)
Tags: Additional skills as pills
```

### 9. Resume Section
```
Layout: Centered single card
Header: Gold gradient with file icon
Body: PDF placeholder / iframe
Download: Large gold button
Metadata: Version, format, size display
```

### 10. Contact Section
```
Layout: 2-column (methods left, form right)
Method Cards: Gradient border, hover slide
Form: Dark inputs with gold focus
Button: Full-width gold with icon
Social Icons: Gold bordered squares
```

### 11. Footer
```
Layout: 3-column grid + bottom bar
Brand: Large logo with gold accent
Links: Quick links with gold chevrons
Social: Icon buttons with hover effect
Copyright: Centered with heart icon
Back to Top: Gold button (fixed bottom right)
```

## Animation System

### Entry Animations:
```
Fade In:     opacity 0 → 1 (0.6s)
Slide Up:    translateY(50px) → 0 (0.6s)
Slide Side:  translateX(±50px) → 0 (0.6s)
Scale:       scale(0.8) → 1 (0.4s)
```

### Hover Animations:
```
Cards:       translateY(0) → -8px + shadow
Buttons:     scale 1 → 1.05
Icons:       scale + rotate (360deg)
Links:       color change + underline
```

### Scroll Animations:
```
Trigger:     useInView (once, -100px margin)
Stagger:     0.1s-0.2s delay between items
Timeline:    Items appear in sequence
```

### Background Animations:
```
Orbs:        scale + opacity pulse (8s loop)
Circles:     rotate 360deg (20s loop)
Shimmer:     translateX across progress bars
```

## Spacing System

```
Section Padding:    py-20 (5rem top/bottom)
Container Max:      max-w-7xl (1280px)
Card Padding:       p-6 to p-8 (1.5rem-2rem)
Grid Gap:           gap-6 to gap-12 (1.5rem-3rem)
Element Margin:     mb-4 to mb-16 (1rem-4rem)
```

## Border & Shadow System

### Borders:
```
Default:     border border-royal-gold/20
Hover:       border-royal-gold/60
Cards:       border-2 for emphasis
Rounded:     rounded-xl (0.75rem) or rounded-2xl (1rem)
```

### Shadows:
```
Default:     shadow-xl
Hover:       shadow-royal-gold/30
Glow:        shadow-lg shadow-royal-gold/50
```

## Responsive Breakpoints

```
Mobile:      < 768px   (1 column, stacked)
Tablet:      768-1024  (2 columns)
Desktop:     > 1024px  (3+ columns, full layout)

Grid:
- Projects:  3 cols → 1 col
- Skills:    3 cols → 1 col
- Interests: 4 cols → 2 cols
- Timeline:  Horizontal → Vertical
```

## Icon System

### Sources:
- React Icons (fa, si prefixes)
- Emojis for quick stats

### Sizes:
```
Small:       text-lg (18px)
Medium:      text-2xl-3xl (24-30px)
Large:       text-4xl-5xl (36-48px)
Hero Icons:  text-6xl (60px)
```

### Colors:
- Primary: text-royal-gold
- Hover: Brighter gold or white
- Decorative: Various for gradient cards

## Micro-Interactions

1. **Card Hover:**
   - Border brightens (20% → 60% opacity)
   - Shadow grows and adds gold tint
   - Card lifts up 8px
   - Duration: 300ms

2. **Button Hover:**
   - Scales to 105%
   - Background slightly transparent
   - Shadow intensifies
   - Duration: 300ms

3. **Icon Hover:**
   - Rotates 360deg (or ±15deg)
   - Scales to 110-120%
   - Duration: 500ms

4. **Progress Bars:**
   - Animate from 0 to target width
   - Shimmer effect passes through
   - Delay: Staggered by 0.1s

5. **Modal Open:**
   - Backdrop fades in
   - Content scales from 80% to 100%
   - Duration: 400ms

## Design Principles

### Consistency:
- Same border radius across cards
- Consistent spacing multiples
- Unified color usage
- Matching animation timings

### Hierarchy:
- Size indicates importance
- Color draws attention (gold for emphasis)
- White space separates sections
- Bold headings, lighter body

### Accessibility:
- High contrast (white on dark navy)
- Large touch targets (44px minimum)
- Focus states visible
- Semantic HTML structure

### Performance:
- CSS transforms for animations (GPU accelerated)
- IntersectionObserver for scroll animations
- Lazy loading with useInView
- Optimized re-renders

## Style Guidelines

### Do's:
✅ Use gold for accents and emphasis
✅ Keep cards consistent in style
✅ Add hover states to interactive elements
✅ Use appropriate spacing multipliers
✅ Test on multiple screen sizes
✅ Maintain animation timing consistency

### Don'ts:
❌ Don't overuse gold (keep it special)
❌ Don't mix border radius styles
❌ Don't animate everything (be selective)
❌ Don't neglect mobile layouts
❌ Don't use too many font families
❌ Don't add unnecessary complexity

---

## 🎨 Design Summary

**Style:** Modern, Clean, Premium, Analytical  
**Mood:** Professional yet approachable  
**Focus:** Content clarity with visual interest  
**Uniqueness:** Navy-gold color scheme with smooth animations

**This design makes you stand out while keeping the focus on your achievements and skills.**
