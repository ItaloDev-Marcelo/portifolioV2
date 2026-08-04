import type { SocialBtnType } from "../shared/types/SocialBtnType"

export const SocialBtn = ({children}:SocialBtnType ) => {
  return (
    <button className="btn btn-circle dark:bg-white  mr-3">
      {children}
    </button>
  )
}
