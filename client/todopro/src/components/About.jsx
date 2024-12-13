import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
// import '../css/about.css'; // Ensure this import is correct

function About() {
  return (
    <div>
      <Header/>
    <Container className="about-container">
      <Row>
        <Col>
          <h1>About Todo-Management</h1>
          <p>
            Todo-Management is a simple and efficient application designed to help you manage your tasks and stay organized. 
            Whether you have personal tasks, work-related projects, or anything in between, our app provides a user-friendly interface 
            to keep track of your to-dos.
          </p>
          <h2>Features</h2>
          <ul>
            <li>Create, edit, and delete tasks</li>
            <li>Organize tasks by categories</li>
            <li>Mark tasks as completed</li>
            <li>User authentication for personalized experience</li>
            <li>Responsive design for mobile and desktop use</li>
          </ul>
          <h2>Getting Started</h2>
          <p>
            To get started, simply register for an account or log in if you already have one. 
            Once you're in, you can start adding your tasks and managing your to-do list with ease!
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or feedback, feel free to reach out through our 
            <a href="/contact"> contact page</a>.
          </p>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default About;