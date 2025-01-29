# Arizona State Information Website

## Project Overview
This website provides comprehensive information about Arizona and its major cities. The site features responsive design, semantic HTML5 elements, and follows modern web development practices.

## Project Structure
```
arizona-website/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── form-validation.js
├── images/
│   ├── headers/
│   │   ├── arizona-header.jpg
│   │   ├── phoenix-header.jpg
│   │   ├── tucson-header.jpg
│   │   ├── scottsdale-header.jpg
│   │   └── contact-header.jpg
│   └── content/
│       └── [content images]
└── pages/
    ├── phoenix.html
    ├── tucson.html
    ├── scottsdale.html
    └── contact.html
```

## Features
- Responsive design for all screen sizes
- Two distinct layouts:
    - Homepage layout (Layout #1)
    - Interior page layout (Layout #2)
- JavaScript form validation
- Semantic HTML5 elements
- Consistent navigation system
- City information pages with:
    - Population statistics
    - Incorporation dates
    - Regional information
    - City classifications
    - Income level comparisons

## Technical Specifications

### HTML
- Semantic elements: header, nav, section, aside
- Form validation
- Proper heading hierarchy
- Accessibility features
- Responsive images with alt text

### CSS
- External stylesheet
- Mobile-first responsive design
- Custom properties for colors and typography
- Hover effects for navigation
- Float and positioning properties
- Multiple selector types:
    - Element selectors
    - Class selectors
    - ID selectors

### JavaScript
- Form validation for:
    - Email matching
    - Required fields
    - Input formatting
    - Error messaging

## Page Layouts
1. **Homepage Layout (Layout #1)**
    - Full-width header
    - Top navigation
    - Main content area
    - Right sidebar

2. **Interior Page Layout (Layout #2)**
    - Full-width header
    - Left sidebar navigation
    - Main content area
    - Right sidebar

## Images
- Header images
- Feature images
- All images should be web-optimized
- Required formats: JPG, PNG
- Alt text provided for accessibility

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd arizona-website
   ```

2. No build process required - pure HTML, CSS, and JavaScript
3. Open index.html in a web browser

## Development Guidelines
1. Follow HTML5 semantic markup
2. Maintain consistent spacing and indentation
3. Keep CSS organized by component
4. Comment JavaScript functions
5. Optimize images before adding to the project
6. Test across different browsers and devices

## Git Workflow
1. Create feature branch
2. Make changes
3. Test locally
4. Commit changes with descriptive messages
5. Push to remote repository
6. Create pull request
7. Merge after review

## Deployment
The site is configured for GitLab Pages deployment:
1. Automatic deployment on push to main branch
2. Accessible at: [GitLab Pages URL]