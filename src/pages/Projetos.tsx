import {useState } from 'react'
import projetosData from '../data/ProjectsData.json'
import ProjectBtn from '../components/projetos-components/ProjectBtn'
import ProjectCard from '../components/projetos-components/ProjectCard'
const Projetos = () => {
    
    const [categoria, setCategoria] = useState('React')
    const [all, setAll] = useState(false)
    
    const selected = (title: string) => {
        setCategoria(title)
    }

    const filteredByCategory = (categoriaProcurada: string) => {
         const resultBasedOnBtn = all ? projetosData : projetosData.slice(0,8)
         const data = categoria ==
          'React' ? resultBasedOnBtn : resultBasedOnBtn.filter(item => item.category.includes(categoriaProcurada))
         return data
    }

    const hundleMore = () => {setAll(!all)}

    const data = filteredByCategory(categoria)

    return (
        <section className='bg-[#fbfcfe] py-20 flex flex-col flex-wrap   items-center'>
            <h2 className='text-2xl font-semibold'>Projetos em Destaque</h2>
            <div className='mt-10 flex flex-row gap-5'>
                <ProjectBtn selected={selected} name='React' categoria={categoria}/>
                <ProjectBtn selected={selected} name='Websites' categoria={categoria}/>
                <ProjectBtn selected={selected} name='Web Apps' categoria={categoria}/>
                <ProjectBtn selected={selected} name='UI/UX' categoria={categoria}/>
            </div>
           <div className='flex flex-col flex-wrap gap-10 mt-20 md:flex-row justify-center items-start'>
              {
                data.map((item) => (
                    <ProjectCard id={item.id} img={item.image} title={item.title} text={item.info}
                     tacs={item.tacs} link={item.link} />
                ))
              }
           </div>
            <button className='btn mt-7 btn-outline btn-primary hover:bg-blue-700 hover:text-white' onClick={hundleMore}>{!all ?  'Ver todos os projetos ➝' : 'Ver menos projetos' }</button>
        </section>
    )
}

export default Projetos