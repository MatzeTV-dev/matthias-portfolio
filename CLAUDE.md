# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Matthias Dorner's personal portfolio website showcasing professional experience, technical skills, and projects. The site is built with vanilla HTML, CSS, and JavaScript with a programming-themed design aesthetic.

## Project Structure

```
.
├── index.html              # Main portfolio page
├── .htaccess              # Apache server configuration
├── robots.txt             # Search engine crawler instructions
├── sitemap.xml            # Site structure for SEO
├── css/
│   ├── style.css          # Main styles and animations
│   └── custom-icons.css   # Custom icon definitions
├── js/
│   └── script.js          # Interactive features and animations
├── assets/
│   ├── Pic.webp           # Profile image (optimized WebP)
│   ├── icon/              # Favicon files
│   │   └── dornerlabs-icon-dark.ico
│   └── projects/          # Project screenshots and images
├── demos/                 # Portfolio demo websites
│   ├── autohaus/          # Car dealership demo
│   ├── baeckerei/         # Bakery demo
│   ├── cafe/              # Cafe demo
│   ├── friseur/           # Hair salon demo
│   ├── handwerk/          # Craftsman demo
│   └── restaurant/        # Restaurant demo
└── kunden-demos/          # Client pitch demo websites
    └── cafe-koenig/       # Cafe König demo (based on real client website)
```

## Development

### Running the Site Locally

This is a static website that requires no build process. To view:

```bash
# Open index.html in your browser, or use a simple HTTP server:
python3 -m http.server 8000
# Then navigate to http://localhost:8000
```

For production deployment, the site uses Apache with the included `.htaccess` file for URL rewrites and caching.

### Key Technologies

- **HTML5**: Semantic markup with accessibility features (ARIA labels, skip links, semantic tags)
- **CSS3**: Custom properties, animations, gradients, flexbox, grid
- **JavaScript (ES6+)**: Intersection Observer API, DOM manipulation, event handling
- **Font Awesome 6.4.0**: Icons (loaded via CDN with font-display: swap)
- **Devicon**: Programming language and technology icons
- **WebP Images**: Optimized image format with preloading for performance

## Architecture & Design

### Design System

**Color Scheme** (Programming theme):
- Primary: `#00ff88` (Neon green - code highlights)
- Secondary: `#0099ff` (Blue - links and accents)
- Accent: `#ff0080` (Pink - special effects)
- Background: Dark blues (`#0a0e27`, `#050810`, `#141b33`)
- Text: Light blues/grays (`#e4f0fb`, `#8892b0`)

### Page Sections

1. **Hero**: Terminal-style introduction with typing animations
2. **About**: Code block format biography with profile image
3. **Tech Stack**: Interactive skill cards with progress bars
4. **Experience**: Vertical timeline with job history
5. **Projects**: Grid of project cards with hover effects
6. **Footer**: Contact information and social links

### Animation Features

- Glitch effect on hero title
- Terminal typing simulation
- Scroll-triggered animations (Intersection Observer)
- Smooth scrolling navigation
- Hover effects and transitions throughout
- Progress bar animations
- Particle background effects
- Cursor glow effect (desktop only)
- Mobile-responsive hamburger menu
- Lazy loading with critical CSS inlined
- Font loading optimization with font-display: swap

### Interactive Features (JavaScript)

- **Mobile Navigation**: Hamburger menu with animation
- **Scroll Effects**: Navbar styling on scroll, progress indicator
- **Lazy Loading**: Intersection Observer for performance
- **Tech Card Highlighting**: Related skills dim others on hover
- **Easter Egg**: Konami code activation
- **Console Messages**: Developer-friendly console logs

## Content Updates

### Updating Personal Information

**Profile Image**: Replace `assets/Pic.webp` with your optimized WebP image. Also update the preload link in the HTML head (line 18).

**Personal Details**: Edit in `index.html`:
- Hero section: Terminal output and title
- About section: Code block biography and description text
- Meta tags (lines 3-7): Update name, description, and title for SEO

**Contact Info**: Footer section with email and social media links

**Favicon**: Update icons in `assets/icon/` directory (referenced in lines 10-11)

### Adding/Modifying Content

**Tech Stack**: Add/remove tech cards by copying the `.tech-card` structure. Uses both Font Awesome and Devicon for technology icons.

**Experience**: Timeline items follow a consistent structure with `.timeline-item` containers.

**Projects**: Project cards in `.projects-grid` - update titles, descriptions, tech tags, and links. Project images stored in `assets/projects/`.

**Demo Sites**: The `demos/` directory contains fully functional demo websites showcasing different industries (restaurant, cafe, bakery, car dealership, hair salon, craftsman). Each demo has its own HTML, CSS, and JavaScript files.

## Customization Guidelines

### Colors

