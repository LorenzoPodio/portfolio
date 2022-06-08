/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react'
import { useLanguageContext } from '../context/LanguageContext';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import { animateScroll as scroll } from 'react-scroll';

export const Contact = () => {
  const { english } = useLanguageContext();
  useEffect(() => { }, [english]);
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setInput(() => {
      return {
        ...input,
        [e.target.name]: e.target.value,
      };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('FORMULARIO:', e.target);

    if(english){
      if (!input.email || !input.message || !input.name) {
        e.preventDefault();
        swal({
          title: "Complete all the fields",
          icon: "error"
        })
      } else {
        e.preventDefault();
        emailjs.sendForm('service_56eitbm', 'template_0co723g', e.target, 'I6eT4vGxDn2vQSIoO')
          .then(res => console.log('Respuesta:', res))
          .catch(err => console.log('Error:', err));
        swal({
          title: "Your message was sent successfully",
          icon: "success",
        })
        setInput({
          name: "",
          email: "",
          message: ""
        });
        scroll.scrollToTop()
      }
    } else {
      if (!input.email || !input.message || !input.name) {
        e.preventDefault();
        swal({
          title: "Complete todos los campos",
          icon: "error"
        })
      } else {
        e.preventDefault();
        emailjs.sendForm('service_56eitbm', 'template_0co723g', e.target, 'I6eT4vGxDn2vQSIoO')
          .then(res => console.log('Respuesta:', res))
          .catch(err => console.log('Error:', err));
        swal({
          title: "Su mensaje fue enviado con éxito",
          icon: "success",
        })
        setInput({
          name: "",
          email: "",
          message: ""
        });
        scroll.scrollToTop()
      }
    }
  }

  if (english) {
    return (
      <div name='contact' className='w-full h-screen bg-transparent text-gray-300 flex justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w-[700px] w-full' onSubmit={(e) => handleSubmit(e)}>
          <div className='pb-6'>
            <p className='text-4xl font-bold inline border-b-4 border-[#4e9f3d]'>Contact</p>
            <p className='pt-4 italic text-[#8892b0]'>// Send a message through this form or just write an email to <span className='text-[#4e9f3d] font-bold'>lorenzopedropodio@gmail.com</span></p>
          </div>
          <input onChange={(e) => handleChange(e)} className='bg-[#ccd6f6] p-2'
            type="text" placeholder='Your name' name='name' value={input.name} />
          <input onChange={(e) => handleChange(e)} className='bg-[#ccd6f6] my-4 p-2 bg-'
            type="email" placeholder='Your email' name='email' value={input.email} />
          <textarea className='bg-[#ccd6f6] p-2 text-black font-medium' name="message" onChange={(e) => handleChange(e)}
            rows="8" placeholder='Message' value={input.message}></textarea>
          <button type="submit" className='text-white border-2 hover:bg-[#4e9f3d] hover:border-[#4e9f3d] px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
        </form>
      </div>
    )
  } else {
    return (
      <div name='contact' className='w-full h-screen bg-transparent text-gray-300 flex justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w-[700px] w-full' onSubmit={(e) => handleSubmit(e)}>
          <div className='pb-6'>
            <p className='text-4xl font-bold inline border-b-4 border-[#4e9f3d]'>Contacto</p>
            <p className='pt-4 italic text-[#8892b0]'>// Envie un mensaje a través del formulario o escriba un email a <span className='text-[#4e9f3d] font-bold'>lorenzopedropodio@gmail.com</span></p>
          </div>
          <input onChange={(e) => handleChange(e)} className='bg-[#ccd6f6] text-black font-medium p-2'
            type="text" placeholder='Su nombre' name='name' value={input.name} />
          <input onChange={(e) => handleChange(e)} className='bg-[#ccd6f6] my-4 p-2 text-black font-medium'
            type="email" placeholder='Su email' name='email' value={input.email} />
          <textarea className='bg-[#ccd6f6] p-2 text-black font-medium' name="message" onChange={(e) => handleChange(e)}
            rows="8" placeholder='Mensaje' value={input.message}></textarea>
          <button type="submit" className='text-white border-2 hover:bg-[#4e9f3d] hover:border-[#4e9f3d] px-4 py-3 my-8 mx-auto flex items-center'>
            Enviar
          </button>
        </form>
      </div>
    )
  }
}
