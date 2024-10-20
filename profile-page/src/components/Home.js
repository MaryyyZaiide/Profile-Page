import React from 'react';
import { Col, Container, Image, Row } from "react-bootstrap";
import Profilepic from './Profilepic.jpg'; // Ensure this path is correct

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">Welcome to My Profile!</h1>
      <p className="lead">Description</p>

      {/* Center the image holder */}
      <div className="mt-4">
        <Container>
          <Row>
            <Col xs={12} md={6} className="mx-auto">
              <Image 
                src={Profilepic} 
                style={{ width: '300px', height: 'auto' }} // Adjust the width as needed
                className="img-fluid" 
                rounded 
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
