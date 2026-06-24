import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { SocialBtn } from "./SocialBtn";

export const SocialRow = () => {

  return (
    <div className="flex flex-row mt-4  content-center">
   
      <a  href="https://github.com/ItaloDev-Marcelo"
  target="_blank"
  rel="noopener noreferrer">
    <SocialBtn>
        <FaGithub size='20'/>
      </SocialBtn>
  </a>

      <a href="https://www.linkedin.com/in/italo-marcelo-06b130241"
  target="_blank"
  rel="noopener noreferrer">
    <SocialBtn>
         <FaLinkedinIn size='20'/>
      </SocialBtn>
  </a>
      
      <a href="https://wa.me/5573981339671?text=Olá,%20gostaria%20de%20falar%20com%20você.">
      <SocialBtn>
         <IoLogoWhatsapp size='20' />
      </SocialBtn>
      </a>

      
      <a href='mailto:devfrontend2028study@gmail.com' >
        <SocialBtn>
          <MdEmail size='20'/>
      </SocialBtn>
      </a>

    

    </div>
  )
}