All colors are defined in CSS custom properties (`:root` in style.css and inlined critical CSS in index.html). Change them once to update the entire site. Remember to update both locations for consistency.

### Adding New Sections

1. Add HTML section with appropriate ID
2. Update navigation menu in the navbar
3. Follow existing animation patterns using Intersection Observer
4. Use consistent `.section-title` formatting with code brackets
5. Ensure accessibility with proper ARIA labels and semantic HTML

### Performance Considerations

- **Images**: Use WebP format for optimal compression. Images should be optimized before adding to `assets/`
- **Critical CSS**: Inline critical above-the-fold CSS in HTML head for faster initial render
- **Font Loading**: Uses `font-display: swap` to prevent invisible text during font loading
- **Lazy Loading**: Non-critical CSS loaded via preload with fallback
- **Resource Hints**: Preconnect and preload directives for external resources (CDNs, fonts)
- **Animations**: Use transform/opacity for 60fps performance
- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 480px
- **Caching**: `.htaccess` configured for optimal browser caching
- **SEO**: Includes sitemap.xml, robots.txt, and semantic meta tags

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox
- Intersection Observer API
- ES6+ JavaScript features
- WebP image format (with fallbacks if needed)
- Font-display: swap for modern font loading
- Responsive design for mobile/tablet/desktop

## Accessibility Features

- Skip to main content link
- Semantic HTML5 elements (nav, main, section, article, footer)
- ARIA labels on interactive elements
- Proper heading hierarchy
- Screen reader-friendly text (.sr-only class)
- Keyboard navigation support
- Focus states on interactive elements
- Alt text on images

## Deployment

This is a static site that can be deployed to:
- **Apache Server**: Uses included `.htaccess` for rewrites and caching
- **GitHub Pages**: Static hosting with custom domain support
- **Netlify**: Automatic deployments from Git
- **Vercel**: Zero-config deployments
- Any static hosting service

### Apache Configuration

The included `.htaccess` file provides:
- URL rewrites and clean URLs
- Browser caching rules for static assets
- Compression settings
- Security headers

### SEO Configuration

- `sitemap.xml`: Lists all pages for search engine crawlers
- `robots.txt`: Crawler instructions and sitemap location
- Meta tags: Descriptions, titles, and Open Graph tags in HTML

## File Structure Details

### CSS Files
- `css/style.css`: Main stylesheet with all animations, responsive styles, and theme
- `css/custom-icons.css`: Custom icon font definitions for specialized icons

### JavaScript Files
- `js/script.js`: All interactive functionality including:
  - Mobile navigation toggle
  - Scroll animations with Intersection Observer
  - Typing effects
  - Particle effects
  - Konami code easter egg
  - Dynamic progress bars

### Demo Sites
Each demo in `demos/` is a standalone website with:
- Independent HTML/CSS/JS files
- Industry-specific design and content
- Fully functional interactive elements
- Responsive layouts
- Can be used as templates for client projects

## Client Demo Websites (kunden-demos/)

The `kunden-demos/` directory contains demo websites created for potential clients who have outdated websites. These demos are used for sales pitches to show clients how their website could look with a modern redesign.

### CRITICAL REQUIREMENTS for Client Demos

**IMPORTANT: Every client demo website MUST include these legal pages (DSGVO-compliant for Austria/EU):**

1. **Impressum (Mandatory)**
   - Full company/business name and legal form
   - Owner/operator name
   - Complete business address
   - Contact information (phone, email)
   - Company registration details (if applicable)
   - Tax/VAT ID (if applicable)
   - Regulatory authority
   - Professional association memberships
   - Legal references (ECG, UGB, GewO, MedienG)
   - External dispute resolution information
   - Link from footer to impressum.html

2. **Datenschutzerklärung / Privacy Policy (Mandatory)**
   - Full DSGVO/GDPR compliance for Austria/EU
   - Data processing purposes
   - Legal basis for processing (Art. 6 DSGVO)
   - Data categories collected
   - Data storage duration
   - Third-party services (CDNs, fonts, etc.)
   - User rights (access, correction, deletion, objection)
   - Contact information of responsible party
   - Information about Austrian Data Protection Authority
   - Cookie policy (if applicable)
   - Link from footer and contact form to datenschutz.html

3. **Content Preservation**
   - ALL content from the original website MUST be included
   - Preserve all text, sections, and information from the old site
   - Maintain all contact details exactly as they appear
   - Include all menu items, services, products, etc.
   - Keep the same page structure (home, about, services, contact, etc.)

4. **Branding & Credits**
   - Add client's logo to navigation (if available)
   - Include "Developed by DornerLabs" credit in footer
   - Link to https://dornerlabs.com with `rel="noopener noreferrer"`
   - Style credit link with hover effects

