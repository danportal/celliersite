import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container'
import { Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import {Formik} from 'formik';
import { useList } from "react-firebase-hooks/database";
import DataService from "../services/Services";
function ContactUs() {


  const AddTutorial = () => {
    const initialTutorialState = {
      title: "",
      description: "",
      published: false
    };
    const [tutorial, setTutorial] = useState(initialTutorialState);
    const [submitted, setSubmitted] = useState(false);
  
    const handleInputChange = event => {
      const { name, value } = event.target;
      setTutorial({ ...tutorial, [name]: value });
    };
  
    const saveTutorial = () => {
      var data = {
        title: tutorial.title,
        description: tutorial.description,
        published: false
      };
  
      TutorialDataService.create(data)
        .then(() => {
          setSubmitted(true);
        })
        .catch(e => {
          console.log(e);
        });
    };
  
    const newTutorial = () => {
      setTutorial(initialTutorialState);
      setSubmitted(false);
    };
  
  }

  return (
    <div style={{ backgroundColor: "#EEECE6" }}>
    
<Container fluid style={{fontFamily: "montserrat", padding: "10em",}}>
<Row lg={3} xs={2} >
<Col>
<Card style={{backgroundColor: "#EEECE6", borderColor: '#EEECE6',}}>
<Card.Title><b>GET IN TOUCH</b></Card.Title>  
<Card.Text>We'd love to hear from you</Card.Text>
</Card>
</Col>

<Col>
<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridFirstName" value = "1">
      <Form.Label>FIRST NAME</Form.Label>
      <Form.Control placeholder="" />
    </Form.Group>
<Form.Group as={Col} controlId="formGridLastName">
      <Form.Label>LAST NAME</Form.Label>
      <Form.Control placeholder="" />
    </Form.Group>
  </Form.Row>
</Form>
</Col>

</Row>

<Row lg={3} xs={2}>
<Col>
<Card style={{ backgroundColor: "#EEECE6", borderColor: '#EEECE6',}}>
<Card.Title><b>Email</b> </Card.Title>  
<Card.Text>Sales@cellierwinetanks.com</Card.Text>
</Card>
</Col>


<Col>

<Form.Group as={Col} controlId="formGridCountry">
      <Form.Label>Country</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>South Africa</option>
        <option>United Kingdoms</option>
        <option>Austria</option>
        <option>Angola</option>
        <option>Antigua and Barbuda	</option>
        <option>Argentina</option>
        <option>Australia</option>
        <option>Belgium</option>
        <option>Botswana</option>
        <option>Brazil </option>

        </Form.Control>
    </Form.Group>
    </Col>
    </Row>

<Row  lg={3} xs={2}>

<Col>
<Card style={{ backgroundColor: "#EEECE6", borderColor: '#EEECE6', }}>
<Card.Title><b>Phone</b></Card.Title>  
<Card.Text>+27 78 627 7978</Card.Text>
</Card>
</Col>
<Col>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

</Col>

    </Row>

<Row lg={3} xs={2} >

<Col></Col>
<Col>

<Form.Group controlId="formGridSubject">
    <Form.Label>Subject</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>
</Col>

</Row>

<Row lg={3} xs={2} >

<Col></Col>

<Col>
<Form.Group controlId="formGridMessage">
    <Form.Label>Message</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>

  <Button variant="light" 
  onClick={newTutorial}
  >Submit</Button>
  </Col>
</Row>



</Container>


    </div>
  );
}

export default { ContactUs,

};