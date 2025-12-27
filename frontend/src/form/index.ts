import { createFormHook, createFormHookContexts } from "@tanstack/react-form"
import { NumberWithBtns } from "./components/number-with-btns"
import { SimpleNumber } from "./components/simple-number"
import { SimpleTextInput } from "./components/simple-text-input"
import { SubmitBtn } from "./components/submit-btn"

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts()

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    NumberWithBtns,
    SimpleNumber,
    SimpleTextInput,
  },
  formComponents: {
    SubmitBtn,
  },
})
