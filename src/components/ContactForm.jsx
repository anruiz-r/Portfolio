import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactForm() {
  return (
    <div id='contact-box' >
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <br />
        <Form.Control className='input' type="text" placeholder="Enter your name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <br />
        <Form.Control className='input' type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <br />
        <Form.Control className='input' as="textarea" rows={3} placeholder="Leave your message" />
      </Form.Group>

  
      <Button variant="primary" type="submit"  className='white-btn'>
        Send Message
      </Button>

    </Form>
      
    </div>
  )
}

export default ContactForm
