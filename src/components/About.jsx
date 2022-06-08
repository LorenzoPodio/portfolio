import React, { useEffect } from 'react'
import { useLanguageContext } from '../context/LanguageContext';

export const About = () => {
  const { english } = useLanguageContext();
  useEffect(() => { }, [english]);

  if(english){
    return (
      <div name='about' className='w-full h-screen bg-transparent text-gray-300'>
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
                I am a Full Stack web developer specialized in the PERN stack (PostgreSQL, Express, ReactJs, NodeJs) 
                but always interested in learning and researching new tools and technologies.
                I am a committed, constant and organized person when it comes to carrying out the objectives
                that are proposed to me, being able to integrate and adapt to different types of work teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div name='about' className='w-full h-screen bg-transparent text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-[#4E9F3D]'>Sobre Mi</p>
            </div>
            <div></div>
          </div>
          <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
            <div className='sm:text-right text-4xl font-bold '>
              <p>Hola!. Soy Lorenzo, es un placer conocerte. Por favor, sentite libre de navegar por mi página</p>
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
}
