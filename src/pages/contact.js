import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container'
import { Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import emailjs from 'emailjs-com';
import FormContact from "./Component/FormContact";

function ContactUs() {

  return (
 
    
<Container style={{fontFamily: "montserrat", backgroundColor: "#EEECE6", paddingTop : "5rem", textAlign : "center" }} >

<Row lg={3} xs={1} style = {{ padding : "1rem", paddingTop : "5rem", }}>
<Col style = {{ textAlign : "left", }} >
<Col>
<Card style={{backgroundColor: "#EEECE6", borderColor: '#EEECE6',}}>
<Card.Title style = {{fontSize : "25px"}}><b>GET IN TOUCH</b></Card.Title>  
<Card.Text>We'd love to hear from you</Card.Text>
</Card>
</Col>

<Col>
<Card style={{ backgroundColor: "#EEECE6", borderColor: '#EEECE6',}}>
<Card.Title><b>Email</b> </Card.Title>  
<Card.Text>Sales@cellierwinetanks.com</Card.Text>
</Card>
</Col>




<Col>
<Card style={{ backgroundColor: "#EEECE6", borderColor: '#EEECE6',paddingBottom : "5rem" }}>
<Card.Title><b>Phone</b></Card.Title>  
<Card.Text>+27 78 627 7978</Card.Text>
</Card>
</Col>
</Col>

<FormContact></FormContact>
    </Row>



</Container>

  );
}

export default  ContactUs;