5. **Contact Forms**
   - Use simple mailto: links for contact forms
   - Format email with all form fields using `\r\n\r\n` for proper line breaks
   - Include datenschutz checkbox linking to privacy policy
   - No backend/server required - works everywhere

6. **Password Protection (Optional)**
   - Create `login.html` for demo access
   - Use sessionStorage for authentication
   - Add passwort check script to all protected pages
   - Document password in separate `PASSWORT.md` file

### Creating a New Client Demo

When creating a new client demo website, follow these steps:

1. **Analyze the existing client website:**
   - Note all sections and content
   - Extract contact information
   - Check for existing Impressum/Datenschutz (often missing!)
   - Document all services/products mentioned

2. **Create directory structure:**
   ```bash
   mkdir -p kunden-demos/[client-name]/{css,js,images}
   ```

3. **Build the demo:**
   - Use modern, responsive design (similar to demos/ examples)
   - Include ALL original content
   - Create proper navigation
   - Add modern features (mobile menu, animations, etc.)
   - Ensure DSGVO compliance with Impressum and Datenschutz pages

4. **Legal pages:**
   - Create `impressum.html` with all required business information
   - Create `datenschutz.html` with comprehensive DSGVO-compliant privacy policy
   - Link both pages prominently in footer
   - Add datenschutz link to contact form (with required checkbox)

5. **Branding & Forms:**
   - Add logo to navigation on all pages (use `assets/logo.jpg`)
   - Implement mailto: contact form with proper formatting
   - Add "Developed by DornerLabs" credit in footer
   - Make phone and email links clickable (tel: and mailto:)

6. **Password Protection:**
   - Create `login.html` with password form
   - Add authentication check to all pages (in `<head>`)
   - Set password in login.html (const CORRECT_PASSWORD)
   - Create `PASSWORT.md` documentation

7. **Test the demo:**
   - Check all links work (including logo, DornerLabs credit)
   - Test password protection (login/logout)
   - Verify mobile responsiveness
   - Test contact form (opens email client correctly)
   - Ensure legal pages are accessible
   - Confirm all original content is present
   - Check images load correctly

### Legal Compliance Notes

- **Austria/EU DSGVO Requirements**: All client demos must be fully compliant with DSGVO (General Data Protection Regulation)
- **Impressum Pflicht**: Austrian law requires an Impressum on all commercial websites (§ 5 ECG)
- **Datenschutz Pflicht**: Privacy policy required by DSGVO Art. 13-14
- **Security**: Always use HTTPS in production, secure forms, protect user data
- **Apple/iOS Compatibility**: Test on Safari and iOS devices for compatibility
- **Forms**: Contact forms must include datenschutz checkbox and link

### Example Client Demo: Cafe König

Location: `kunden-demos/cafe-koenig/`

**Original website**: http://www.cafe-koenig.at (outdated, missing legal pages)

**Demo features:**
- Modern, responsive design with coffee-themed colors
- All original content preserved (Geschichte, Kaffee ABC, Gutscheine, Fotogalerie)
- Complete Impressum with all legal requirements
- Comprehensive DSGVO-compliant Datenschutzerklärung
- Mobile-friendly navigation
- Contact form with mailto: integration (all form data goes to email client)
- Password protection system (login.html) - Default password: `koenig25`
- Logo integration in navigation on all pages
- Smooth animations and modern UX
- "Developed by DornerLabs" credit in footer with link to dornerlabs.com

**Files:**
- `index.html` - Main page with all sections
- `impressum.html` - Complete legal notice (ECG, UGB, GewO compliant)
- `datenschutz.html` - Full DSGVO-compliant privacy policy
- `login.html` - Password protection page
- `css/style.css` - Modern styling
- `js/script.js` - Interactive features (mailto form, logout, animations)
- `assets/logo.jpg` - Cafe König logo
- `assets/welcome_image.jpg` - Hero section image
- `BILDER-ANLEITUNG.md` - Image placement guide
- `PASSWORT.md` - Password system documentation

### Demo Sites
Each demo in `demos/` is a standalone website with:
- Independent HTML/CSS/JS files
- Industry-specific design and content
- Fully functional interactive elements
- Responsive layouts
- Can be used as templates for client projects

**Note**: The `demos/` directory contains generic portfolio demos, while `kunden-demos/` contains specific client pitch demos with real business information.

## Development Notes

- **Language**: Site is currently in German (lang="de")
- **Images**: Profile image is optimized WebP format at `assets/Pic.webp`
- **Icons**: Uses both Font Awesome (general icons) and Devicon (tech icons)
- **Performance**: Critical CSS is inlined in HTML head for faster initial paint
- **Accessibility**: Skip links, ARIA labels, and semantic HTML throughout
- **SEO**: Comprehensive meta tags, sitemap, and robots.txt included
