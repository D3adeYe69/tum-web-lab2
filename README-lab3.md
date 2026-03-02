# Hearth & Oak — Lab 3: Responsive Design & Mascot

This branch (`lab3`) contains the Lab 3 version of the **Hearth & Oak** landing page. It extends the Lab 2 work with responsive design, a mobile-friendly call to action, a mobile-only section, an animated mascot, and partial migration to **Bootstrap 5**.

**Live demo (Lab 3 branch):** `https://d3adeye69.github.io/tum-web-lab2/` (update this link/branch if needed)

---

## What changed in Lab 3

- **Responsive layout**
  - Navigation, hero, collection, reviews, about, and contact sections all scale down cleanly on tablets and phones.
  - Font sizes and paddings are reduced on small screens via `@media (max-width: 768px)` in `style.css`.
  - Smooth scrolling between sections is enabled via `html { scroll-behavior: smooth; }`.

- **Primary call to action (CTA)**
  - A prominent hero CTA button was added so it is always visible, including on mobile:
    - HTML: `<a href="#collection" class="btn btn-light hero-cta">Shop the collection</a>` inside the hero section.
    - Styling: `.hero-cta` in `style.css` makes it rounded, elevated, and touch-friendly.

- **Mobile-only highlight section**
  - New section right after the hero, only visible on small screens:
    - HTML: `<section class="mobile-highlight mobile-only">…</section>` with text and a “Tap to call our showroom” button.
    - CSS: `.mobile-only { display: none; }` by default, then switched to `display: block` inside `@media (max-width: 768px)`.
  - This satisfies the “mobile-only elements” requirement and gives phone users a direct CTA (`tel:` link).

- **Animated mascot (“Hearth lamp”)**
  - A friendly lamp-shaped mascot appears near the bottom-right corner after a short delay:
    - Markup: the `.mascot` block at the end of `index.html`.
    - CSS: `.mascot`, `.mascot-shade`, `.mascot-eye`, `.mascot-smile`, etc. in `style.css` create a simple SVG-like character.
  - **Animation & timing:**
    - The mascot fades and pops in after ~2.5 seconds using `animation: mascot-pop-in … 2.5s forwards`.
    - It continuously bounces/tilts using `@keyframes mascot-bounce`.
  - **Hover message / CTA:**
    - On hover, `.mascot-tooltip` becomes visible and displays: “Welcome home — can I help you find the perfect bed or sofa?”.

- **Bootstrap 5 integration**
  - Bootstrap is loaded via CDN in `index.html`:
    - `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" … />`
  - Concrete Bootstrap usage on the page:
    - Hero CTA: `class="btn btn-light hero-cta"`.
    - Mobile CTA: `class="btn btn-outline-dark mobile-cta-button"`.
  - Layout and grid are still implemented with custom CSS; Bootstrap is used mainly for button components and base styling.

---

## Files touched in Lab 3

- `index.html`
  - Added Bootstrap `<link>` in the `<head>`.
  - Added hero CTA button inside the hero section.
  - Inserted the `mobile-highlight` mobile-only section.
  - Appended the mascot markup at the end of `<main>` / before `</body>`.

- `style.css`
  - Base: enabled smooth scrolling and centered the main navigation.
  - Hero: styles for `.hero-cta` to make the CTA stand out.
  - Mobile-only: `.mobile-highlight`, `.mobile-highlight-text`, `.mobile-cta-button`, `.mobile-only`, and mobile `@media` rules.
  - Mascot: all `.mascot*` classes and the `mascot-pop-in` / `mascot-bounce` keyframe animations.
  - Responsive tweaks: adjusted paddings and section title size on small screens.

---

## How to run locally

1. **Clone and checkout Lab 3 branch:**
   - `git clone <repo-url>`  
   - `git checkout lab3`
2. **Open `index.html` in a browser** (or use a simple static server like `live-server` or the VS Code / Cursor “Open with Live Server” extension).
3. **Resize the browser window** or use dev tools to test:
   - Desktop: full hero with centered CTA, mascot appears after a short delay in the bottom-right corner.
   - Mobile: hero + CTA, mobile-only highlight section, contact CTA is easy to tap.

---

## Lab 3 requirements checklist

- **Responsive design**
  - All sections adapt for desktop and mobile; typography and spacing scale via media queries.
- **Call to action visible on mobile**
  - Hero CTA (`Shop the collection`) is clearly visible and tappable on small screens.
- **Mobile-only element**
  - `mobile-highlight` section appears only on mobile and includes a `tel:` CTA.
- **Mascot**
  - Related to topic: friendly lamp mascot for a furniture/home brand.
  - Pleasant visual: soft colors and rounded shapes, drawn entirely in CSS.
  - Delayed appearance and positioned in page corner (bottom-right).
  - Animated via CSS keyframes (pop-in + bounce/tilt).
  - Hover shows a welcome / info / CTA tooltip.
- **Dev requirements**
  - **Git history:** Lab 3 work is split into multiple commits (Bootstrap integration, hero CTA, mobile-only section, mascot, responsive tweaks, etc.).
  - **Deployment:** page is deployed under a live link GitHub Pages  .
  - **CSS framework:** Bootstrap 5 integrated via CDN and used for CTA buttons and base styling.
*** End Patch***}"/>
