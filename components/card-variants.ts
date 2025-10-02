// Utility functions for card variant styling
export const getCardVariantStyles = (variant: string, index: number) => {
  const variants: Record<string, Record<number, string>> = {
    alternating: {
      0: "row-span-2",
      1: "col-span-2",
      2: "row-span-2",
      3: "col-span-2",
    },
    featured: {
      0: "col-span-2 row-span-2",
    },
    staggered: {
      1: "mt-8",
      3: "mt-8",
      5: "mt-8",
    },
    mixed: {
      0: "col-span-2",
      4: "col-span-2",
    },
  };

  return variants[variant]?.[index] || "";
};

// Card size variations
export const cardSizes = {
  small: "h-48",
  medium: "h-64",
  large: "h-80",
  extraLarge: "h-96",
};

// Card style variations
export const cardStyles = {
  elevated: "shadow-lg hover:shadow-xl",
  outlined: "border-2 border-primary",
  filled: "bg-primary/10",
  gradient: "bg-gradient-to-br from-primary/20 to-secondary/20",
};