/* rafce */
import React from 'react'
import './contact.css'
import {AiOutlineMail} from "react-icons/ai"
import {AiOutlineMessage} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qtpmvxo', 'template_yv3ax5a', form.current, 'aKoIWfA-og-YFcCt1')
    e.target.reset()
  };
  return (
    <section id="contact">
      <h5 className='text-light'>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact-options">
          <article className='contact'>
          <AiOutlineMail className='contact-icon'/>
          <h3>Email</h3>
          <h5>mezba0044@gmail.com</h5>
          <a href="mailto:mezba0044@gmail.com">Send a mail</a>
          </article>
          <article className='contact'>
            <AiOutlineMessage className='contact-icon'/>
            <h3>Messenger</h3>
            <a href="#" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className='contact'>
            <AiOutlineWhatsApp className='contact-icon'/>
            <h3>Whatsapp</h3>
            <a href="http://api.whatsapp.com/send?phone=8801717725593" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Name' required />
          <input type="email" name="email" placeholder='Your Mail' required />
          <textarea name="message" placeholder='Your Message' cols="30" rows="10" required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact