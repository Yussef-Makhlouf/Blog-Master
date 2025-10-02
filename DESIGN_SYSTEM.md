# Blog-Master Design System

This design system provides a clean, professional, and consistent visual identity for the Blog-Master website using TailwindCSS.

## Color Palette

Our color system uses a refined palette with carefully selected hues that work harmoniously together while maintaining excellent accessibility.

```css
:root {
  /* Main colors - Custom brand colors */
  --primary: #187e89;         /* Teal - Primary brand color */
  --primary-foreground: #ffffff; /* White text on primary */
  --primary-hover: #13656d;   /* Darker teal for hover states */
  --secondary: #da5f0a;       /* Orange - Secondary brand color */
  --secondary-foreground: #ffffff; /* White text on secondary */
  --secondary-hover: #b84f08; /* Darker orange for hover states */
  --accent: #f0f0f0;          /* Light gray for accents */
  --accent-foreground: #353535; /* Dark text on accent */
  
  /* Neutral colors - Refined grayscale */
  --background: #ffffff;
  --foreground: #353535;      /* Dark gray - Main text color */
  --muted: #f8f8f8;           /* Very light gray for backgrounds */
  --muted-foreground: #666666; /* Medium gray for secondary text */
  
  /* UI colors */
  --border: #e5e5e5;          /* Light gray borders */
  --input: #e5e5e5;           /* Input field borders */
  --ring: #187e89;            /* Teal - Focus ring matching primary */
  
  /* Status colors - More vibrant and distinct */
  --success: #2ecc71;         /* Emerald green */
  --success-light: #d1fae5;   /* Light green for backgrounds */
  --warning: #f1c40f;         /* Yellow */
  --warning-light: #fef3c7;   /* Light yellow for backgrounds */
  --destructive: #e74c3c;     /* Red */
  --destructive-light: #fee2e2; /* Light red for backgrounds */
  --info: #3498db;            /* Blue */
  --info-light: #dbeafe;      /* Light blue for backgrounds */
  
  /* Card colors */
  --card: #ffffff;
  --card-foreground: #353535; /* Dark gray */
  --card-muted: #f8f8f8;      /* Very light gray for card sections */
  
  /* Radius - Multiple options for variety */
  --radius-sm: 0.25rem;
  --radius: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
}

/* Dark mode colors - Add to your theme provider */
.dark {
  --primary: #187e89;         /* Teal - Primary brand color */
  --primary-foreground: #ffffff; /* White text on primary */
  --primary-hover: #1da1aa;   /* Lighter teal for hover states */
  --secondary: #da5f0a;       /* Orange - Secondary brand color */
  --secondary-foreground: #ffffff; /* White text on secondary */
  --secondary-hover: #e57329; /* Lighter orange for hover states */
  --accent: #333333;          /* Dark gray for accents */
  --accent-foreground: #f0f0f0; /* Light text on accent */
  
  --background: #1a1a1a;      /* Dark background */
  --foreground: #f0f0f0;      /* Light gray text */
  --muted: #2a2a2a;           /* Darker gray for backgrounds */
  --muted-foreground: #aaaaaa; /* Medium gray for secondary text */
  
  --border: #3a3a3a;          /* Darker borders */
  --input: #3a3a3a;           /* Input field borders */
  --ring: #187e89;            /* Teal - Focus ring matching primary */
  
  --card: #252525;            /* Card background */
  --card-foreground: #f0f0f0; /* Light gray text */
  --card-muted: #333333;      /* Darker gray for card sections */
}
```

## Color Usage Guidelines

### Primary Color (#187e89)
- Use for primary actions, key interactive elements, and important highlights
- Should be used sparingly to maintain its impact
- Works well with white text for optimal contrast

### Secondary Color (#da5f0a)
- Use for secondary actions and complementary interactive elements
- Provides a warm contrast to the cool primary color
- Also works well with white text

