import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';       // Correct import
import Contact from './components/Contact'; // Correct import
import Skills from './components/Skills';   // Correct import
import About from './components/About';     // Correct import
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        {/* Navbar Component */}
        <Navbar bg="dark" variant="dark">
          <Container>
            {/* Use 'as={Link}' for internal navigation */}
            <Navbar.Brand as={Link} to="/">MY PROFILE PAGE</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Define Routes */}
        <Container className="mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </>
    </Router>
  );
}

export default App;
