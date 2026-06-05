import { BsDownload } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";


type buttonStyle = {
    iconType: number;
    title: string;
    style: string
}

const Button = ({iconType, title, style}:buttonStyle ) => {
    return (
        <button className={`btn  my-2 lg:my-0  flex flex-row justify-evenly items-center ${style}`}>
             <p className='pr-4'>{title}</p>
             {iconType == 1 ? <GoArrowRight size='16'/>:  <BsDownload size='14' /> }
        </button>
    )
}

export default Button