import SkillsCards from '../components/SkillsCards';
import { IconsData } from '../data/SkillsCardsData';
import About from './About';
import Projetos from './Projetos';

const Main = () => {
  return (
    <main>
       <section id='skills-section' className='flex flex-col p-5 pb-25 justify-center bg-[#feffff] content-center items-center shadow-sm'>
             <div className='relative pb-3'>
                 <h2 className='font-bold text-4xl my-10'>Skills</h2>
                 <hr className='relative -top-8 w-14 left-4 border-b-2 border-blue-700 ' />
             </div>
          <div className='flex flex-row items-center justify-center  gap-3 xl:gap-5 flex-wrap'>
             {
            IconsData.map((item) => (
               <SkillsCards iconTitle={item.title} skillsIcon={item.icon} color={item.color} />
            ))
           }
          </div>
        </section> 
        <Projetos/>
        <About/>
    </main>
  )
}

export default Main