import type { ComponentProps } from "react"
import { tv, type VariantProps } from "tailwind-variants"
import { tvcn } from "#/lib/utils"

export const buttonVariants = tv({
  base: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-none cursor-pointer active:scale-95 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:text-[1.5em] shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  variants: {
    variant: {
      primary: "bg-primary-bg text-primary-fg hover:bg-primary-bg/90",
      destructive:
        "bg-destructive-bg text-white hover:bg-destructive-bg/90 focus-visible:ring-destructive-bg/20 dark:focus-visible:ring-destructive-bg/40 dark:bg-destructive-bg/60",
      outline:
        "border bg-main-bg shadow-xs hover:bg-accent-bg hover:text-accent-fg dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
      secondary: "bg-secondary-bg text-secondary-fg hover:bg-secondary-bg/80",
      ghost:
        "hover:bg-accent-bg hover:text-accent-fg dark:hover:bg-accent-bg/50",
      link: "text-primary-fg underline-offset-4 hover:underline",
    },
    size: {
      xs: "h-8  rounded-md px-4 text-xs",
      sm: "h-10 rounded-md px-4 text-sm",
      md: "h-12 rounded-md px-6 text-base",
      lg: "h-14 rounded-lg px-6 text-lg",
      "icon-xs": "size-8 text-xs rounded-md",
      "icon-sm": "size-10 text-sm rounded-md",
      "icon-md": "size-12 text-md rounded-md",
      "icon-lg": "size-14 text-lg rounded-lg",
      "icon-xl": "size-16 text-xl rounded-xl",
      "icon-2xl": "size-20 text-2xl rounded-2xl",
      "icon-3xl": "size-24 text-3xl rounded-3xl",
    },
  },
  defaultVariants: {
    variant: "ghost",
    size: "md",
  },
})

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      data-slot="button"
      className={tvcn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}
