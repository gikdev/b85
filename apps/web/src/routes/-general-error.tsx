import { ArrowClockwiseIcon, HeadsetIcon } from "@phosphor-icons/react"
import { extractErrorMessage } from "#/lib/errors"
import { skins } from "#/shared/skins"

interface GeneralErrorProps {
  reset: () => void
  error: unknown
}

export function GeneralError({ error, reset }: GeneralErrorProps) {
  return (
    <div className={skins.page({ className: "items-center justify-center" })}>
      <main className="flex flex-col flex-1 justify-center gap-8 p-8 w-full">
        <GeneralErrorIllustration />

        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-tusi-100 font-bold text-h1">اوه اوه...</h1>

          <p>
            مثل اینکه یه مشکلی پیش اومده؛
            <br />
            میتونی دوباره امتحان کنی؛
            <br />
            یا اینکه به ما اطلاع بدی!
          </p>

          <code dir="auto">{extractErrorMessage({ error })}</code>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <TryAgainBtn onClick={reset} />
          <CallSupportBtn />
        </div>
      </main>
    </div>
  )
}

function GeneralErrorIllustration() {
  return (
    <img className="max-w-max mx-auto" src="/images/general-error.png" alt="" />
  )
}

function TryAgainBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={skins.btn({
        color: "brand",
        className: "w-full justify-between",
      })}
    >
      <span>دوباره امتحان کن</span>
      <ArrowClockwiseIcon weight="fill" />
    </button>
  )
}

function CallSupportBtn() {
  return (
    <a
      target="_blank"
      rel="noopener"
      href="https://eitaa.com/webdev_bahrami"
      className={skins.btn({
        className: "w-full justify-between",
      })}
    >
      <span>ارتباط با پشتیبانی</span>
      <HeadsetIcon mirrored weight="fill" />
    </a>
  )
}
