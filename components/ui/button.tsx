import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "btn inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-sm hover:bg-primary-hover hover:shadow-md active:translate-y-0.5 active:shadow-sm',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-md focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 active:translate-y-0.5 active:shadow-sm',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground active:translate-y-0.5 active:shadow-sm',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary-hover hover:shadow-md active:translate-y-0.5 active:shadow-sm',
        ghost:
          'hover:bg-accent hover:text-accent-foreground active:translate-y-0.5',
        link: 'text-primary underline-offset-4 hover:underline hover:text-primary-hover transition-colors',
      },
      size: {
        default: 'btn-md h-10 px-5 py-2 has-[>svg]:px-4',
        sm: 'btn-sm h-8 rounded-md gap-1.5 px-3.5 has-[>svg]:px-3 text-xs',
        lg: 'btn-lg h-12 rounded-md px-6 has-[>svg]:px-5 text-base',
        icon: 'size-10 p-2 hover:bg-accent',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }