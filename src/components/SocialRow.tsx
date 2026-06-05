import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { SocialBtn } from "./SocialBtn";

export const SocialRow = () => {

  return (
    <div className="flex flex-row mt-4  content-center">
      <SocialBtn>
        <FaGithub size='20'/>
      </SocialBtn>
      <SocialBtn>
         <FaLinkedinIn size='20'/>
      </SocialBtn>
      <SocialBtn>
         <IoLogoWhatsapp size='20' />
      </SocialBtn>
      <SocialBtn>
          <MdEmail size='20'/>
      </SocialBtn>
    </div>
  )
}
