import { BsDownload } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import type { buttonType } from "../shared/types/ButtonType";

const Button = ({iconType, title, style}:buttonType) => {
    return (
        <button className={`btn  my-2 lg:my-0  flex flex-row justify-evenly items-center ${style}`}>
             <p className='pr-4'>{title}</p>
             {iconType == 1 ? <GoArrowRight size='16'/>:  <BsDownload size='14' /> }
        </button>
    )
}

export default Button