import { MinusIcon, PencilSimpleIcon, PlusIcon } from "@phosphor-icons/react"
import { z } from "zod/v4"
import { Sheet } from "#/components/sheet"
import { buttonVariants } from "#/components/ui/button"
import { useAppForm } from "#/form"
import { skins } from "#/shared/skins"
import { useAppDispatch, useAppSelector } from "#/store"
import { workTimerSlice } from "../store"

const ChangeTotalSchema = z.object({
  hours: z
    .number("این ورودی الزامی است")
    .nonnegative("لطفا عدد غیر منفی (بیشتر از ۰) وارد کنید"),
  minutes: z
    .number("این ورودی الزامی است")
    .nonnegative("لطفا عدد غیر منفی (بیشتر از ۰) وارد کنید"),
  seconds: z
    .number("این ورودی الزامی است")
    .nonnegative("لطفا عدد غیر منفی (بیشتر از ۰) وارد کنید"),
})

type ChangeTotalFormValues = z.infer<typeof ChangeTotalSchema>

const defaultValues: ChangeTotalFormValues = {
  hours: 0,
  minutes: 0,
  seconds: 0,
}

interface FormMeta {
  submitAction: "change" | "add" | "subtract" | null
}

const defaultMeta: FormMeta = {
  submitAction: null,
}

const { setTotalSeconds, closeChangeTotalSheet } = workTimerSlice.actions

export function ChangeTotalSheet() {
  const totalSeconds = useAppSelector(s => s.apps.workTimer.totalSeconds)
  const isOpen = useAppSelector(s => s.apps.workTimer.isChangeTotalSheetOpen)
  const dispatch = useAppDispatch()
  const setTotal = (total: number) => dispatch(setTotalSeconds(total))
  const close = () => dispatch(closeChangeTotalSheet())

  const form = useAppForm({
    defaultValues,
    validators: {
      onChange: ChangeTotalSchema,
    },
    onSubmitMeta: defaultMeta,
    onSubmit: ({ value, meta }) => {
      const seconds = calcFinalTotalSeconds(value)

      if (meta.submitAction === "change") {
        setTotal(seconds)
      }

      if (meta.submitAction === "add") {
        setTotal(totalSeconds + seconds)
      }

      if (meta.submitAction === "subtract") {
        const final = totalSeconds - seconds
        setTotal(final < 0 ? 0 : final)
      }

      close()
    },
  })

  if (!isOpen) return null

  return (
    <Sheet.Container onOverlayClick={close}>
      <form.AppForm>
        <Sheet.Handle />

        <Sheet.Content className="flex flex-col gap-4">
          <form.AppField name="hours">
            {field => <field.NumberWithBtns label="ساعت" />}
          </form.AppField>

          <form.AppField name="minutes">
            {field => <field.NumberWithBtns label="دقیقه" />}
          </form.AppField>

          <form.AppField name="seconds">
            {field => <field.NumberWithBtns label="ثانیه" />}
          </form.AppField>
        </Sheet.Content>

        <Sheet.Footer>
          <div className={skins.elementGroup({ className: "flex-col" })}>
            <div className="flex gap-1 w-full">
              <form.SubmitBtn
                iconStarting={<MinusIcon />}
                title={null}
                onClick={() => form.handleSubmit({ submitAction: "subtract" })}
                className={buttonVariants({
                  variant: "secondary",
                  className: "flex-1",
                })}
              />

              <form.SubmitBtn
                iconStarting={<PlusIcon />}
                title={null}
                onClick={() => form.handleSubmit({ submitAction: "add" })}
                className={buttonVariants({
                  variant: "secondary",
                  className: "flex-1",
                })}
              />
            </div>

            <form.SubmitBtn
              title="تغییر مجموع کار"
              iconStarting={<PencilSimpleIcon weight="fill" />}
              onClick={() => form.handleSubmit({ submitAction: "change" })}
              className={buttonVariants({ variant: "primary" })}
            />
          </div>
        </Sheet.Footer>
      </form.AppForm>
    </Sheet.Container>
  )
}

function calcFinalTotalSeconds(values: ChangeTotalFormValues): number {
  const { hours, minutes, seconds } = values

  const hoursInSeconds = hours * 60 * 60
  const minutesInSeconds = minutes * 60

  return hoursInSeconds + minutesInSeconds + seconds
}
