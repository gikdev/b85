import { apps } from "#/data/apps"
import config from "../../config.json"
import { AppItem } from "./app-item"
import { GoFullscreenBtn } from "./go-fullscreen-btn"

export const HomePage = () => (
  <div className="flex flex-col p-8 gap-8">
    <h3 className="font-bold text-h1 text-center flex flex-col gap-2">
      <span className="text-main-fg">خوش اومدی،</span>
      <span className="text-primary-bg">محمدمهدی :)</span>
    </h3>

    <div className="flex w-full items-center justify-center gap-8">
      <GoFullscreenBtn />
    </div>

    <div className="flex flex-wrap items-center justify-center gap-4">
      {apps.map(app => (
        <AppItem key={app.id} id={app.id} Icon={app.Icon} title={app.title} />
      ))}
    </div>

    <p className="text-center" dir="ltr">
      <code>
        v{config.version} {import.meta.env.DEV && "</>"}
      </code>
    </p>
  </div>
)
