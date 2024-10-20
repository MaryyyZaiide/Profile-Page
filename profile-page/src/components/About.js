import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import Aboutpic1 from './Aboutpic1.jpg';
import Aboutpic2 from './Aboutpic2.jpg';
import Aboutpic3 from './Aboutpic3.jpg';

function About() {
  return (
    <Container className="mt-4 text-center">
      {/* Center the text */}
      <div className="mb-4">
        <h1>Welcome to My Profile!</h1>
        <p>
          I am Mary! <br />
          I love singing, watching series, traveling, and exploring new things.
        </p>
      </div>

      {/* Center the images */}
      <Row className="justify-content-center">
        <Col xs="auto">
          <Image 
            src={Aboutpic1} 
            style={{ width: '150px', height: '150px', objectFit: 'cover' }} // Medium square size
            className="img-fluid" 
            rounded 
          />
        </Col>
        <Col xs="auto">
          <Image 
            src={Aboutpic2} 
            style={{ width: '150px', height: '150px', objectFit: 'cover' }} // Medium square size
            className="img-fluid" 
            rounded 
          />
        </Col>
        <Col xs="auto">
          <Image 
            src={Aboutpic3} 
            style={{ width: '150px', height: '150px', objectFit: 'cover' }} // Medium square size
            className="img-fluid" 
            rounded 
          />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
