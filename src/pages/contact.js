import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container'
import { Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import emailjs from 'emailjs-com';

function ContactUs() {

function Submit(e) {
  e.preventDefault();

  emailjs.sendForm('gmail', 'template_igmyyfo', e.target, 'user_cG88QYkxxnCsjy4ph99gB')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
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
<Form onSubmit = {Submit}>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridFirstName" value = "1" name = "FirstName">
      <Form.Label>FIRST NAME</Form.Label>
      <Form.Control placeholder="" />
    </Form.Group>
<Form.Group as={Col} controlId="formGridLastName" name = "LastName">
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

<Form.Group as={Col} controlId="formGridCountry" name =  "Country">
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
    <Form.Group as={Col} controlId="formGridEmail" name =  "Email">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

</Col>

    </Row>

<Row lg={3} xs={2} >

<Col></Col>
<Col>

<Form.Group controlId="formGridSubject" name =  "Subject">
    <Form.Label>Subject</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>
</Col>

</Row>

<Row lg={3} xs={2} >

<Col></Col>

<Col>
<Form.Group controlId="formGridMessage" name =  "Message">
    <Form.Label>Message</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>

  <Button variant="light"
  onClick = {Submit} 
  >Submit</Button>
  </Col>
</Row>



</Container>


    </div>
  );
}

export default  ContactUs;

