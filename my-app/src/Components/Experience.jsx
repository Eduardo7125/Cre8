import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
  {
    company: 'First Company',
    period: '1.5 years',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia recusandae amet blanditiis est eaque error animi quaerat, accusamus fuga sit consequuntur'
  },
  {
    company: 'First Company',
    period: '1.5 years',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia recusandae amet blanditiis est eaque error animi quaerat, accusamus fuga sit consequuntur'
  },
  {
    company: 'First Company',
    period: '1.5 years',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia recusandae amet blanditiis est eaque error animi quaerat, accusamus fuga sit consequuntur'
  },
  {
    company: 'First Company',
    period: '1.5 years',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia recusandae amet blanditiis est eaque error animi quaerat, accusamus fuga sit consequuntur'
  },
  {
    company: 'First Company',
    period: '1.5 years',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia recusandae amet blanditiis est eaque error animi quaerat, accusamus fuga sit consequuntur'
  },
  {
    company: 'First Company',
    period: '1.5 years',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia recusandae amet blanditiis est eaque error animi quaerat, accusamus fuga sit consequuntur'
  },
]

const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto '>
      <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
      <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience,i) => (
          <Reveal className='w-full mx-auto'>
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className='w-full border border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10 '
            >
              <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
              <p className='text-gray-300'>{experience.period}</p>
              <p className='text-gray-400 mt-4'>{experience.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  )
}

export default Experience