import React, { useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import ProfilePic from '../assets/profile-pic.png';
import { Link } from 'react-scroll';
import { useLanguageContext } from '../context/LanguageContext';
import v1 from '../assets/Space2.mp4';

export const Home = () => {
  const { english } = useLanguageContext();
  useEffect(() => { }, [english]);

  if (english) {
    return (
      <div name='home' className='w-full h-screen bg-transparent'>
        <video className="object-cover w-screen h-screen fixed left-[0%] -z-10" src={v1} muted autoPlay loop></video>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-[#4E9F3D]'>
            Hello! My name is
          </p>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
              <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                Lorenzo Podio
              </h1>
              <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                I'm a Full Stack Developer
              </h2>
            </div>
            <div className='p-[6px] animate-change h-min bg-gradient-to-tl from-[#191a19] to-[#4e9f3d] rounded-full'>
              <img src={ProfilePic} alt="Profile Pic" className='w-72 rounded-full' />
            </div>
          </div>
          <p className='text-[#8892b0] py-4 max-w-[700px] italic'>
          Passionate about developing web applications that can provide a solution to the different 
          needs of society and learning more about this world every day.
          </p>
          <div>
            <Link to="experience" smooth={true} duration={700}>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4e9f3d] hover:border-[#4e9f3d]'>
                Experience
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3' />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div name='home' className='w-full h-screen bg-transparent'>
        <video className="object-cover w-screen h-screen fixed left-[0%] -z-10" src={v1} muted autoPlay loop></video>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-[#4E9F3D]'>
            Hola! Mi nombre es
          </p>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
              <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                Lorenzo Podio
              </h1>
              <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                Soy un Full Stack Developer
              </h2>
            </div>
            <div className='p-[6px] animate-change h-min bg-gradient-to-tl from-[#191a19] to-[#4e9f3d] rounded-full'>
              <img src={ProfilePic} alt="Profile Pic" className='w-72 rounded-full' />
            </div>
          </div>
          <p className='text-[#8892b0] py-4 max-w-[700px] italic'>
            Apasionado por el desarrollo de aplicaciones web que puedan brindar una solucion
            a las distintas necesidades de la sociedad y por aprender cada día más de este mundo.
          </p>
          <div>
            <Link to="experience" smooth={true} duration={700}>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4e9f3d] hover:border-[#4e9f3d]'>
                Ver Experiencia
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3' />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
