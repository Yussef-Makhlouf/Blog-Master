# Grid Layout Variants Documentation

This document explains the different grid layout variants available and how to use them for creating visually appealing card layouts.

## Available Variants

### 1. Default
The standard grid layout with equal-sized items.

```jsx
<GridLayout columns={3} gap="md" variant="default">
  {/* Cards */}
</GridLayout>
```

### 2. Masonry
Creates a masonry layout where cards flow vertically based on their content height.

```jsx
<GridLayout columns={3} gap="md" variant="masonry">
  {/* Cards with varying heights */}
</GridLayout>
```

### 3. Alternating
Alternates card styles and positions for visual interest.

```jsx
<GridLayout columns={3} gap="md" variant="alternating">
  {/* Cards will alternate in size and position */}
</GridLayout>
```

### 4. Featured
Highlights the first card as a featured item with larger size.

```jsx
<GridLayout columns={3} gap="md" variant="featured">
  {/* First card will be larger and more prominent */}
</GridLayout>
```

### 5. Staggered
Creates a brick-like pattern with staggered card positions.

```jsx
<GridLayout columns={3} gap="md" variant="staggered">
  {/* Cards will have staggered vertical positions */}
</GridLayout>
```

### 6. Mixed
Combines different card sizes in a single grid.

```jsx
<GridLayout columns={3} gap="md" variant="mixed">
  {/* Every 4th card will span 2 columns */}
</GridLayout>
```

## Best Practices

1. **Choose the right variant for your content**:
   - Use "featured" for highlighting important content
   - Use "masonry" for content with varying heights
   - Use "staggered" for a more dynamic, editorial feel
   - Use "mixed" for showcasing different content types

2. **Consider the number of items**:
   - "Featured" works best with 4+ items
   - "Staggered" works best with 6+ items
   - "Mixed" works best with 8+ items

3. **Responsive behavior**:
   - All variants adapt to different screen sizes
   - Test on mobile, tablet, and desktop
   - Consider using fewer columns on smaller screens

## Example Implementations

### Blog Page with Featured Layout
```jsx
<GridLayout columns={3} gap="lg" variant="featured">
  <ArticleCard 
    title="Featured Article" 
    excerpt="This is the featured article that will be larger"
    // ... other props
  />
  <ArticleCard 
    title="Regular Article 1" 
    excerpt="This is a regular article"
    // ... other props
  />
  <ArticleCard 
    title="Regular Article 2" 
    excerpt="This is another regular article"
    // ... other props
  />
</GridLayout>
```

### Services Page with Alternating Layout
```jsx
<GridLayout columns={3} gap="md" variant="alternating">
  <ServiceCard 
    title="Service 1" 
    description="Service description"
    variant="featured"
    // ... other props
  />
  <ServiceCard 
    title="Service 2" 
    description="Service description"
    variant="horizontal"
    // ... other props
  />
  <ServiceCard 
    title="Service 3" 
    description="Service description"
    variant="default"
    // ... other props
  />
</GridLayout>
```

## Customization

You can customize the grid further by:

1. Adjusting the number of columns
2. Changing the gap size
3. Adding custom CSS classes
4. Combining with card variants for more visual diversity

```jsx
<GridLayout 
  columns={2} 
  gap="lg" 
  variant="staggered"
  className="my-custom-grid"
>
  {/* Cards */}
</GridLayout>
```