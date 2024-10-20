import React from 'react';
import {Container, Image, Row } from "react-bootstrap";
import Aboutpic1 from './Aboutpic1.jpg';
import Aboutpic2 from './Aboutpic2.jpg';
import Aboutpic3 from './Aboutpic3.jpg';

function About() {
  return (
    <Container className="mt-4">
      <Row>
      <Image 
                src={Aboutpic1} 
                style={{ width: '300px', height: 'auto' }} // Adjust the width as needed
                className="img-fluid" 
                rounded 
              />
        
        <Image 
                src={Aboutpic2} 
                style={{ width: '300px', height: 'auto' }} // Adjust the width as needed
                className="img-fluid" 
                rounded 
              />

        <Image 
                src={Aboutpic3} 
                style={{ width: '300px', height: 'auto' }} // Adjust the width as needed
                className="img-fluid" 
                rounded 
              />
      </Row>
    </Container>
  );
}

export default About;
