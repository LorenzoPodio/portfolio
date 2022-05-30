import React from 'react';
import excursionApp from '../assets/excursionApp.jpeg';
import dogsApp from '../assets/Dogs.jpeg';

export const Experience = () => {
  return (
    <div name='experience' className='w-full md:h-screen bg-[#191A19] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#4e9f3d]'>Experiencia</p>
          <p className='py-4 italic text-[#8892b0]'>// Estos son algunos de mis trabajos más recientes</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'> 
          <div style={{backgroundImage: `url(${excursionApp})`}}
          className='shadow-lg shadow-[#1E5128] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 duration-500'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="https://excursionapp.vercel.app/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 duration-500 bg-white text-gray-700 font-bold text-lg 
                  hover:bg-[#191a19] hover:text-gray-300'>Demo</button>
                </a>
                <a href="https://github.com/LorenzoPodio/PG-Henry" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 duration-500 bg-white text-gray-700 font-bold text-lg 
                  hover:bg-[#191a19] hover:text-gray-300'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${dogsApp})`}}
          className='shadow-lg shadow-[#1E5128] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 duration-500'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 duration-500 bg-white text-gray-700 font-bold text-lg 
                  hover:bg-[#191a19] hover:text-gray-300'>Demo</button>
                </a>
                <a href="/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 duration-500 bg-white text-gray-700 font-bold text-lg 
                  hover:bg-[#191a19] hover:text-gray-300'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
