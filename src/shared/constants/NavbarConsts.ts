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

  export const styleItem1 = `
    ${communStyle}
    hover:after:w-[25%]
    hover:before:w-[75%]
    active:after:w-[25%]
    active:before:w-[75%]
    `

  export const styleItem2 = `
    ${communStyle}
    hover:after:w-[25%]
    hover:before:w-[60%]
    active:after:w-[25%]
    active:before:w-[75%]
    `

  export const navList = [
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
