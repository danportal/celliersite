import Navbar from "react-bootstrap/Navbar";

const navBar = () => {

    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logomain.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          React Bootstrap
        </Navbar.Brand>
      </Navbar>
    )
}

export default navBar;