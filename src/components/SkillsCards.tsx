import type { IconType } from "react-icons/lib"

type SkillsCardType = {
  iconTitle: string,
  skillsIcon: IconType,
  color: string
}

const SkillsCards = ({iconTitle,skillsIcon, color}:SkillsCardType) => {
  const Icon = skillsIcon
  return (
    <article className='card w-33 h-37 bg-base-100 shadow-sm hover:bg-gray-100 active:bg-gray-100 '>
      <div className='card-body flex flex-col items-center content-center'>
        <figure className="my-5">
           <Icon className={color} size={40} />   
         </figure>
          <h3 className="font-semibold">{iconTitle}</h3>
      </div>
    </article>
  )
}

export default SkillsCards