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

  emailjs.sendForm('service_z036s7c', 'template_igmyyfo', e.target, 'user_cG88QYkxxnCsjy4ph99gB')
  .then((result) => {
    console.log(result.text);
}, (error) => {
    console.log(error.text);
});
e.target.reset()
}


  return (
    <div style={{ backgroundColor: "#EEECE6" }}>
    
<Container fluid style={{fontFamily: "montserrat", padding: "10em",}}>
<Row lg={2} xs={1} style = {{padding : "5em"}}>
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
            <div className="container">
            <form onSubmit={Submit}>
                    <div className="row">
                
                      {/* FirstName */}
                        <div className="col-8 form-group mx-auto">
                        <Form.Label>FIRST NAME</Form.Label>
                        <input type="text" className="form-control" placeholder="" name="FirstName"/>
                        </div>
                        {/* LastName */}
                        <div className="col-8 form-group pt-2 mx-auto">
                        <Form.Label>LAST NAME</Form.Label>
                        <input type="text" className="form-control" placeholder="" name="LastName"/>
                        </div>
                        {/* Country */}
                        <div className="col-8 form-group pt-2 mx-auto">
                        <Form.Label>COUNTRY</Form.Label>
                            <input type="text" className="form-control" placeholder="" name="Country"/>
                        </div>
                        {/* Email */}
                        <div className="col-8 form-group pt-2 mx-auto">
                        <Form.Label>EMAIL</Form.Label>
                            <input type="email" className="form-control" placeholder="" name="Email"></input>
                        </div>
                        {/* SUbject */}
                        <div className="col-8 form-group pt-2 mx-auto">
                        <Form.Label>SUBJECT</Form.Label>
                            <input type="text" className="form-control" placeholder="" name="Subject"></input>
                        </div>

                        {/* Message */}
                        <div className="col-8 form-group pt-2 mx-auto">
                        <Form.Label>MESSAGE</Form.Label>
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="" name="Message"></textarea>
                        </div>

                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message" style = {{color : "#EEECE6"}} ></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    
    </Col>
    </Row>
</Container>


    </div>
  );
}

export default  ContactUs;

