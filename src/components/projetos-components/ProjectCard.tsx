
type ProjectCardType = {
    id: number,
    img: string;
    title: string;
    text: string;
    tacs: string[];
    link: string
}

const ProjectCard = ({id,img,title,text,tacs,link}:ProjectCardType) => {
  return (
    <article key={id} className="card bg-base-100 w-96 xl:h-127 md:w-75 xl:w-96  shadow-sm">
  <figure>
    <img
      src={img}
      alt={title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className="line-clamp-2">{text}</p>
    <div className="card-actions flex flex-col">
       <div className='flex flex-row flex-wrap w-[75%] gap-1 pb-2 items-center'>
        {
        tacs.map((item,index) => (
              <div key={index} className="bg-gray-100 mr-1 text-gray-800 rounded-lg font-medium p-1">{item}</div>
        ))
       }
       </div>
       <a href={link} target='_blank'>
      <button className="btn btn-ghost text-blue-700">Ver Projeto ➝</button>
       </a>
    </div>
  </div>
</article>
  )
}

export default ProjectCard