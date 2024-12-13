import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Header from './Header';
import Button from 'react-bootstrap/Button';
// import '../css/contact.css'; // Ensure this import is correct

function Contact() {
  return (
    <div>
       <Header />
    <Container className="contact-container">
      <Row>
        <Col>
          <h1>Contact Us</h1>
          <p>
            We would love to hear from you! If you have any questions, feedback, or suggestions, please fill out the form below, and we will get back to you as soon as possible.
          </p>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Your message" required />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Contact;