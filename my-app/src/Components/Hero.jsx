import React from 'react'
import ProfilePic from '../assets/profile_pic.png'

import { TypeAnimation } from 'react-type-animation'
import {
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineLinkedin
} from 'react-icons/ai'
import {
    DiCss3,
    DiHtml5,
    DiJavascript1,
    DiNodejsSmall,
    DiReact,
    DiDart,
    DiJava,
    DiGit
} from 'react-icons/di'
import { motion } from 'framer-motion'
import ShinyEffect from './ShinyEffect'
const Hero = () => {
  return (
    <div className='mt-24 max-w-[1400px] mx-auto relative'>
        <div className='grid md:grid-cols-2 place-items-center gap-8'>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <TypeAnimation 
                    sequence={[
                        "Fullstack Dev",
                        1000,
                        "Mobile Dev",
                        1000,
                        "Backend Dev",
                        1000
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className='font-bold text-gray-400 text-xl md:text-5xl mb-4'
                />
                <motion.p
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='text-gray-200 md:text-7xl text-5xl tracking-tight mb-4'
                >
                    HEY, I AM <br />
                    <span className='text-purple-500'>Eduardo Cristea</span>
                </motion.p>

                <motion.p
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1 }}
                    className='text-gray-200 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6'
                >
                    I am a passionate fullstack developer with over 20 personal proyects.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className='flex flex-row items-center gap-6 my-4 md:mb-0'
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}                    
                        className='z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl'
                    >
                        Download CV
                    </motion.button>

                    <div className='flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20'>
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            href='#'
                        >
                            <AiOutlineGithub/>
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            href='#'
                        >
                            <AiOutlineLinkedin/>
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            href='#'
                        >
                            <AiOutlineInstagram/>
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>

            <motion.img 
                src={ProfilePic}
                className='w-[300px] md:w-[450px] select-none'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                draggable={false}
            />

        </div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className='flex flex-col md:flex-row text-4xl md:text-7xl px-4 md:px-0 w-full justify-center items-center py-12 md:py-24'
        >
            <p className='text-gray-200 mb-4 md:mb-0 md:mr-6 text-center md:text-left'>My Tech Stack</p>
            <div className='grid grid-cols-2 md:flex md:flex-row justify-center items-center gap-4 md:gap-6'>
                <DiHtml5 className='text-orange-600 mx-2'/>
                <DiCss3 className='text-blue-600 mx-2'/>
                <DiJavascript1 className='text-yellow-500 mx-2'/>
                <DiReact className='text-blue-500 mx-2'/>
                <DiNodejsSmall className='text-green-500 mx-2'/>
                <DiJava className='text-red-500 mx-2'/>
                <DiDart className='text-blue-700 mx-2'/>
                <DiGit className='text-red-500 mx-2'/>
            </div>

        </motion.div>

        <div className='absolute inset-0 hidden md:block scrll'>
            <ShinyEffect left={0} top={0} size={1400} />
        </div>
    </div>
  )
}

export default Hero