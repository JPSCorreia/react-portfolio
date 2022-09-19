import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import contact from '../assets/contact.jpeg'
import {AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {TiTickOutline, TiTimesOutline} from 'react-icons/ti'

const Contact = () => {

  const form = useRef();

  const [submitted, setSubmitted] = useState('notSubmitted')

  const sendEmail = (e) => {

    //todo: meter loading no button antes de submitted e não deixar fazer submit sem os campos de email ou telefone talvez
    e.preventDefault();
    
    

    if (((submitted === 'notSubmitted') || (submitted === 'error')) && document.getElementById('name_input').value.length > 0 && document.getElementById('subject_input').value.length > 0 && document.getElementById('message_input').value.length > 0 && (document.getElementById('phone_input').value.length > 0 || document.getElementById('email_input').value.length > 0) ) {
      setSubmitted('loading')
      emailjs.sendForm('service_h4pebiy', 'template_osdth1z', form.current, 'yOktMpYjYqpxLX_TI')
        .then(() => {
          setSubmitted('submitted')
        }, (error) => {
          setSubmitted('error')
        });
    }
  };

  const renderButton = () => {
    switch (submitted) {
        case "submitted":
          return <div id='send-button' value="Send" className='cursor-default flex flex-center text-xl text-[#60f073] text-center align-items justify-center m-auto hover:scale-110 ease-in duration-100 uppercase'>Submitted<TiTickOutline  size={29} className='ml-2'/></div>;
        case "notSubmitted":
            return <button id='send-button' value="Send" className='cursor-pointer flex flex-center text-xl text-center align-items justify-center m-auto hover:text-[#67E8F9] hover:scale-110 ease-in duration-100 uppercase'>Send Message<AiOutlineMail  size={29} className='ml-2'/></button>
        case "loading":
            return <button id='send-button' value="Send" className='cursor-default flex flex-center text-xl text-center align-items justify-center m-auto text-[#ffffff]/60 hover:scale-110 ease-in duration-100 uppercase'>Sending...</button>
        case "error":
            return <button id='send-button' value="Send" className='cursor-pointer flex flex-center text-xl text-center align-items justify-center m-auto text-red-600 hover:scale-110 ease-in duration-100 uppercase'>Error<TiTimesOutline  size={29} className='ml-2'/></button>
        default:
            return null;
    }
  };
  
  return (
    <div id='contact' className='w-[90%] m-auto md:h-screen pt-6 mt-32 mb-16 lg:mb-16 xl:mb-16'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full flex flex-col justify-center h-full'>
        <p id='contact-start' className='text-xl tracking-widest uppercase text-[#67E8F9]' data-aos='fade-right' data-aos-anchor='#contact'>Contact</p>
        <h2 className='py-4 mb-4' data-aos='fade-right' data-aos-anchor='#contact'>Get In Touch</h2>
        <div className='' data-aos='fade-in' data-aos-anchor='#contact'>
          <div className='w-full shadow-custom2 shadow-[#67E8F9] p-4 justify-center flex flex-col mx-auto'>
            <div className='lg:p-4 h-full '>
              <div className=' flex flex-row justify-between'>
                <div className=''>
                  <h2 className='pb-2' id='contact-name'>João Correia</h2>
                  <p>Full Stack Developer</p>
                  <p className='mt-8'>Available for freelance or full-time positions.</p>
                  <p>Contact me so we can talk.</p>
                  {/* <div className='flex m-auto items-center justify-start py-1'>
                    <div className='rounded-full bg-[#121212] shadow-sm shadow-[#67E8F9] ml-0 p-3 m-2 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100'>
                      <FaLinkedinIn size={24}/>
                    </div>
                    <div className='rounded-full bg-[#121212] shadow-sm shadow-[#67E8F9] p-3 m-2 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100'>
                      <FaGithub size={24}/>
                    </div>
                    <div className='rounded-full bg-[#121212] shadow-sm shadow-[#67E8F9] p-3 m-2 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100'>
                      <AiOutlineMail size={24}/>
                    </div>
                    <div className='rounded-full bg-[#121212] shadow-sm shadow-[#67E8F9] p-3 m-2 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100'>
                      <BsFillPersonLinesFill size={24}/>
                    </div>
                  </div> */}
                </div>
                <div className='hidden lg:block w-[300px]'>
                  <img className='animated-image rounded-xl hover:scale-105 ease-in duration-300' src={contact} alt='' />
                </div>   
              </div>
              <div>

                <div className='col-span-3 w-full h-auto'>
                  <div className=''>
                    <form ref={form} onSubmit={sendEmail}>
                      <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                        <div className='flex flex-col'>
                          <label className='uppercase text-sm py-2'>Name</label>
                          <input className='border-2 rounded-lg p-3 flex border-gray-300 bg-transparent' type="text" name="user_name" id="name_input" />
                        </div>
                        <div className='flex flex-col'>
                          <label className='uppercase text-sm py-2'>Phone Number</label>
                          <input className='border-2 rounded-lg p-3 flex border-gray-300 bg-transparent' type="text" name="user_phone" id="phone_input" />
                        </div>
                      </div>
                      <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Email</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300 bg-transparent' type="email" name="user_email" id="email_input" />
                      </div>
                      <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Subject</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300 bg-transparent' type="text" name="user_subject" id="subject_input" />
                      </div>
                      <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Message</label>
                        <textarea className='border-2 rounded-lg p-3 border-gray-300 bg-transparent' rows="6" name="message" id="message_input" />
                      </div>
                      <div className='flex flex-row w-[95%] m-auto mt-6 mb-3 md:mb-0'>
                        {renderButton()}
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Contact