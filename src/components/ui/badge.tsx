import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  `inline-flex items-center font-medium transition-colors select-none
  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2`,
  {
    variants: {
      variant: {
        default: 'bg-primary/10 text-primary hover:bg-primary/20',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        outline: 'border border-border text-foreground hover:bg-accent',
      },
      size: {
        default: 'px-3 py-1 text-xs',
        sm: 'px-2 py-0.5 text-xs',
        lg: 'px-4 py-2 text-sm',
        xl: 'px-4 py-2 text-base',
      },
      shape: {
        default: 'rounded-md',
        rounded: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      shape: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, shape, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size, shape }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
