# Blog-Master Design System

This design system provides a clean, professional, and consistent visual identity for the Blog-Master website using TailwindCSS.

## Color Palette

Our color system uses a refined palette with carefully selected hues that work harmoniously together while maintaining excellent accessibility.

```css
:root {
  /* Main colors - Refined blue with higher contrast */
  --primary: #2563eb;         /* Blue 600 - More vibrant primary */
  --primary-hover: #1d4ed8;   /* Blue 700 - Deeper hover state */
  --primary-light: #dbeafe;   /* Blue 100 - For subtle backgrounds */
  --secondary: #f8fafc;       /* Slate 50 - Lighter, more modern secondary */
  --secondary-hover: #f1f5f9; /* Slate 100 - Subtle hover state */
  --accent: #8b5cf6;          /* Violet 500 */
  --accent-hover: #7c3aed;    /* Violet 600 - Deeper hover state */
  
  /* Neutral colors - More refined grayscale */
  --background: #ffffff;
  --foreground: #0f172a;      /* Slate 900 - Slightly softer than pure black */
  --muted: #f8fafc;           /* Slate 50 */
  --muted-foreground: #64748b; /* Slate 500 - Better contrast for accessibility */
  
  /* UI colors */
  --border: #e2e8f0;          /* Slate 200 - Softer borders */
  --input: #e2e8f0;           /* Slate 200 */
  --ring: #bfdbfe;            /* Blue 200 - Subtle focus ring */
  
  /* Status colors - More vibrant and distinct */
  --success: #10b981;         /* Emerald 500 */
  --success-light: #d1fae5;   /* Emerald 100 - For backgrounds */
  --warning: #f59e0b;         /* Amber 500 */
  --warning-light: #fef3c7;   /* Amber 100 - For backgrounds */
  --destructive: #ef4444;     /* Red 500 */
  --destructive-light: #fee2e2; /* Red 100 - For backgrounds */
  --info: #3b82f6;            /* Blue 500 */
  --info-light: #dbeafe;      /* Blue 100 - For backgrounds */
  
  /* Card colors */
  --card: #ffffff;
  --card-foreground: #0f172a; /* Slate 900 */
  --card-muted: #f8fafc;      /* Slate 50 - For card sections */
  
  /* Radius - Multiple options for variety */
  --radius-sm: 0.25rem;
  --radius: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
}

/* Dark mode colors - Add to your theme provider */
.dark {
  --primary: #3b82f6;         /* Blue 500 - Brighter in dark mode */
  --primary-hover: #2563eb;   /* Blue 600 */
  --primary-light: #1e3a8a;   /* Blue 900 - Dark background with blue tint */
  --secondary: #1e293b;       /* Slate 800 */
  --secondary-hover: #334155; /* Slate 700 */
  --accent: #8b5cf6;          /* Violet 500 */
  --accent-hover: #7c3aed;    /* Violet 600 */
  
  --background: #0f172a;      /* Slate 900 */
  --foreground: #f8fafc;      /* Slate 50 */
  --muted: #1e293b;           /* Slate 800 */
  --muted-foreground: #94a3b8; /* Slate 400 */
  
  --border: #334155;          /* Slate 700 */
  --input: #1e293b;           /* Slate 800 */
  --ring: #1d4ed8;            /* Blue 700 */
  
  --card: #1e293b;            /* Slate 800 */
  --card-foreground: #f8fafc; /* Slate 50 */
  --card-muted: #0f172a;      /* Slate 900 */
}
```

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

```jsx
<button className="btn btn-md bg-primary text-white shadow-sm hover:bg-primary-hover active:translate-y-0.5 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary disabled:active:translate-y-0">
  Primary Button
</button>
```

#### Secondary Button

```jsx
<button className="btn btn-md bg-secondary text-foreground hover:bg-secondary-hover active:translate-y-0.5 transition-all duration-150">
  Secondary Button
</button>
```

#### Outline Button

```jsx
<button className="btn btn-md border border-border bg-transparent text-foreground hover:bg-secondary active:translate-y-0.5 transition-all duration-150">
  Outline Button
</button>
```

#### Ghost Button

```jsx
<button className="btn btn-md bg-transparent text-foreground hover:bg-secondary active:translate-y-0.5 transition-all duration-150">
  Ghost Button
</button>
```

#### Disabled Button

```jsx
<button className="btn btn-md bg-primary text-white opacity-50 cursor-not-allowed" disabled>
  Disabled Button
</button>
```

#### Button with Icon

```jsx
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

```jsx
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

```jsx
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

```jsx
<div className="space-y-2">
  <label htmlFor="email" className="label">Email</label>
  <input type="email" id="email" className="input" placeholder="Enter your email" />
</div>
```

#### Input with Error

```jsx
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
```
</button>
```

#### Disabled Button

```jsx
<button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm opacity-50 cursor-not-allowed" disabled>
  Disabled Button
</button>
```

### Cards

#### Basic Card

```jsx
<div className="rounded-lg border border-border bg-card p-6 shadow-sm">
  <div className="mb-4">
    <h3 className="text-lg font-semibold">Card Title</h3>
    <p className="text-sm text-muted-foreground">Card description or subtitle</p>
  </div>
  <div className="space-y-4">
    <p>Card content goes here.</p>
  </div>
  <div className="mt-6 pt-4 border-t border-border flex justify-between items-center">
    <span className="text-sm text-muted-foreground">Footer text</span>
    <button className="text-sm text-primary hover:underline">Action</button>
  </div>
</div>
```

### Forms

#### Input Field

```jsx
<div className="space-y-2">
  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
    Email
  </label>
  <input 
    type="email" 
    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    placeholder="Enter your email"
  />
</div>
```

#### Input with Error

```jsx
<div className="space-y-2">
  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
    Email
  </label>
  <input 
    type="email" 
    className="flex h-10 w-full rounded-md border border-destructive bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-destructive focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    placeholder="Enter your email"
  />
  <p className="text-sm text-destructive">Please enter a valid email address</p>
</div>
```

### Navigation

#### Navbar

```jsx
<nav className="border-b border-border bg-background">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 justify-between">
      <div className="flex">
        <div className="flex flex-shrink-0 items-center">
          <span className="text-xl font-semibold">Logo</span>
        </div>
        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
          <a href="#" className="inline-flex items-center border-b-2 border-primary px-1 pt-1 text-sm font-medium text-foreground">Home</a>
          <a href="#" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-muted-foreground hover:border-border hover:text-foreground">About</a>
          <a href="#" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-muted-foreground hover:border-border hover:text-foreground">Services</a>
          <a href="#" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-muted-foreground hover:border-border hover:text-foreground">Contact</a>
        </div>
      </div>
      <div className="flex items-center">
        <button className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-hover">
          Sign In
        </button>
      </div>
    </div>
  </div>
</nav>
```

#### Sidebar

```jsx
<div className="flex h-screen">
  <div className="w-64 bg-background border-r border-border">
    <div className="flex h-16 items-center border-b border-border px-4">
      <span className="text-lg font-semibold">Dashboard</span>
    </div>
    <nav className="space-y-1 px-2 py-4">
      <a href="#" className="group flex items-center rounded-md px-2 py-2 text-sm font-medium bg-primary text-white">
        <svg className="mr-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
        Dashboard
      </a>
      <a href="#" className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-foreground hover:bg-secondary hover:text-foreground">
        <svg className="mr-3 h-5 w-5 text-muted-foreground group-hover:text-foreground" viewBox="0 0 20 20" fill="currentColor">
          <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
          <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
        Projects
      </a>
    </nav>
  </div>
  <div className="flex-1 overflow-auto p-6">
    <!-- Main content -->
  </div>
</div>
```

## Utilities

### Spacing

```css
/* Consistent spacing scale */
.space-xs {
  @apply p-2;
}

.space-sm {
  @apply p-4;
}

.space-md {
  @apply p-6;
}

.space-lg {
  @apply p-8;
}

.space-xl {
  @apply p-10;
}

/* Margin utilities */
.mt-section {
  @apply mt-12;
}

.mb-section {
  @apply mb-12;
}

/* Gap utilities */
.gap-items {
  @apply gap-6;
}

.gap-items-sm {
  @apply gap-4;
}
```

### Borders & Shadows

```css
/* Border styles */
.border-standard {
  @apply border border-border rounded-md;
}

.border-card {
  @apply border border-border rounded-lg;
}

/* Shadow styles */
.shadow-card {
  @apply shadow-sm;
}

.shadow-dropdown {
  @apply shadow-md;
}

.shadow-modal {
  @apply shadow-lg;
}
```

## Implementation Guidelines

1. **Consistency**: Always use the defined color variables and utility classes to maintain visual consistency.

2. **Accessibility**: Ensure sufficient color contrast between text and background colors.

3. **Responsiveness**: Use responsive utilities (`sm:`, `md:`, `lg:`, `xl:`) to adapt layouts for different screen sizes.

4. **Component Structure**: Follow the component structure patterns shown in the examples.

5. **Spacing**: Use the defined spacing utilities consistently throughout the application.

6. **Typography**: Stick to the defined typography scale for all text elements.

7. **States**: Implement consistent hover, focus, and active states for interactive elements.

8. **Dark Mode**: If implementing dark mode, use the Tailwind dark mode variant (`dark:`) with appropriate color adjustments.