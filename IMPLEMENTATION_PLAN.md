# Implementation Plan - Joy & Markus Website

## Design Structure Analysis

Based on the Figma design analysis, the website consists of the following main sections:

### Page Structure Overview

1. **Header/Logo Section**
2. **Hero Section** (with featured song)
3. **Navigation Bar**
4. **MUSIK Section** (Music releases list)
5. **CHORDSHEETS Section** (Downloadable chord sheets table)
6. **NEWSLETTER Section**
7. **ABOUT Section**
8. **KONTAKT Section** (Contact form)
9. **Footer**

---

## Component Architecture Plan

### 1. Layout Components (`components/layout/`)

#### `header.tsx`
- Logo/Brand name: "JOY&MARKUS"
- "Listen!" button (reusable component)
- Horizontal line separator

#### `navigation.tsx`
- Navigation bar with rounded background
- Links: HOME, MUSIK, CHORDSHEETS, ABOUT, KONTAKT
- Horizontal layout with spacing

---

### 2. Reusable UI Components (`components/ui/`)

#### `listen-button.tsx`
- Dark gray background (#4a4a4a)
- "Listen!" text in Libre Caslon Text (Bold Italic)
- Arrow icon (SVG from Figma)
- Props: onClick handler, optional className

#### `section-heading.tsx`
- Large text (70px)
- Darker Grotesque Black font
- Props: children (text content)

#### `badge.tsx` (for "OUT NOW")
- Yellow background (#fff239)
- Libre Caslon Text (Bold Italic)
- Arrow icon
- Props: text, variant

#### `arrow-icon.tsx`
- SVG icon component
- Rotatable (90deg default)
- Reusable for buttons

---

### 3. Section Components (`components/sections/`)

#### `hero-section.tsx`
- Background image(s) with overlay
- Album cover image (positioned absolutely)
- Song lyrics text block (white text overlay)
- "OUT NOW" badge
- Props: featured song data

#### `music-item.tsx`
- Reusable component for each music entry
- Layout: Title/Citation | Separator | Album Cover | Separator | Lyrics + Button
- Props:
  ```typescript
  interface MusicItemProps {
    title: string
    citation?: string
    albumCover: string
    lyrics: string[]
    listenUrl?: string
    layout?: 'left' | 'center' | 'right' // Album cover position
  }
  ```

#### `music-section.tsx`
- Section heading "MUSIK"
- Container for multiple `MusicItem` components
- Bordered rows
- Props: music items array

#### `chordsheets-section.tsx`
- Section heading "CHORDSHEETS"
- Decorative background (gradient ellipses - use CSS or image)
- Table component:
  - Headers: NAME, ANZAHL, DOWNLOAD
  - Rows: Song data
- Props: chordsheets data array

#### `newsletter-section.tsx`
- Layout: Image | Content (title, description, form)
- Email input field
- Subscribe button (yellow)
- Props: onSubmit handler

#### `about-section.tsx`
- Section heading "ABOUT"
- Image with gradient overlay
- Description text
- Props: content data

#### `contact-section.tsx`
- Section heading "KONTAKT"
- Contact form:
  - Email input
  - Message textarea
  - Send button (yellow)
- Props: onSubmit handler

---

### 4. Form Components (`components/forms/`)

#### `email-input.tsx`
- White background
- Rounded corners (15px)
- Placeholder text styling
- Props: value, onChange, placeholder, className

#### `textarea.tsx`
- Large textarea for messages
- Border styling
- Props: value, onChange, placeholder, className

#### `submit-button.tsx`
- Yellow background (#fff239)
- Libre Caslon Text font
- Props: children, onClick, type

---

### 5. Page Component

#### `app/page.tsx` (Home Page)
- Combines all sections
- Server Component (default)
- Data fetching for content

---

## Data Structure Plan

### TypeScript Interfaces

```typescript
// types/music.ts
interface MusicItem {
  id: string
  title: string
  citation?: string
  albumCover: string
  lyrics: string[]
  listenUrl?: string
  layout?: 'left' | 'center' | 'right'
}

// types/chordsheet.ts
interface ChordSheet {
  id: string
  name: string
  anzahl: number
  downloadUrl: string
}

// types/contact.ts
interface ContactFormData {
  email: string
  message: string
}

interface NewsletterFormData {
  email: string
}
```

---

## Styling Implementation Plan

### Colors (already defined in design-system.mdc)
- Background: `#ecebe6`
- Accent Yellow: `#fff239`
- Dark Gray: `#4a4a4a`
- Borders: `#cfcfcf`, `#bcbcbc`, `#b1b1b1`

### Typography
- Use font-family classes as defined in design system
- Font loading: Need to configure custom fonts (Darker Grotesque, Libre Caslon Text, Geist Mono, Andale Mono)

### Spacing & Layout
- Use Tailwind gap utilities: `gap-[10px]`, `gap-[20px]`, `gap-[80px]`, `gap-[100px]`
- Padding: `px-[45px]`, `py-[20px]`, `p-[20px]`
- Border radius: `rounded-[5px]`, `rounded-[10px]`, `rounded-[15px]`, `rounded-[100px]`

---

## Asset Management Plan

### Images to Extract from Figma
1. Album covers (cover-joy-markus-5-1, abba-cover-1, etc.)
2. Hero background images
3. Decorative images (ChatGPT images, WhatsApp images)
4. SVG icons (arrows, lines, polygons, ellipses)

### Storage Structure
```
public/
  images/
    albums/
    hero/
    decorative/
  icons/
    arrows/
    separators/
```

### Next.js Image Component
- Convert all `<img>` tags to Next.js `Image` component
- Define width/height based on Figma dimensions
- Use `object-cover` or `object-contain` as appropriate

---

## Implementation Steps

### Phase 1: Foundation & Layout
1. ✅ Set up project structure (already done)
2. **Create base layout components**
   - Header component
   - Navigation component
   - Footer component (if needed)
3. **Set up custom fonts**
   - Configure font loading in `app/layout.tsx`
   - Or use CSS @import in `globals.css`
4. **Create reusable button components**
   - ListenButton
   - SubmitButton
   - Badge component

### Phase 2: Core Sections
5. **Hero Section**
   - Background image handling
   - Overlay text positioning
   - Badge component integration
6. **Music Section**
   - MusicItem component
   - MusicSection container
   - Mock data structure
7. **Navigation integration**
   - Smooth scroll to sections
   - Active state handling

### Phase 3: Interactive Sections
8. **Chordsheets Section**
   - Table component
   - Decorative background
   - Download functionality (links)
9. **Newsletter Section**
   - Form component
   - Email validation
   - Submit handler (API integration)
10. **About Section**
    - Image with overlay
    - Content rendering

### Phase 4: Contact & Forms
11. **Contact Section**
    - Form component
    - Field validation (Zod schemas)
    - Submit handler (API integration)
12. **Form validation**
    - React Hook Form integration
    - Zod schema validation
    - Error handling

### Phase 5: Polish & Optimization
13. **Image optimization**
    - Download and optimize all images
    - Replace localhost URLs with public assets
    - Implement lazy loading
14. **Accessibility**
    - ARIA labels
    - Keyboard navigation
    - Focus management
15. **Responsive design**
    - Mobile breakpoints
    - Tablet adjustments
    - Desktop optimization
16. **Performance**
    - Code splitting
    - Image optimization
    - Font loading optimization

---

## File Structure

```
app/
  page.tsx                    # Main home page
  layout.tsx                  # Root layout (with fonts)
  globals.css                 # Global styles & CSS variables

components/
  layout/
    header.tsx
    navigation.tsx
    footer.tsx
  
  sections/
    hero-section.tsx
    music-section.tsx
    music-item.tsx
    chordsheets-section.tsx
    newsletter-section.tsx
    about-section.tsx
    contact-section.tsx
  
  ui/
    listen-button.tsx
    badge.tsx
    section-heading.tsx
    arrow-icon.tsx
    separator-line.tsx
  
  forms/
    email-input.tsx
    textarea.tsx
    submit-button.tsx
    contact-form.tsx
    newsletter-form.tsx

types/
  music.ts
  chordsheet.ts
  contact.ts

lib/
  utils.ts                    # Already exists (cn function)
  fonts.ts                    # Font configuration (if needed)

public/
  images/
    albums/
    hero/
    decorative/
  icons/
```

---

## Technical Considerations

### 1. Font Loading
- Need to source: Darker Grotesque, Libre Caslon Text, Geist Mono, Andale Mono
- Options:
  - Google Fonts (if available)
  - Self-hosted fonts in `public/fonts/`
  - Use `next/font` for optimization

### 2. Image Handling
- Extract all images from Figma localhost URLs
- Optimize images (WebP format where possible)
- Use Next.js Image component for all images
- Implement proper alt text for accessibility

### 3. Form Handling
- Use React Hook Form for form state
- Zod schemas for validation
- API routes for form submissions (`app/api/contact`, `app/api/newsletter`)

### 4. State Management
- Local state for forms (React Hook Form)
- No global state needed initially (static content)
- Redux can be added later if needed for user state

### 5. Routing
- Single page application (home page)
- Navigation links use anchor tags (#section-id)
- Smooth scroll behavior

### 6. Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Adjust layout for smaller screens:
  - Stack navigation items
  - Simplify music item layouts
  - Adjust font sizes

---

## Next Steps

1. **Start with Phase 1**: Create layout components and button components
2. **Set up fonts**: Configure custom fonts in the project
3. **Create hero section**: First visible section, good starting point
4. **Build music section**: Core content of the site
5. **Add interactivity**: Forms and navigation
6. **Optimize**: Images, performance, accessibility

---

## Questions to Resolve

1. **Font sourcing**: Where to get the custom fonts? (Google Fonts, purchased fonts, etc.)
2. **Content management**: Static data or CMS/database?
3. **Form submissions**: Email service? (SendGrid, Resend, etc.)
4. **Audio playback**: Where will music be hosted? (Spotify, SoundCloud, self-hosted?)
5. **Chordsheet downloads**: File storage location? (S3, public folder, etc.)

