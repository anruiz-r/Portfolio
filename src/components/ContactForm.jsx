import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactForm() {
  return (
    <div id='contact-box' >
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label'>Name</Form.Label>
        <br />
        <Form.Control className='input' type="text" placeholder="Introduce yourself" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label'>Email address</Form.Label>
        <br />
        <Form.Control className='input' type="email" placeholder="Enter contact email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='label'>Message</Form.Label>
        <br />
        <Form.Control className='input' as="textarea" rows={1} placeholder="Leave your message here" />
      </Form.Group>

  
      <Button variant="primary" type="submit"  className='white-btn'>
        Send Message
      </Button>

    </Form>
      
    </div>
  )
}

export default ContactForm
