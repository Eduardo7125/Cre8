import React from 'react'
import { FaGithubSquare, FaInstagramSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
      <div className='space-y-4'>
        <h3 className='text-2xl text-gray-200 font-semibold'>Eduardo.C</h3>
        <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
          <a href="#" className='hover:scale-125 duration-200'><FaGithubSquare/></a>
          <a href="#" className='hover:scale-125 duration-200'><FaInstagramSquare/></a>
        </div>
      </div>
      <p className='text-gray-400'>@2024 Eduardo.C</p>
    </div>
  )
}

export default Footer