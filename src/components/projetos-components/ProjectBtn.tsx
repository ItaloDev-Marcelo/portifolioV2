
type ProjectBtntype = {
    selected: (title: string) => void;
    name: string;
    categoria: string
}

const ProjectBtn = ({selected, name, categoria}:ProjectBtntype ) => {

  const title = name == 'React' ? 'Todos' : name

  return (
     <button className={`outline-1 outline-gray-300 font-semibold cursor-pointer
      ${categoria == name && 'bg-blue-700 dark:bg-white dark:text-black text-white'} hover:bg-blue-700 dark:hover:bg-gray-700 hover:text-white p-1 rounded-sm`} onClick={() => selected(name)}>{title}</button>
  )
}

export default ProjectBtn