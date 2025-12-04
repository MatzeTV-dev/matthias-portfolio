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
└── demos/                 # Portfolio demo websites
    ├── autohaus/          # Car dealership demo
    ├── baeckerei/         # Bakery demo
    ├── cafe/              # Cafe demo
    ├── friseur/           # Hair salon demo
    ├── handwerk/          # Craftsman demo
    └── restaurant/        # Restaurant demo
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

## Development Notes

- **Language**: Site is currently in German (lang="de")
- **Images**: Profile image is optimized WebP format at `assets/Pic.webp`
- **Icons**: Uses both Font Awesome (general icons) and Devicon (tech icons)
- **Performance**: Critical CSS is inlined in HTML head for faster initial paint
- **Accessibility**: Skip links, ARIA labels, and semantic HTML throughout
- **SEO**: Comprehensive meta tags, sitemap, and robots.txt included
