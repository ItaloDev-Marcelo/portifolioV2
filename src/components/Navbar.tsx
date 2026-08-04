import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";
import type { navType } from "../shared/types/NavType";
import { navList } from "../shared/constants/NavbarConsts";

export const Navbar = ({hundleNavbar,openBar}:navType) => {

  return (
    <div className='flex flex-row justify-between items-center p-4 lg:py-6 lg:px-9
     bg-white dark:bg-gray-800 dark:border-gray-600  border-b-2 border-gray-100 '>

    <a href='index.html' className='lg:ml-7'>
    <FaCode size={35} className='text-white' />
    </a>

    <button onClick={hundleNavbar} className='lg:hidden '>{!openBar ? <FiAlignJustify size='35' /> : <FiX size='35' />}</button>

      <nav className={`${openBar ? 'flex' : 'hidden'}
    lg:flex
    fixed lg:relative  shadow-hidden lg:h-auto lg:w-auto w-screen h-full lg:top-0 left-0 top-18  bg-[#ececfb] lg:bg-transparent`}>
        <ul className='pt-16 lg:pt-0 px-8  box-border relative flex flex-col lg:flex-row'>
          {
            navList.map(item => (
              <li  key={item.id} className={`${item.style} hover:text-gray-700 dark:hover:text-gray-200
               active:text-gray-700`}><a href={`#${item.title}`}  onClick={hundleNavbar}>{item.title}</a></li>
            ))
          }
        </ul>
      </nav>

    </div>
  )
}
