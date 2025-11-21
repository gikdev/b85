import { tv } from "tailwind-variants"

const page = tv({ base: "flex flex-col h-dvh" })

const btnIcon = tv({
  base: `
    flex items-center justify-center
    cursor-pointer disabled:cursor-not-allowed
    disabled:opacity-50 
    active:scale-95
    [&_svg]:text-[1.5em]
  `,
  variants: {
    size: {
      desktop: "size-8 p-1 rounded-sm-elements", // icon size = 24
      md: "size-12 p-2 rounded-sm-elements", // icon size = 32
      input: "size-14 p-1 rounded-sm-elements", // icon size = 24
      lg: "size-16 p-4 rounded-sm-elements", // icon size = 32
      xl: "size-24 p-6 rounded-xl-elements", // icon size = 48
    },
    theme: {
      glass: `
        text-muted-fg hover:text-main-fg disabled:hover:text-muted-fg
        bg-transparent hover:bg-secondary-bg disabled:hover:bg-transparent 
      `,
      brand: `
        bg-brand-600 hover:bg-brand-700 disabled:bg-tusi-700 disabled:hover:bg-tusi-700
        text-tusi-100 disabled:text-tusi-400
      `,
      inputish: `
        text-tusi-400 hover:text-tusi-100 disabled:hover:text-tusi-400
        bg-tusi-800 hover:bg-tusi-700 disabled:hover:bg-tusi-800 
      `,
    },
  },
  defaultVariants: {
    size: "md",
    theme: "glass",
  },
})

const btn = tv({
  base: `
    border-none flex items-center justify-center

    active:scale-95      disabled:active:scale-100
    cursor-pointer       disabled:cursor-not-allowed
    [&_svg]:text-[1.2em] disabled:opacity-50
  `,
  variants: {
    mode: {
      contained: `
        text-main-fg
        disabled:text-muted-fg
        disabled:bg-muted-bg
        disabled:hover:bg-muted-bg
      `,
      outline: null,
      text: `
        bg-transparent
        disabled:text-muted-fg
        disabled:hover:text-muted-fg
        disabled:bg-muted-bg
        disabled:hover:bg-muted-bg
      `,
    },
    intent: {
      neutral: null,
      danger: null,
      brand: null,
    },
    isIcon: {
      false: null,
      true: null,
    },
    size: {
      md: "rounded-sm-elements py-1 gap-2 px-6 min-h-14",
    },
    color: {
      neutral: `
        text-tusi-400       disabled:text-tusi-400
        hover:text-tusi-100 disabled:hover:text-tusi-400
        bg-tusi-800         disabled:bg-tusi-800 
        hover:bg-tusi-700   disabled:hover:bg-tusi-800
      `,
      brand: `
        text-main-fg      disabled:text-muted-fg
        bg-primary-bg     disabled:bg-muted-bg
        hover:bg-primary-bg/90 disabled:hover:bg-primary-bg
      `,
    },
  },
  compoundVariants: [
    {
      isIcon: true,
      size: "md",
      className: "p-1 w-14",
    },
    {
      intent: "neutral",
      mode: "text",
      className: `
        text-tusi-400
        hover:text-tusi-300
        hover:bg-tusi-400/10
      `,
    },
    {
      intent: "danger",
      mode: "text",
      className: `
        text-danger-400
        hover:text-danger-300
        hover:bg-danger-400/10
      `,
    },
    {
      intent: "neutral",
      mode: "contained",
      className: `
        text-tusi-400
        hover:text-tusi-100
        bg-tusi-800
        hover:bg-tusi-700
      `,
    },
    {
      intent: "brand",
      mode: "contained",
      className: `
        bg-primary-bg
        hover:bg-primary-bg/90
      `,
    },
  ],
  defaultVariants: {
    size: "md",
  },
})

const select = tv({
  base: `
    py-2 px-4 font-[inherit] rounded-sm-elements
    bg-secondary-bg outline-2 outline-transparent min-h-14
    focus:outline-ring outline-offset-2 text-main-fg
  `,
})

const input = tv({
  base: `
    py-2 px-4 font-[inherit] rounded-sm-elements
    bg-muted-bg outline-none border-b-2 min-h-14
    border-transparent focus:border-border
    text-main-fg
    disabled:opacity-50
  `,
  variants: {
    isMultiline: {
      false: null,
      true: "min-h-24 py-4",
    },
  },
  defaultVariants: {
    isMultiline: false,
  },
})

const labeler = tv({
  base: "flex flex-col gap-2 w-full",
})

const errorMsg = () => "text-destructive-fg text-body-sm"

const elementGroup = tv({
  base: "flex gap-1 rounded-md-elements overflow-hidden w-full",
})

export const skins = {
  page,
  btnIcon,
  btn,
  select,
  input,
  labeler,
  errorMsg,
  elementGroup,
}
