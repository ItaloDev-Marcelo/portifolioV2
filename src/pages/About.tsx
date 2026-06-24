import { LuBox } from "react-icons/lu";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GiFrostfire } from "react-icons/gi";
import { MdOutlineContactPage } from "react-icons/md";
import profilePhoto from '../assets/images/photo.jpg'
const About = () => {
  return (
    <section id='Sobre' className="flex flex-col xl:flex-row items-center xl:justify-evenly justify-center  px-5 py-19 bg-[#feffff]">
       <div className="mb-9"><figure>
          <img src={profilePhoto} className='rounded-md w-[200px] xl:w-[250px]' alt='foto de perfil de Italo-marcelo'/>
       </figure></div>
       <div className="flex flex-col gap-5 xl:gap-y-1  xl:w-[60%]">
         <div className='text-center md:px-30 xl:text-justify'>
            <h4 className="font-semibold text-2xl md:text-3xl xl:text-2xl leading-10 xl:leading-9 mb-5">
            <span className='text-blue-700 text-[0.9rem] md:text-[1.5rem] font-medium'>Sobre mim</span> <br/>
            Apaixonado por código <br />
            e por resolver problemas.
        </h4>
        <p className='text-[1em] px-2 xl:px-0 md:text-[1.3em] xl:text-[1.1em]  xl:w-[99%] '>Sou desenvolvedor frontend com foco em criar interfaces modernas, acessiveis e performáticas. Gosto de aprender coisas novas e transformar ideias em soluções reais.</p>
         </div>
        <div className='flex flex-col xl:flex-row  xl:justify-start items-center  w-screen xl:mt-2 xl:w-[90%] relative xl:left-20
          xl:py-0 py-10 justify-center  flex-wrap xl:flex-nowrap gap-y-5 font-medium '>
            <div className='flex flex-row items-center justify-evenly px-2   w-50 xl:w-55'>
                <LuBox size={30} className="text-blue-700"/>
                <p className="text-[0.9em] xl:text-[.7em]">+2 anos <br />
                estudando</p>
            </div>
            <div className='flex flex-row items-center justify-evenly px-2  w-50 xl:w-55'>
                <MdOutlineVerifiedUser size={30} className="text-blue-700"/>
                <p className="text-[0.9em] xl:text-[.7em]">Focado em <br />
                boas práticas</p>
            </div>
            <div className='flex flex-row items-center justify-evenly px-2  w-50 xl:w-55'>
                <GiFrostfire size={30} className="text-blue-700" />
                <p className="text-[0.9em] xl:text-[.7em]">Sempre <br />
                aprendendo</p>
            </div>
            <div className='flex flex-row items-center justify-evenly px-2  w-50 xl:w-55'>
                <MdOutlineContactPage size={30} className="text-blue-700" />
                <p className="text-[0.9em] xl:text-[.7em]">Aberto a<br />
                novas oportunidades</p>
            </div>
        </div>
       </div>
    </section>
  )
}

export default About