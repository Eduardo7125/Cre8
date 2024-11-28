import React from 'react'
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal'
import project1 from '../assets/project1.png'
import pandemic from '../assets/pandemic.png'

const projects = [
    {
        img : pandemic,
        title : "Pandemic - Java",
        description : "Proyecto de Fin de curso de DAM1 hecho en Java.",
        links : {
            site : "https://github.com/Eduardo7125/Pandemic.git",
            github : "https://github.com/Eduardo7125/Pandemic/tree/main/Pandemic/Pandemic_Eduardo_Marc/src"
        }
    },
    {
        img : project1,
        title : "Project2",
        description : "UI for frontend development using React.",
        links : {
            site : "#",
            github : "#"
        }
    },
    {
        img : project1,
        title : "Project3",
        description : "UI for frontend development using React.",
        links : {
            site : "#",
            github : "#"
        }
    },
    {
        img : project1,
        title : "Project4",
        description : "UI for frontend development using React.",
        links : {
            site : "#",
            github : "#"
        }
    },
    {
        img : project1,
        title : "Project5",
        description : "UI for frontend development using React.",
        links : {
            site : "#",
            github : "#"
        }
    },
    {
        img : project1,
        title : "Project6",
        description : "UI for frontend development using React.",
        links : {
            site : "#",
            github : "#"
        }
    },
]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id='portfolio'>
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((projects,i) => (
            <Reveal>
                <div key={i} className={`flex flex-col md:flex-row ${i % 2 == 0 ? 'md:flex-row-reverse' : ''} mb-12`} >
                    <div className='w-full md:w-1/2 p4'>
                        <img 
                            src={projects.img} 
                            alt={projects.title}
                            className='w-full h-full object-cover rounded-lg shadow-lg' 
                        />
                    </div>
                    <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                        <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{projects.title}</h3>
                        <p className='text-gray-300 mb-4'>{projects.description}</p>
                        <div className='flex space-x-4'>
                            <a 
                                href={projects.links.site}
                                className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'
                            >View Site</a>
                            <a 
                                href={projects.links.github}
                                className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'
                            ><AiOutlineGithub size={20}/></a>
                        </div>
                    </div>
                </div>
            </Reveal>
        ))}
    </div>
  )
}

export default Portfolio