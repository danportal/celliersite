
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import About from "./pages/about";
import Benefits from "./pages/benefits";
import Contact from "./pages/contact";
import Customers from "./pages/customers";
import Home from "./pages/home";
import Winetanks from "./pages/winetanks";



function App() {
  return (
    <div className="App"> 
  <Navbar>
  <Navbar.Brand href="#home">logo needs to go here </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#login">request button goes here</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
}

export default App;