import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p8hfvct', 'template_sk2a35h', form.current, {
        publicKey: 'ayhmKEMzuKXgiajME',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Message delivered, I´ll answer your e-mail as soon as posible. Kind regards.");
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Sorry, something went wrong. Please try again later.")
        },
      );
  };

  return (
    <div id='contact-box' >
        <Form ref={form} onSubmit={sendEmail} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label'>Name</Form.Label>
        <br />
        <Form.Control className='input' type="text" placeholder="Introduce yourself" name="user_name"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label'>Email address</Form.Label>
        <br />
        <Form.Control className='input' type="email" placeholder="Enter contact email" name="user_email"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='label'>Message</Form.Label>
        <br />
        <Form.Control className='input' as="textarea" rows={1} placeholder="Leave your message here" name="message" />
      </Form.Group>

      <Button variant="primary" type="submit"  className='white-btn'>
        Send Message
      </Button>

    </Form>
      
    </div>
  )
}

export default ContactForm
