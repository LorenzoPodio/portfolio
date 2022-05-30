import React from 'react'

export const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#191A19] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#4E9F3D]'>About</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
          <div className='sm:text-right text-4xl font-bold '>
            <p>Hi. I'm Lorenzo, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p className='text-[#8892b0] italic'>
            Soy un desarrollador web Full Stack especializado en el stack PERN
            (PostgreSQL, Express, ReactJs, NodeJs) pero que siempre está interesado
            en aprender e investigar nuevas herramientas y tecnologías. Soy una
            persona comprometida, constante y organizada a la hora de llevar a cabo
            los objetivos que se me proponen siendo capaz de integrarme y adaptarme
            a distintos tipos de equipos de trabajo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
