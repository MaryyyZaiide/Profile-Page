import React from 'react';
import { Container } from 'react-bootstrap';

function Skills() {
  return (
    <Container className="mt-4 text-center">
      <h2>My Skills</h2>
      <ul className="list-unstyled d-flex justify-content-center flex-column align-items-center">
        <li>JavaScript</li>
        <li>React</li>
        <li>CSS</li>
        <li>HTML</li>
      </ul>
    </Container>
  );
}

export default Skills;