### Neutral Colors
- **Background (#ffffff)**: Main page background
- **Foreground (#353535)**: Primary text color with excellent readability
- **Muted (#f8f8f8)**: Subtle backgrounds and non-critical elements
- **Accent (#f0f0f0)**: For small decorative elements and subtle highlights

### Status Colors
- **Success (#2ecc71)**: Positive actions, confirmations, and success states
- **Warning (#f1c40f)**: Cautionary messages and attention-required items
- **Destructive (#e74c3c)**: Error states, destructive actions, and warnings
- **Info (#3498db)**: Informational messages and neutral notifications

## Elevation System

A consistent elevation system using shadows to create depth and hierarchy:

```css
:root {
  /* Shadow system for elevation */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

/* Dark mode shadows - more subtle */
.dark {
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.4);
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.3), 0 8px 10px -6px rgb(0 0 0 / 0.3);
}
```

## Typography

Our typography system uses the custom LamaSans font family with carefully defined sizes and weights.

```css
/* LamaSans Font Declarations */
@font-face {
  font-family: 'LamaSans';
  src: url('/fonts/LamaSans-Medium.woff2') format('woff2'),
       url('/fonts/LamaSans-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'LamaSans';
  src: url('/fonts/LamaSans-SemiBold.woff2') format('woff2'),
       url('/fonts/LamaSans-SemiBold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

:root {
  /* Font family variables */
  --font-sans: 'LamaSans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-heading: var(--font-sans);
  --font-body: var(--font-sans);
  
  /* Line heights */
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
  
  /* Letter spacing */
  --letter-spacing-tight: -0.025em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.025em;
  
  /* Font weights */
  --font-weight-light: 200; /* ExtraLight */
  --font-weight-normal: 400;
  --font-weight-medium: 500; /* Medium */
  --font-weight-semibold: 600; /* SemiBold */
  --font-weight-bold: 700; /* Bold */
}
```

### Headings

```css
/* Heading 1 - Page Titles */
.h1 {
  @apply text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl;
  @apply mb-6 font-heading leading-tight;
}

/* Heading 2 - Section Headers */
.h2 {
  @apply text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl;
  @apply mb-4 font-heading leading-tight;
}

/* Heading 3 - Subsections */
.h3 {
  @apply text-xl font-semibold tracking-tight md:text-2xl lg:text-3xl;
  @apply mb-3 font-heading leading-snug;
}

/* Heading 4 */
.h4 {
  @apply text-lg font-medium tracking-tight md:text-xl;
  @apply mb-2 font-heading leading-snug;
}

/* Heading 5 */
.h5 {
  @apply text-base font-medium md:text-lg;
  @apply mb-2 font-heading;
}
```

### Body Text

```css
/* Regular paragraph text */
.text-body {
  @apply text-base leading-relaxed font-normal text-foreground;
  @apply mb-4;
}

/* Small text for captions, footnotes */
.text-small {
  @apply text-sm leading-normal text-muted-foreground;
}

/* Lead paragraph (introductory text) */
.text-lead {
  @apply text-lg md:text-xl leading-relaxed text-foreground/90;
  @apply mb-6 max-w-prose;
}

/* Large display text for hero sections */
.text-display {
  @apply text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight;
  @apply leading-tight;
}

/* Overline text (small uppercase text often used above headings) */
.text-overline {
  @apply text-xs font-medium uppercase tracking-widest text-muted-foreground;
  @apply mb-2;
}
```

## Spacing System

A consistent spacing system helps maintain rhythm and hierarchy throughout the interface.

```css
:root {
  /* Base spacing unit (4px) */
  --spacing-unit: 0.25rem;
  
  /* Spacing scale */
  --spacing-0: 0;
  --spacing-1: calc(var(--spacing-unit) * 1);  /* 4px */
  --spacing-2: calc(var(--spacing-unit) * 2);  /* 8px */
  --spacing-3: calc(var(--spacing-unit) * 3);  /* 12px */
  --spacing-4: calc(var(--spacing-unit) * 4);  /* 16px */
  --spacing-5: calc(var(--spacing-unit) * 5);  /* 20px */
  --spacing-6: calc(var(--spacing-unit) * 6);  /* 24px */
  --spacing-8: calc(var(--spacing-unit) * 8);  /* 32px */
  --spacing-10: calc(var(--spacing-unit) * 10); /* 40px */
  --spacing-12: calc(var(--spacing-unit) * 12); /* 48px */
  --spacing-16: calc(var(--spacing-unit) * 16); /* 64px */
  --spacing-20: calc(var(--spacing-unit) * 20); /* 80px */
  --spacing-24: calc(var(--spacing-unit) * 24); /* 96px */
  
  /* Component-specific spacing */
  --container-padding: var(--spacing-4);
  --section-spacing: var(--spacing-16);
  --card-padding: var(--spacing-6);
  --input-padding: var(--spacing-3) var(--spacing-4);
}

/* Responsive adjustments */
@media (min-width: 768px) {
  :root {
    --container-padding: var(--spacing-6);
    --section-spacing: var(--spacing-24);
    --card-padding: var(--spacing-8);
  }
}
```

## Components

### Buttons

Our button system includes multiple variants with consistent styling and subtle hover effects.

```css
/* Base button styles */
.btn {
  @apply inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none;
}

/* Button sizes */
.btn-sm {
  @apply h-8 px-3 text-xs;
}

.btn-md {
  @apply h-10 px-4 py-2;
}

.btn-lg {
  @apply h-12 px-6 text-base;
}

/* Button with icon */
.btn-icon {
  @apply gap-2;
}
```

#### Primary Button

``jsx
<button className="btn btn-md bg-primary text-primary-foreground shadow-sm hover:bg-primary-hover active:translate-y-0.5 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary disabled:active:translate-y-0">
  Primary Button
</button>
```

#### Secondary Button

``jsx
<button className="btn btn-md bg-secondary text-secondary-foreground hover:bg-secondary-hover active:translate-y-0.5 transition-all duration-150">
  Secondary Button
</button>
```

#### Outline Button

``jsx
<button className="btn btn-md border border-border bg-transparent text-foreground hover:bg-secondary active:translate-y-0.5 transition-all duration-150">
  Outline Button
</button>
```

#### Ghost Button

``jsx
<button className="btn btn-md bg-transparent text-foreground hover:bg-secondary active:translate-y-0.5 transition-all duration-150">
  Ghost Button
</button>
```

#### Disabled Button

``jsx
<button className="btn btn-md bg-primary text-white opacity-50 cursor-not-allowed" disabled>
  Disabled Button
</button>
```

#### Button with Icon

``jsx
<button className="btn btn-md btn-icon bg-primary text-white shadow-sm hover:bg-primary-hover active:translate-y-0.5 transition-all duration-150">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus">
    <path d="M5 12h14"></path>
    <path d="M12 5v14"></path>
  </svg>
  Add Item
</button>
```

### Cards

Our card components use subtle shadows and consistent spacing to create a clean, modern look.

```css
/* Base card styles */
.card {
  @apply bg-card text-card-foreground rounded-lg border border-border overflow-hidden;
  @apply transition-all duration-200;
  box-shadow: var(--shadow-sm);
}

.card:hover {
  box-shadow: var(--shadow-md);
}

.card-header {
  @apply flex flex-col space-y-1.5 p-6;
}

.card-title {
  @apply text-lg font-semibold leading-none tracking-tight;
}

.card-description {
  @apply text-sm text-muted-foreground;
}

.card-content {
  @apply p-6 pt-0;
}

.card-footer {
  @apply flex items-center p-6 pt-0;
}
```

#### Basic Card

``jsx
<div className="card">
  <div className="card-header">
    <h3 className="card-title">Card Title</h3>
    <p className="card-description">Card description with supporting text</p>
  </div>
  <div className="card-content">
    <p>This is the main content area of the card. It can contain various elements like text, images, or other components.</p>
  </div>
  <div className="card-footer">
    <button className="btn btn-md bg-primary text-white hover:bg-primary-hover active:translate-y-0.5 transition-all duration-150">
      Action
    </button>
  </div>
</div>
```

#### Interactive Card

``jsx
<div className="card group hover:border-primary/50">
  <div className="card-header">
    <div className="flex items-center justify-between">
      <h3 className="card-title group-hover:text-primary transition-colors">Interactive Card</h3>
      <span className="text-muted-foreground text-sm">Featured</span>
    </div>
    <p className="card-description">Cards with hover interactions</p>
  </div>
  <div className="card-content">
    <p>This card has hover effects that highlight important elements and provide visual feedback.</p>
  </div>
  <div className="card-footer justify-between">
    <span className="text-sm text-muted-foreground">Last updated 3 days ago</span>
    <button className="btn btn-sm bg-transparent text-primary hover:bg-primary-light hover:text-primary-hover active:translate-y-0.5 transition-all duration-150">
      Learn More →
    </button>
  </div>
</div>
```

### Form Elements

Our form elements feature clean styling with clear focus states and validation feedback.

```css
/* Input base styles */
.input {
  @apply flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm;
  @apply placeholder:text-muted-foreground;
  @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2;
  @apply disabled:cursor-not-allowed disabled:opacity-50;
  @apply transition-all duration-150;
}

/* Label styles */
.label {
  @apply text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70;
  @apply mb-2 block;
}

/* Error message */
.error-message {
  @apply text-sm text-destructive mt-1;
}

/* Input with validation states */
.input-error {
  @apply border-destructive focus-visible:ring-destructive;
}

.input-success {
  @apply border-success focus-visible:ring-success;
}
```

#### Input Field

``jsx
<div className="space-y-2">
  <label htmlFor="email" className="label">Email</label>
  <input type="email" id="email" className="input" placeholder="Enter your email" />
</div>
```

#### Input with Error

``jsx
<div className="space-y-2">
  <label htmlFor="password" className="label">Password</label>
  <input type="password" id="password" className="input input-error" placeholder="Enter your password" />
  <p className="error-message">Password must be at least 8 characters</p>
</div>
```

## Micro-interactions and Transitions

Add subtle animations to enhance the user experience without being distracting:

```css
/* Transition variables */
:root {
  --transition-fast: 150ms;
  --transition-normal: 250ms;
  --transition-slow: 350ms;
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Common transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: var(--ease-default);
  transition-duration: var(--transition-normal);
}

.transition-transform {
  transition-property: transform;
  transition-timing-function: var(--ease-out);
  transition-duration: var(--transition-fast);
}

.transition-opacity {
  transition-property: opacity;
  transition-timing-function: var(--ease-linear);
  transition-duration: var(--transition-fast);
}

/* Hover/focus effects */
.hover-lift {
  @apply transition-transform;
}

.hover-lift:hover {
  transform: translateY(-2px);
}

.hover-lift:active {
  transform: translateY(0);
}

/* Fade in animation */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn var(--transition-normal) var(--ease-out);
}