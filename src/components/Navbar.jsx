import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import ProdilePic from '../assets/profilePic.png';
import { Link } from 'react-scroll';

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleCloseNav = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#191A19] text-gray-300'>
      <div>
        <img src={ProdilePic} alt="Logo Img" className='w-[40px]' />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link className='hover:border-b-4 hover:border-[#4e9f3d] duration-200' to="home" smooth={true} duration={700}>Home</Link>
        </li>
        <li>
          <Link className='hover:border-b-4 hover:border-[#4e9f3d] duration-200' to="about" smooth={true} duration={700}>About</Link>
        </li>
        <li>
          <Link className='hover:border-b-4 hover:border-[#4e9f3d] duration-200' to="skills" smooth={true} duration={700}>Skills</Link>
        </li>
        <li>
          <Link className='hover:border-b-4 hover:border-[#4e9f3d] duration-200' to="experience" smooth={true} duration={700}>Experience</Link>
        </li>
        <li>
          <Link className='hover:border-b-4 hover:border-[#4e9f3d] duration-200' to="contact" smooth={true} duration={700} offset={-20}>Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleCloseNav} className='md:hidden z-10'>
        {!nav ? <FaBars className='hover:cursor-pointer' /> : <FaTimes className='hover:cursor-pointer' />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#191A19] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl hover:border-b-4 hover:border-[#4e9f3d] duration-200'><Link onClick={handleCloseNav} to="home" smooth={true} duration={700}>Home</Link></li>
        <li className='py-6 text-4xl hover:border-b-4 hover:border-[#4e9f3d] duration-200'><Link onClick={handleCloseNav} to="about" smooth={true} duration={700}>About</Link></li>
        <li className='py-6 text-4xl hover:border-b-4 hover:border-[#4e9f3d] duration-200'><Link onClick={handleCloseNav} to="skills" smooth={true} duration={700}>Skills</Link></li>
        <li className='py-6 text-4xl hover:border-b-4 hover:border-[#4e9f3d] duration-200'><Link onClick={handleCloseNav} to="experience" smooth={true} duration={700}>Experience</Link></li>
        <li className='py-6 text-4xl hover:border-b-4 hover:border-[#4e9f3d] duration-200'><Link onClick={handleCloseNav} to="contact" smooth={true} duration={700} offset={-20}>Contact</Link></li>
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-600'>
            <a href="https://www.linkedin.com/in/lorenzo-podio/" target='_blank' className='flex justify-between items-center w-full text-gray-300'>
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333]'>
            <a href="https://github.com/LorenzoPodio" target='_blank' className='flex justify-between items-center w-full text-gray-300'>
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#6fc2b0]'>
            <Link to="contact" smooth={true} duration={700} offset={-20} className='flex justify-between items-center w-full text-gray-300'>
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#565f69]'>
            <a href="" target='_blank' className='flex justify-between items-center w-full text-gray-300'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
