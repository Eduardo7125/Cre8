import React from 'react'

import{
    DiHtml5,
    DiCss3,
    DiSass,
    DiBootstrap,
    DiJavascript1,
    DiReact,
    DiNodejsSmall,
    DiMongodb,
    DiGithubBadge,
    DiJava,
    DiDart
} from 'react-icons/di'
import Reveal from './Reveal'

const skills = [
    {
        category: 'Frontend',
        technologies: [
            { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
            { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
            { name: 'Sass', icon: <DiSass className='text-pink-600' /> },
            { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
            { name: 'React', icon: <DiReact className='text-blue-500' /> },  
        ]
    },
    {
        category: 'Fullstack',
        technologies: [
            { name: 'Node Js', icon: <DiNodejsSmall className='text-green-500' /> },
            { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
            { name: 'React', icon: <DiReact className='text-blue-500' /> },
            { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
            { name: 'Github', icon: <DiGithubBadge className='text-gray-600' /> },
            { name: 'Java', icon: <DiJava className='text-red-500 mx-2'/> },
            { name: 'Flutter', icon: <DiDart className='text-blue-700 mx-2'/> },
        ]
    }
]

const Skills = () => {
  return (
    <div className='flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12 max-w-[700px] mx-auto' id='skills'>
        <Reveal>
            <h2 className='text-3xl font-bold mb-4 text-center'>Skills</h2>
            <p className='text-center mb-8'>
                I worked on various Frontend and Fullstack projects. Check them <a href="#" className='underline'>here</a>
            </p>

            <div className='flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8'>
                {skills.map((skills, i)=>(
                    <div key={i} className='border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/2'>
                        <h3 className='text-xl font-bold mb-4 text-center'>{skills.category}</h3>
                        <div className='grid grid-cols-2 gap-4'>
                            {skills.technologies.map((tech, j)=>(
                                <div key={j} className='flex items-center space-x-2'>
                                    <span className='text-2xl'>{tech.icon}</span>
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Reveal>
    </div>
  )
}

export default Skills