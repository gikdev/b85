// import { CircleNotchIcon, PencilSimpleIcon } from "@phosphor-icons/react"
// import { useForm } from "@tanstack/react-form"
// import { skins } from "#/shared/skins"
// import {
//   type Currency,
//   type Settings,
//   SettingsSchema,
//   useSettingsStore,
// } from "../-shared"

// export function SettingsForm() {
//   const settings = useSettingsStore()

//   const form = useForm({
//     defaultValues: {
//       currency: settings.currency,
//       hourlyRate: settings.hourlyRate,
//     } satisfies Settings,
//     validators: {
//       onChange: SettingsSchema,
//     },
//     onSubmit: async ({ value }) => {
//       await new Promise(r => setTimeout(r, 1000))
//       settings.setCurrency(value.currency)
//       settings.setHourlyRate(value.hourlyRate)
//     },
//   })

//   return (
//     <form
//       className="contents"
//       onSubmit={e => {
//         e.preventDefault()
//         e.stopPropagation()
//         form.handleSubmit()
//       }}
//     >
//       <form.Field name="hourlyRate">
//         {field => (
//           <label className={skins.labeler()}>
//             <p>مقدار درآمد در ساعت</p>

//             <input
//               dir="ltr"
//               type="number"
//               value={field.state.value}
//               onBlur={field.handleBlur}
//               onChange={e => {
//                 const val = e.target.value
//                 field.handleChange(val === "" ? 0 : Number(val))
//               }}
//               className={skins.input()}
//             />

//             <p className={skins.errorMsg()}>
//               {!field.state.meta.isValid &&
//                 field.state.meta.errors.map(e => e?.message).join(", ")}
//             </p>
//           </label>
//         )}
//       </form.Field>

//       <form.Field name="currency">
//         {field => (
//           <label className="flex flex-col gap-2 w-full">
//             <p>واحد پولی</p>

//             <select
//               value={field.state.value}
//               onChange={e => field.handleChange(e.target.value as Currency)}
//               className={skins.select()}
//             >
//               <option value={"IRR" satisfies Currency}>ریال</option>
//               <option value={"IRT" satisfies Currency}>تومان</option>
//               <option value={"USD" satisfies Currency}>دلار</option>
//             </select>

//             <p className={skins.errorMsg()}>
//               {!field.state.meta.isValid &&
//                 field.state.meta.errors.map(e => e?.message).join(", ")}
//             </p>
//           </label>
//         )}
//       </form.Field>

//       <form.Subscribe selector={s => [s.canSubmit, s.isSubmitting]}>
//         {([canSubmit, isSubmitting]) => (
//           <button
//             type="submit"
//             disabled={!canSubmit || isSubmitting}
//             className="px-6 py-1 min-h-14 gap-2 flex items-center justify-center rounded-sm-elements cursor-pointer bg-brand-600 hover:bg-brand-700 active:scale-95 text-tusi-100 disabled:bg-tusi-700 disabled:text-tusi-400 disabled:hover:bg-tusi-700 w-full disabled:active:scale-100 disabled:cursor-not-allowed"
//           >
//             {isSubmitting ? (
//               <>
//                 <CircleNotchIcon className="animate-spin" size={24} />
//                 <span>در حال اعمال تغییرات...</span>
//               </>
//             ) : (
//               <>
//                 <PencilSimpleIcon size={24} />
//                 <span>اعمال تغییرات</span>
//               </>
//             )}
//           </button>
//         )}
//       </form.Subscribe>
//     </form>
//   )
// }
