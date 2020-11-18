import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button";

const NavigationBar = () => {


  return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Bookshop</Navbar.Brand>
        Number of books 

        <Button>Sign out</Button>

      </Navbar>
  );
};

export default NavigationBar;