import { Bounce, ToastContainer } from "react-toastify"

export const Toaster = () => (
  <ToastContainer
    autoClose={5000}
    className="font-main!"
    closeOnClick={false}
    draggable
    hideProgressBar={false}
    newestOnTop
    pauseOnFocusLoss
    pauseOnHover
    position="bottom-right"
    rtl
    theme="dark"
    toastClassName="font-main!"
    transition={Bounce}
  />
)
