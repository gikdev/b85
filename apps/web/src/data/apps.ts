import {
  HandsPrayingIcon,
  HurricaneIcon,
  type Icon,
  TextboxIcon,
  TextIndentIcon,
  TimerIcon,
} from "@phosphor-icons/react"

export interface App {
  id: string
  title: string
  Icon: Icon
  disabled?: boolean
}

export const apps: App[] = [
  {
    id: "work-timer",
    title: "تایمر کار",
    Icon: TimerIcon,
  },
  {
    id: "rakat",
    title: "رکعت",
    Icon: HandsPrayingIcon,
  },
  {
    id: "nebula",
    title: "نبیولا",
    Icon: HurricaneIcon,
  },
  {
    id: "namoratab",
    title: "نامرتب",
    Icon: TextIndentIcon,
  },
  {
    id: "promptor",
    title: "پرامپتور",
    Icon: TextboxIcon,
  },
  // {
  //   id: "todos",
  //   title: "کارها",
  //   Icon: ListChecksIcon,
  //   disabled: true,
  // },
  // {
  //   id: "one-thing",
  //   title: "یه چیز",
  //   Icon: NumberCircleOneIcon,
  //   disabled: true,
  // },
  // {
  //   id: "budget",
  //   title: "بودجه",
  //   Icon: TipJarIcon,
  //   disabled: true,
  // },
  // {
  //   id: "not-found",
  //   title: "نام برنامه",
  //   Icon: SquareIcon,
  //   disabled: true,
  // },
] as const
