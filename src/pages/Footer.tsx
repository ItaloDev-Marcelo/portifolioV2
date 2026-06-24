import { FaCode } from "react-icons/fa6";

import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className='bg-[#242a38] px-10 xl:px-30 py-4 flex flex-col xl:flex-row
     items-center justify-center xl:justify-between text-white'>
     <div>
        <FaCode  size={30} className='text-white'/>
     </div>
     <div>
        <h6 className='font-bold'>© 2024 Italo Marcelo. Todos os direitos reservados.</h6>
     </div>
     <div className="flex flex-row mt-4  content-center">
   
      <a  href="https://github.com/ItaloDev-Marcelo"
  target="_blank"
  rel="noopener noreferrer">
    <button className="btn  bg-transparent btn-circle mr-3">
        <FaGithub size='20' className="text-white"/>
      </button>
  </a>

      <a href="https://www.linkedin.com/in/italo-marcelo-06b130241"
  target="_blank"
  rel="noopener noreferrer">
    <button className="btn  bg-transparent btn-circle mr-3">
         <FaLinkedinIn size='20' className="text-white"/>
      </button>
  </a>
      
      <a href="https://wa.me/5573981339671?text=Olá,%20gostaria%20de%20falar%20com%20você.">
      <button className="btn  bg-transparent btn-circle mr-3">
         <IoLogoWhatsapp size='20' className="text-white" />
      </button>
      </a>
    

    </div>
    </footer>
  )
}

export default Footer