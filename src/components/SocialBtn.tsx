import type { ReactNode } from "react"

type SocialBtnProps = {children: ReactNode}
export const SocialBtn = ({children}:SocialBtnProps ) => {
  return (
    <button className="btn btn-circle mr-3">
      {children}
    </button>
  )
}
