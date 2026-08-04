import type { SkillsCardType } from "../shared/types/SkillsCardType"

const SkillsCards = ({iconTitle,skillsIcon, color}:SkillsCardType) => {
  const Icon = skillsIcon
  return (
    <article className='card w-33 h-37 bg-base-100 dark:bg-gray-800 shadow-sm
    dark:hover:bg-gray-700
    hover:bg-gray-100 active:bg-gray-100 '>
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