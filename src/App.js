import logo from "./logo.svg"
import {Navbar,Container,Nav,NavDropdown,Form,FormControl,Button,Row,Col} from 'react-bootstrap'
import './App.css';

function App() {
  return (
      <Navbar  className="justify-content-md-center" bg="dark" variant="dark" fill="green" expand="lg" col="9" fixed="top">
  <Container fluid>
      <Col >
            <Navbar.Brand>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-check2-all" viewBox="0 0 16 16">
  <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
  <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
</svg>
        ToDo manager
      </Navbar.Brand>  
      </Col>
      <Col  md="auto">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Col>
      <Col  className="justify-content-end">
      <Navbar.Collapse className="justify-content-end">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
    </Navbar.Collapse>
        </Col>
  </Container>
</Navbar>


  );
}

export default App;
