import logo from '../assets/logo.png'
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";

type navPropsType = {
  hundleNavbar: () => void;
  openBar: boolean
}

export const Navbar = ({ hundleNavbar, openBar }: navPropsType) => {


  const communStyle = `relative        
    pb-1
    md:my-3
    my-5
    lg:my-0
    w-fit
    font-medium
    text-2xl
    lg:text-[1.2rem]
    cursor-pointer


    before:absolute
    before:left-0
    lg:before:left-0
    before:bottom-0
    lg:before:top-15
    before:h-0.5
    before:w-0
    before:bg-gray-300

    after:absolute
    after:left-0
    lg:after:left-5
    after:bottom-0
    lg:after:top-14.5
    after:h-0.75
    after:w-0
    lg:pr-10
    after:bg-blue-800

    after:transition-all
    after:duration-300`

  const styleItem1 = `
    ${communStyle}
    hover:after:w-[25%]
    hover:before:w-[75%]
    active:after:w-[25%]
    active:before:w-[75%]
    `

  const styleItem2 = `
    ${communStyle}
    hover:after:w-[25%]
    hover:before:w-[60%]
    active:after:w-[25%]
    active:before:w-[75%]
    `
  

  const navList2 = [
    {
      id: 1,
      title: 'Home',
      style: styleItem1
    },
    {
      id: 2,
      title: 'Sobre',
      style: styleItem1
    },
    {
      id: 3,
      title: 'Skills',
      style: styleItem1
    },
    {
      id: 4,
      title: 'Projetos',
      style: styleItem2
    },
    {
      id: 5,
      title: 'Contato',
      style: styleItem2
    }
  ]

  return (
    <div className='flex flex-row justify-between items-center p-4 lg:py-6 lg:px-9
     bg-white border-b-2 border-gray-100 '>

    <a href='index.html' className='lg:ml-7'><img src={logo} alt='logo' className='w-15 md:w-17' /></a>

    <button onClick={hundleNavbar} className='lg:hidden '>{!openBar ? <FiAlignJustify size='35' /> : <FiX size='35' />}</button>

      <nav className={`${openBar ? 'flex' : 'hidden lg:flex'}  shadow-hidden lg:h-auto lg:w-auto w-screen h-full lg:relative lg:top-0  fixed left-0 top-18  bg-[#ececfb] lg:bg-transparent`}>
        <ul className='pt-16 lg:pt-0 px-8  box-border relative flex flex-col lg:flex-row'>
          {
            navList2.map(item => (
              <li key={item.id} className={`${item.style} hover:text-gray-700 active:text-gray-700`}><a href={`#${item.title}`}>{item.title}</a></li>
            ))
          }
        </ul>
      </nav>

    </div>
  )
}
