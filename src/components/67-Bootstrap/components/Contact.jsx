import React, { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'

function Contact() {
   useEffect(() => {
      document.title = "Tech Help | Contact"
   }, []);
   return (
      <div className='container'>
         <div className="container">
            <Form>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                  </Form.Text>
               </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Type your message here</Form.Label>
                  <Form.Control as="textarea" rows={3} />
               </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="I love this site" />
               </Form.Group>
               <Button variant="primary" type="submit">
                  Submit
               </Button>
            </Form>
         </div>
      </div>
   )
}

export default Contact
