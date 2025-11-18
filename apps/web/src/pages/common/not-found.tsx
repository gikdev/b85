import { CaretRightIcon } from "@phosphor-icons/react"
import { Link } from "@tanstack/react-router"
import { skins } from "#/shared/skins"

export const NotFound = () => (
  <div className={skins.page({ className: "items-center justify-center" })}>
    <main className="flex flex-col flex-1 items-center justify-center gap-8 p-8 w-full">
      <NotFoundIllustration />

      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-tusi-100 font-bold text-h1">پیدا نشد!</h1>

        <p>
          صفحه‌ای که دنبالش هستی،
          <br />
          یا وجود نداره، یا اینکه گم شده 🥲
        </p>
      </div>

      <GoHomeBtn />
    </main>
  </div>
)

const NotFoundIllustration = () => (
  <img className="" src="/images/not-found.png" alt="" />
)

const GoHomeBtn = () => (
  <Link
    to="/"
    className={skins.btn({
      color: "brand",
      className: "w-full justify-between",
    })}
  >
    <span>بریم خونه</span>
    <CaretRightIcon mirrored weight="fill" />
  </Link>
)
