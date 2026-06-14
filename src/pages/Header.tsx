import Button from "../components/Button"
import bannerImage from '../assets/banner.png'
import { SocialRow } from "../components/SocialRow"
const Header = () => {
  return (
    <header className="flex flex-col-reverse items-center py-5 bg-[#fcfcfe] lg:flex-row lg:justify-between lg:px-7 xl:px-26  ">
        <div >
           <div className="p-6 md:p-10 lg:p-6">
               <h1 className='font-bold  leading-8 md:leading-9'>
                <span className='text-blue-700 text-[0.9rem] md:text-[1.3rem]'>Olá, eu sou</span> <br/>
                <span className='text-5xl md:text-7xl'>Italo <span className='text-blue-700'>Marcelo</span></span> <br/>
                <span className='text-blue-700 md:text-[1.3rem]'>Desenvolvedor Frontend</span>
            </h1>
            <p className="my-2.5  xl:text-[1.2rem] ">Transformando ideias em experiências  digitais modernas, <br className=' hidden lg:block'/>  interativas e responsivas.Focados na criação de interfaces  <br className=' hidden lg:block'/> limpas e funcionais com código de alta qualidade.</p>
           
           </div>

          <div className='px-4 md:px-10 lg:px-4'>
              <div className="flex flex-row flex-wrap ">
                <Button iconType={1} title='Ver projetos' style='bg-blue-700 text-white mr-4 w-38' />
                <Button iconType={2} title='Download CV' style='btn-outline btn-primary w-40' />
            </div>
             <div className='pt-6'>
                <h2 className='font-semibolld'>Me encontre em</h2>
                <SocialRow/>
            </div>
          </div>
        </div>
        <div className="p-5 md:p-0 flex flex-col items-center">
          <img src={bannerImage} className="w-screen md:w-[50%] lg:w-127.5 xl:w-140" alt='banner image'/>
        </div>
    </header>
  )
}

export default Header