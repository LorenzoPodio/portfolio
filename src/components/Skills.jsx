import React, { useEffect } from 'react';
import JS from '../assets/JavaScript.png';
import ReactJs from '../assets/logo512.png';
import Redux from '../assets/redux.png';
import Node from '../assets/NodeJS.png';
import Exp from '../assets/Exp.png';
import Seq from '../assets/sequelize.png';
import Git from '../assets/git.png';
import Posgr from '../assets/Postgre.png';
import Tail from '../assets/Tailwind.png';
import GitHub from '../assets/GitHub.png';
import { useLanguageContext } from '../context/LanguageContext';

export const Skills = () => {
  const { english } = useLanguageContext();
  useEffect(() => { }, [english]);

  if(english){
    return (
      <div name='skills' className='bg-[#191a19] text-gray-300 h-screen w-full'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
            <p className='text-4xl font-bold inline border-b-4 border-[#4e9f3d]'>Skills</p>
            <p className='py-4 italic text-[#8892b0]'>// These are some of the Technologies with which I have worked</p>
          </div>
          <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#1E5128] hover:scale-110 duration-500 rounded-lg'>
              <img src={JS} alt="JS logo" className='w-20 mx-auto' />
              <p className=''>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#1E5128] hover:scale-110 duration-500 rounded-lg'>
              <img src={ReactJs} alt="JS logo" className='w-20 mx-auto' />
              <p className=''>REACT</p>
            </div>
            <div className='shadow-md shadow-[#1E5128] hover:scale-110 duration-500 rounded-lg'>
              <img src={Redux} alt="JS logo" className='w-20 mx-auto' />
              <p className=''>REDUX</p>
            </div>
            <div className='shadow-md shadow-[#1E5128] hover:scale-110 duration-500 rounded-lg'>
              <img src={Tail} alt="JS logo" className='w-20 mx-auto' />
              <p className=''>TAILWIND CSS</p>
            </div>
            <div className='shadow-md shadow-[#1E5128] hover:scale-110 duration-500 rounded-lg'>
              <img src={Git} alt="JS logo" className='w-20 mx-auto' />
              <p className=''>GIT</p>
            </div>
            <div className='shadow-md shadow-[#1E5128] hover:scale-110 duration-500 rounded-lg'>
              <img src={Node} alt="JS logo" className='w-20 mx-auto text-green-500'/>
              <p className=''>NODEJS</p>
            </div>
            <div className='shadow-md shadow-[#1E5128] hover:scale-110 duration-500 rounded-lg'>
              <img src={Exp} alt="JS logo" className='w-28 mx-auto' />
              <p className=''>EXPRESS</p>
            </div>
            <div className='shadow-md shadow-[#1E5128] hover:scale-110 duration-500 rounded-lg'>
              <img src={Seq} alt="JS logo" className='w-20 mx-auto' />
              <p className=''>SEQUELIZE</p>
            </div>
            <div className='shadow-md shadow-[#1E5128] hover:scale-110 duration-500 rounded-lg'>
              <img src={Posgr} alt="JS logo" className='w-20 mx-auto' />
              <p className=''>POSTGRESQL</p>
            </div>
            <div className='shadow-md shadow-[#1E5128] hover:scale-110 duration-500 rounded-lg'>
              <img src={GitHub} alt="JS logo" className='w-20 mx-auto' />
              <p className=''>GITHUB</p>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div name='skills' className='bg-[#191a19] text-gray-300 h-screen w-full'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
            <p className='text-4xl font-bold inline border-b-4 border-[#4e9f3d]'>Habilidades</p>
            <p className='py-4 italic text-[#8892b0]'>// Estas son algunas de las Tecnologias con las cuales he trabajado</p>
          </div>
          <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#1E5128] hover:scale-110 duration-500 rounded-lg'>
              <img src={JS} alt="JS logo" className='w-20 mx-auto' />
              <p className=''>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#1E5128] hover:scale-110 duration-500 rounded-lg'>
              <img src={ReactJs} alt="JS logo" className='w-20 mx-auto' />
              <p className=''>REACT</p>
            </div>
            <div className='shadow-md shadow-[#1E5128] hover:scale-110 duration-500 rounded-lg'>
              <img src={Redux} alt="JS logo" className='w-20 mx-auto' />
              <p className=''>REDUX</p>
            </div>
            <div className='shadow-md shadow-[#1E5128] hover:scale-110 duration-500 rounded-lg'>
              <img src={Tail} alt="JS logo" className='w-20 mx-auto' />
              <p className=''>TAILWIND CSS</p>
            </div>
            <div className='shadow-md shadow-[#1E5128] hover:scale-110 duration-500 rounded-lg'>
              <img src={Git} alt="JS logo" className='w-20 mx-auto' />
              <p className=''>GIT</p>
            </div>
            <div className='shadow-md shadow-[#1E5128] hover:scale-110 duration-500 rounded-lg'>
              <img src={Node} alt="JS logo" className='w-20 mx-auto text-green-500'/>
              <p className=''>NODEJS</p>
            </div>
            <div className='shadow-md shadow-[#1E5128] hover:scale-110 duration-500 rounded-lg'>
              <img src={Exp} alt="JS logo" className='w-28 mx-auto' />
              <p className=''>EXPRESS</p>
            </div>
            <div className='shadow-md shadow-[#1E5128] hover:scale-110 duration-500 rounded-lg'>
              <img src={Seq} alt="JS logo" className='w-20 mx-auto' />
              <p className=''>SEQUELIZE</p>
            </div>
            <div className='shadow-md shadow-[#1E5128] hover:scale-110 duration-500 rounded-lg'>
              <img src={Posgr} alt="JS logo" className='w-20 mx-auto' />
              <p className=''>POSTGRESQL</p>
            </div>
            <div className='shadow-md shadow-[#1E5128] hover:scale-110 duration-500 rounded-lg'>
              <img src={GitHub} alt="JS logo" className='w-20 mx-auto' />
              <p className=''>GITHUB</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
