import type { ReactNode } from "react"
import { tvcn } from "#/lib/utils"

// #region <Container />
interface ContainerProps {
  children?: ReactNode
  onOverlayClick?: () => void
  contentContainerClassName?: string
}

function Container({
  children,
  onOverlayClick,
  contentContainerClassName,
}: ContainerProps) {
  return (
    <div className="absolute inset-0 h-full w-full flex flex-col z-10">
      <button
        type="button"
        className="block w-full flex-1 bg-black/80"
        onClick={onOverlayClick}
      />

      <div
        className={tvcn(
          "flex flex-col rounded-t-md-elements max-h-[80dvh] overflow-hidden bg-tusi-950 border-t border-tusi-800",
          contentContainerClassName,
        )}
      >
        {children}
      </div>
    </div>
  )
}
// #endregion

// #region <Handle />
interface HandleProps {
  onClick?: () => void
}

function Handle({ onClick }: HandleProps) {
  const Tag = onClick ? "button" : "div"

  return (
    <Tag className="p-2 flex items-center justify-center" onClick={onClick}>
      <div className="w-12 h-1 rounded-sm-elements bg-tusi-800" />
    </Tag>
  )
}
// #endregion

// #region <Header />
interface HeaderProps {
  children?: ReactNode
  className?: string
}

function Header({ children, className }: HeaderProps) {
  return (
    <header
      className={tvcn(
        "border-b border-tusi-800 p-4 flex items-center justify-center",
        className,
      )}
    >
      {children}
    </header>
  )
}
// #endregion

// #region <Content />
interface ContentProps {
  children?: ReactNode
  className?: string
}

function Content({ children, className }: ContentProps) {
  return (
    <header className={tvcn("p-4 flex-1 overflow-y-auto", className)}>
      {children}
    </header>
  )
}
// #endregion

// #region <Footer />
interface FooterProps {
  children?: ReactNode
  className?: string
}

function Footer({ children, className }: FooterProps) {
  return (
    <footer
      className={tvcn(
        "border-t border-tusi-800 p-4 flex items-center justify-center",
        className,
      )}
    >
      {children}
    </footer>
  )
}
// #endregion

// #region <Sheet.* />
/**
 * ## Example
 *
 * ```tsx
 * function Sample() {
 *   return (
 *     <Sheet.Container>
 *       <Sheet.Handle />
 *       <Sheet.Header>
 *         <h2>Title</h2>
 *       </Sheet.Header>
 *       <Sheet.Content>
 *         <form>
 *           <input />
 *           <textarea />
 *         </form>
 *       </Sheet.Content>
 *       <Sheet.Footer>
 *         <button type="button">Submit</button>
 *       </Sheet.Footer>
 *     </Sheet.Container>
 *   )
 * }
 * ```
 */
export const Sheet = {
  Container,
  Handle,
  Header,
  Content,
  Footer,
}
// #endregion
