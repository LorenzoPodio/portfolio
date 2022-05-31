import React, { useEffect } from 'react'
import { useLanguageContext } from '../context/LanguageContext';

export const Contact = () => {
  const { english } = useLanguageContext();
  useEffect(() => { }, [english]);

  if(english){
    return (
      <div name='contact' className='w-full h-screen bg-[#191A19] text-gray-300 flex justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w-[700px] w-full'>
          <div className='pb-6'>
            <p className='text-4xl font-bold inline border-b-4 border-[#4e9f3d]'>Contact</p>
            <p className='pt-4 italic text-[#8892b0]'>// Send a message through this form or just write an email to <span className='text-[#4e9f3d] font-bold'>lorenzopedropodio@gmail.com</span></p>
          </div>
          <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='nombre' />
          <input className='bg-[#ccd6f6] my-4 p-2 bg-' type="email" placeholder='Email' name='email' />
          <textarea className='bg-[#ccd6f6] p-2' name="mensaje" rows="8" placeholder='Message'></textarea>
          <button type="submit" className='text-white border-2 hover:bg-[#4e9f3d] hover:border-[#4e9f3d] px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
        </form>
      </div>
    )
  } else {
    return (
      <div name='contact' className='w-full h-screen bg-[#191A19] text-gray-300 flex justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w-[700px] w-full'>
          <div className='pb-6'>
            <p className='text-4xl font-bold inline border-b-4 border-[#4e9f3d]'>Contacto</p>
            <p className='pt-4 italic text-[#8892b0]'>// Envie un mensaje a través del formulario o escriba un email a <span className='text-[#4e9f3d] font-bold'>lorenzopedropodio@gmail.com</span></p>
          </div>
          <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Nombre' name='nombre' />
          <input className='bg-[#ccd6f6] my-4 p-2 bg-' type="email" placeholder='Email' name='email' />
          <textarea className='bg-[#ccd6f6] p-2' name="mensaje" rows="8" placeholder='Mensaje'></textarea>
          <button type="submit" className='text-white border-2 hover:bg-[#4e9f3d] hover:border-[#4e9f3d] px-4 py-3 my-8 mx-auto flex items-center'>Enviar</button>
        </form>
      </div>
    )
  }
}
