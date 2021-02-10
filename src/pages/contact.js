import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container'
import { Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import emailjs from 'emailjs-com';
import CountrySelect from 'react-bootstrap-country-select';

function ContactUs() {

function Submit(e) {
  e.preventDefault();

  emailjs.sendForm('service_z036s7c', 'template_igmyyfo', e.target, 'user_cG88QYkxxnCsjy4ph99gB')
  .then((result) => {
    console.log(result.text);
}, (error) => {
    console.log(error.text);
});
e.target.reset()
}




  return (
 
    
<Container fluid style={{fontFamily: "montserrat", backgroundColor: "#EEECE6", paddingTop : "5rem"}} className = "ml-3 ml-lg-0">
<Row lg={3} xs={1} style = {{padding : "5em"}}>
<Col>
<Col>
<Card style={{backgroundColor: "#EEECE6", borderColor: '#EEECE6',}}>
<Card.Title><b>GET IN TOUCH</b></Card.Title>  
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
<Card style={{ backgroundColor: "#EEECE6", borderColor: '#EEECE6', }}>
<Card.Title><b>Phone</b></Card.Title>  
<Card.Text>+27 78 627 7978</Card.Text>
</Card>
</Col>
</Col>

<Col>
<div>
            <Container fluid className = "ml-1 ml-lg-0" style = {{width : "180%"}}>
            <form onSubmit={Submit}>
                    <div className="row">
                
                      {/* FirstName */}
                        <div className="col-7 form-group ">
                        <Form.Label>FIRST NAME</Form.Label>
                        <input type="text" className="form-control" placeholder="" name="FirstName"/>
                        </div>
                        {/* LastName */}
                        <div className="col-7 form-group  ">
                        <Form.Label>LAST NAME</Form.Label>
                        <input type="text" className="form-control" placeholder="" name="LastName"/>
                        </div>
                        {/* Country */}
                        <div className="col-7 form-group">
                        <Form.Label>COUNTRY</Form.Label>
                            
                        <Form.Control as="select" defaultValue="" name = "Country">
                        <option>Choose...</option>
                        <option>...</option>
                        </Form.Control>
                        </div>
                        {/* Email */}
                        <div className="col-7 form-group  ">
                        <Form.Label>EMAIL</Form.Label>
                            <input type="email" className="form-control" placeholder="" name="Email"></input>
                        </div>
                        {/* SUbject */}
                        <div className="col-7 form-group  ">
                        <Form.Label>SUBJECT</Form.Label>
                            <input type="text" className="form-control" placeholder="" name="Subject"></input>
                        </div>

                        {/* Message */}
                        <div className="col-7 form-group ">
                        <Form.Label>MESSAGE</Form.Label>
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="" name="Message"></textarea>
                        </div>

                        <div className="col-7 ">
                            <input type="submit" className="btn" value="Send Message" style = {{color : "black" , borderColor : "black", backgroundColor : "#EEECE6"}} ></input>
                        </div>
                    </div>
                </form>
            </Container>
        </div>
    
    </Col>
    </Row>



</Container>

  );
}

export default  ContactUs;

