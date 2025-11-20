import "./pwa.css"
import { useRegisterSW } from "virtual:pwa-register/react"

export function PwaManager() {
  const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
    onRegisteredSW,
  })

  const [isOfflineReady, setOfflineReady] = offlineReady
  const [needsRefresh, setNeedsRefresh] = needRefresh

  function close() {
    setOfflineReady(false)
    setNeedsRefresh(false)
  }

  return (
    <div className="pwa" role="alert" aria-labelledby="toast-message">
      {(isOfflineReady || needsRefresh) && (
        <div className="pwa-toast">
          <div className="pwa-message">
            {isOfflineReady && (
              <span id="toast-message">App ready to work offline</span>
            )}

            {needsRefresh && (
              <span id="toast-message">
                New content available, click on reload button to update.
              </span>
            )}
          </div>
          <div className="pwa-buttons">
            {needsRefresh && (
              <button
                type="button"
                className="pwa-toast-button"
                onClick={() => updateServiceWorker(true)}
              >
                Reload
              </button>
            )}

            <button
              type="button"
              className="pwa-toast-button"
              onClick={() => close()}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function onRegisteredSW(
  swScriptUrl: string,
  registration: ServiceWorkerRegistration | undefined,
) {
  // Check for updates every hour
  const period = 1 * 60 * 60 * 1000

  if (period <= 0) return
  if (registration?.active?.state === "activated") {
    registerPeriodicSync(period, swScriptUrl, registration)
  } else if (registration?.installing) {
    registration.installing.addEventListener("statechange", e => {
      const sw = e.target as ServiceWorker
      if (sw.state === "activated")
        registerPeriodicSync(period, swScriptUrl, registration)
    })
  }
}

/**
 * This function will register a periodic sync check every hour,
 * you can modify the interval as needed.
 */
function registerPeriodicSync(
  period: number,
  swUrl: string,
  registration: ServiceWorkerRegistration,
) {
  if (period <= 0) return

  setInterval(async () => {
    if ("onLine" in navigator && !navigator.onLine) return

    const res = await fetch(swUrl, {
      cache: "no-store",
      headers: {
        cache: "no-store",
        "cache-control": "no-cache",
      },
    })

    if (res?.status === 200) await registration.update()
  }, period)
}
