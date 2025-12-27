import { MathOperationsIcon } from "@phosphor-icons/react"
import { z } from "zod/v4"
import { Sheet } from "#/components/sheet"
import { buttonVariants } from "#/components/ui/button"
import { useAppForm } from "#/form"
import { useAppDispatch, useAppSelector } from "#/store"
import { workTimerSlice } from "../store"

const { closeDailyGoalSetupSheet, setDailyTimeTarget } = workTimerSlice.actions

const dailyGoalSetupSchema = z.object({
  daysPerMonth: z
    .number("تعداد روز کاری الزامی است")
    .min(1, "عدد باید مثبت (بیشتر از ۰) باشه!")
    .max(31, "تعداد روز نمی‌تواند بیشتر از ۳۱ باشد"),

  idealIncome: z
    .number("درآمد ایده‌آل الزامی است")
    .min(1000, "عدد باید حداقل ۱،۰۰۰ باشه!")
    .max(1000000, "درآمد ایده‌آل نمی‌تواند بیشتر از ۱،۰۰۰،۰۰۰ باشد"),
})

type DailyGoalSetupFormValues = z.infer<typeof dailyGoalSetupSchema>

const defaultValues: DailyGoalSetupFormValues = {
  daysPerMonth: 20,
  idealIncome: 10_000,
}

export function DailyGoalSetupSheet() {
  const isOpen = useAppSelector(s => s.apps.workTimer.isDailyGoalSetupSheetOpen)
  const hourlyRate = useAppSelector(s => s.apps.workTimer.hourlyRate)
  const dispatch = useAppDispatch()

  const onClose = () => dispatch(closeDailyGoalSetupSheet())

  const form = useAppForm({
    defaultValues,
    validators: {
      onChange: dailyGoalSetupSchema,
    },
    onSubmit: ({ value }) => {
      const dailyTimeTarget = calcDailyTimeTarget(value, hourlyRate)
      dispatch(setDailyTimeTarget(dailyTimeTarget))
      onClose()
    },
  })

  if (!isOpen) return null

  return (
    <Sheet.Container onOverlayClick={onClose}>
      <form.AppForm>
        <Sheet.Handle />

        <Sheet.Content className="flex flex-col gap-4">
          <form.AppField name="daysPerMonth">
            {field => <field.NumberWithBtns label="تعداد روز کاری در ماه" />}
          </form.AppField>

          <form.AppField name="idealIncome">
            {field => <field.SimpleNumber label="درآمد ایده‌آل" />}
          </form.AppField>

          <form.SubmitBtn
            iconStarting={<MathOperationsIcon weight="fill" />}
            title="محاسبه هدف روزانه"
            className={buttonVariants({
              variant: "primary",
              className: "w-full",
            })}
          />
        </Sheet.Content>
      </form.AppForm>
    </Sheet.Container>
  )
}

function calcDailyTimeTarget(
  values: DailyGoalSetupFormValues,
  hourlyRate: number,
): number {
  const { idealIncome, daysPerMonth } = values

  // These checks are now redundant since Zod validates them, but keeping for runtime safety
  if (idealIncome <= 0) throw new Error("درآمد ایده‌آل باید بیشتر از ۰ باشه!")
  if (daysPerMonth <= 0)
    throw new Error("تعداد روز در ماه باید بیشتر از ۰ باشه!")

  const timeTargetInSeconds =
    (idealIncome / daysPerMonth / hourlyRate) * 60 * 60
  return Math.round(timeTargetInSeconds)
}
