import React from 'react'
import Reveal from './Reveal'

const Contact = () => {
  return (
    <div className='px-6 max-w-[1000px] mx-auto md:my-12' id='contact'>
        <Reveal>
            <div className='grid md:grid-cols-2 place-items-center'>
                <div>
                    <div className='text-gray-300 my-3'>
                        <h3 className='text-4xl font-semibold mb-5'>About <span>Me</span></h3>
                        <p className='text-justify leading-7 w-11/12 mx-auto'>
                        Soy Eduardo Cristea, tengo 19 años y actualmente estoy cursando un CFGS en 
                        Desarrollo de Aplicaciones Multiplataforma. Trabajo con una amplia gama de lenguajes
                         de programación, siendo mis principales Java, Flutter y React. <br /> Tengo un gran interés
                          en la ciberseguridad, Big Data y los entornos cloud. Además de mis estudios, estoy 
                          buscando proyectos donde pueda aportar mis conocimientos, crecer profesionalmente 
                          y aprender en un entorno de trabajo colaborativo.
                        </p>
                    </div>
                    <div className='flex mt-10 items-center gap-7'>
                        <div className='bg-gray-800/40 p-5 rounded-lg'>
                            <h3 className='md:text-4xl text-2xl font-semibold text-white'>20<span>+</span></h3>
                            <p className='text-xs md:text-base'><span>Projects</span></p>
                        </div>
                        <div className='bg-gray-800/40 p-5 rounded-lg'>
                            <h3 className='md:text-4xl text-2xl font-semibold text-white'>1<span>+</span></h3>
                            <p className='text-xs md:text-base'><span>Years of experience</span></p>
                        </div>
                        <div className='bg-gray-800/40 p-5 rounded-lg'>
                            <h3 className='md:text-4xl text-2xl font-semibold text-white'>30<span>+</span></h3>
                            <p className='text-xs md:text-base'><span>happy clients</span></p>
                        </div>
                    </div>
                </div>
                <form 
                    action="https://getform.io/f/pagxedxb"
                    method='Post'
                    className='max-w-6xl p-5 md:p-12'
                    id='form'
                >
                    <p className='text-gray-100 font-bold text-xl mb-2'>Lets connect!</p>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder='Your Name'
                        className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4'            
                        required
                    />
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder='Your Email'
                        className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4'                
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"   
                    />
                    <textarea 
                        type="textarea" 
                        name="textarea" 
                        id="textarea" 
                        cols={30}
                        rows={4}
                        placeholder='Your Message'
                        className='resize-none overflow-auto mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4'                
                        required
                    />
                    <button
                        type='submit'
                        className='w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color'
                    >
                        
                    Submit</button>
                </form>
            </div>
        </Reveal>
    </div>
  )
}

export default Contact