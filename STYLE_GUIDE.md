# Binary Builders Style Guide

## Table of Contents
- [HTML Guidelines](#html-guidelines)
- [SCSS Structure](#scss-structure)
- [Variables & Theming](#variables-and-theming)
- [Helper Classes](#helper-classes)
- [Components](#components)

## HTML Guidelines

### Semantic Structure
- Use semantic HTML5 elements (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Maintain proper heading hierarchy (h1-h6)
- Use descriptive `alt` attributes for images
- Implement ARIA labels where necessary

### Code Style
- Use 2-space indentation
- Use double quotes for attributes
- Order attributes consistently: id, class, data-*
- Keep markup clean and minimal

## SCSS Structure

### File Organization
```scss
assets/
└── scss/
    ├── abstracts/
    │   ├── _variables.scss    // Global variables
    │   ├── _functions.scss    // Custom functions
    │   ├── _mixins.scss      // Reusable mixins
    │   └── _helpers.scss     // Utility classes
    ├── base/
    │   ├── _reset.scss       // CSS reset
    │   ├── _typography.scss  // Typography rules
    │   └── _base.scss        // Base styles
    ├── components/
    │   ├── _buttons.scss
    │   ├── _cards.scss
    │   └── _navigation.scss
    ├── layouts/
    │   ├── _grid.scss
    │   ├── _header.scss
    │   └── _footer.scss
    └── main.scss             // Main entry file
```

## Variables and Theming

### Colors
```scss
// Brand Colors
$color-primary: #000000;
$color-secondary: #FFFFFF;
$color-accent: #007AFF;

// Semantic Colors
$color-text: #333333;
$color-text-light: #666666;
$color-background: #FFFFFF;
$color-border: #EEEEEE;

// Status Colors
$color-success: #28A745;
$color-error: #DC3545;
$color-warning: #FFC107;
$color-info: #17A2B8;
```

### Typography
```scss
// Font Families
$font-primary: 'Inter', sans-serif;
$font-secondary: 'Arial', sans-serif;

// Font Sizes
$font-size-base: 16px;
$font-size-scale: 1.250;

$font-size-xs: 0.75rem;    // 12px
$font-size-sm: 0.875rem;   // 14px
$font-size-md: 1rem;       // 16px
$font-size-lg: 1.25rem;    // 20px
$font-size-xl: 1.5rem;     // 24px
$font-size-2xl: 2rem;      // 32px

// Font Weights
$font-weight-light: 300;
$font-weight-regular: 400;
$font-weight-medium: 500;
$font-weight-bold: 700;
```

### Spacing
```scss
$spacing-unit: 8px;

$spacing-xs: $spacing-unit;     // 8px
$spacing-sm: $spacing-unit * 2; // 16px
$spacing-md: $spacing-unit * 3; // 24px
$spacing-lg: $spacing-unit * 4; // 32px
$spacing-xl: $spacing-unit * 5; // 40px
```

### Breakpoints
```scss
$breakpoints: (
  'sm': 576px,
  'md': 768px,
  'lg': 992px,
  'xl': 1200px,
  '2xl': 1400px
);
```

## Helper Classes

### Spacing Helpers
```scss
// Margin
.m-0 { margin: 0; }
.m-1 { margin: $spacing-xs; }
.m-2 { margin: $spacing-sm; }
.m-3 { margin: $spacing-md; }
.m-4 { margin: $spacing-lg; }
.m-5 { margin: $spacing-xl; }

// Padding (similar pattern)
.p-0 { padding: 0; }
.p-1 { padding: $spacing-xs; }
// ... etc
```

### Typography Helpers
```scss
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.text-primary { color: $color-primary; }
.text-secondary { color: $color-secondary; }
.text-accent { color: $color-accent; }
```

### Layout Helpers
```scss
.d-flex { display: flex; }
.d-grid { display: grid; }
.d-none { display: none; }

.flex-column { flex-direction: column; }
.flex-row { flex-direction: row; }
.justify-center { justify-content: center; }
.align-center { align-items: center; }
```

### Visibility Helpers
```scss
.hidden { display: none !important; }
.visible { display: block !important; }
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
```

## Components

### Buttons
Standard button variants:
```scss
.btn {
  display: inline-block;
  padding: $spacing-sm $spacing-md;
  border-radius: 4px;
  font-weight: $font-weight-medium;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &--primary {
    background-color: $color-primary;
    color: white;
  }

  &--secondary {
    background-color: $color-secondary;
    color: $color-primary;
    border: 1px solid $color-primary;
  }

  &--accent {
    background-color: $color-accent;
    color: white;
  }
}
```

### Grid System
Using CSS Grid:
```scss
.grid {
  display: grid;
  gap: $spacing-md;
  
  &--2-cols { grid-template-columns: repeat(2, 1fr); }
  &--3-cols { grid-template-columns: repeat(3, 1fr); }
  &--4-cols { grid-template-columns: repeat(4, 1fr); }
}
```

## Best Practices

1. Follow BEM naming convention
   - Block: `.block`
   - Element: `.block__element`
   - Modifier: `.block--modifier` or `.block__element--modifier`

2. Use mobile-first approach
   ```scss
   .element {
     // Mobile styles first
     @include media-breakpoint-up(md) {
       // Tablet styles
     }
     @include media-breakpoint-up(lg) {
       // Desktop styles
     }
   }
   ```

3. Keep specificity low
   - Avoid deep nesting (max 3 levels)
   - Use classes instead of IDs for styling
   - Avoid !important unless absolutely necessary

4. Optimize performance
   - Use CSS custom properties for dynamic values
   - Minimize redundant code
   - Group related properties
   - Use shorthand properties where appropriate

5. Maintain consistency
   - Use the defined variables
   - Follow the established patterns
   - Document any exceptions or special cases 