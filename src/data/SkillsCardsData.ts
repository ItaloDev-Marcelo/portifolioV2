import type { IconType } from "react-icons/lib"
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { BsJavascript } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


type DataType = {
    title: string,
    icon: IconType,
    color: string
}


export const IconsData:DataType[] = [
  {
    title: 'HTML',
    icon: FaHtml5,
    color: 'text-orange-500'
  },
  {
    title: 'CSS',
    icon: IoLogoCss3,
    color: 'text-blue-500'
  },
  {
    title: 'Javascript',
    icon: BsJavascript,
    color: 'text-yellow-400'
  },
  {
    title: 'React',
    icon: FaReact,
    color: 'text-cyan-400'
  },
  {
    title: 'NodeJs',
    icon: FaNodeJs,
    color: 'text-green-500'
  },
  {
    title: 'Tailwindcss',
    icon: RiTailwindCssFill,
    color: 'text-sky-400'
  },
  {
    title: 'Git',
    icon: FaGitAlt,
    color: 'text-orange-600'
  },
  {
    title: 'Github',
    icon: FaGithub,
    color: 'text-gray-800 dark:text-white'
  }
];