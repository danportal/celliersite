import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container'
import { Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import emailjs from 'emailjs-com';
import { Component } from 'react';
import { render } from '@testing-library/react';

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


function FormContact() {
    
return(

<Col>
<div>
            <Container fluid className = "ml-1 ml-lg-0" style = {{width : "180%", textAlign : "left"}}>
            <form onSubmit={Submit}>
                    <Row lg={2} xs={1}>
                
                      {/* FirstName */}
                        <div className="col-7 form-group ">
                        <Form.Label>FIRST NAME</Form.Label>
                        <input  style = {{borderColor : "black", border : "solid", borderRadius : "0"}} type="text" className="form-control" placeholder="" name="FirstName"/>
                        </div>
               
              
                        {/* LastName */}
                        <div className="col-7 form-group  ">
                        <Form.Label>LAST NAME</Form.Label>
                        <input  style = {{borderColor : "black", border : "solid", borderRadius : "0"}} type="text" className="form-control" placeholder="" name="LastName"/>
                        </div>
                
                </Row>
                <Row lg={2} xs={1}>
                        {/* Country */}
                        <div className="col-7 form-group">
                        <Form.Label>COUNTRY</Form.Label>
                        <Form.Label htmlFor="inlineFormInputGroupUsername" srOnly>Username</Form.Label>
                        <Form.Control  style = {{borderColor : "black", border : "solid", borderRadius : "0"}} as="select" defaultValue="Choose..." name="Country" >
    <option style = {{fontSize : "0px", color : "grey"}}>Select your country of residence</option>
    <option>South Africa</option>
     <option>Afghanistan</option>
     <option>Aland Islands</option>
     <option>Albania</option>
     <option>Algeria</option>
     <option>American Samoa</option>
     <option>Andorra</option>
     <option>Angola</option>
     <option>Anguilla</option>
     <option>Antarctica</option>
     <option>Antigua and Barbuda</option>
     <option>Argentina</option>
     <option>Armenia </option>
     <option>Aruba</option>
     <option>Australia</option>
     <option>Austria</option>
     <option>Azerbaijan </option>
     <option>Bahamas</option>
     <option>Bahrain</option>
     <option>Bangladesh</option>
     <option>Barbados</option>
     <option>Belarus</option>
     <option>Belgium</option>
     <option>Belize</option>
     <option>Benin</option>
     <option>Bermuda</option>
     <option>Bhutan</option>
     <option>Bolivia</option>
     <option>Bosnia and Herzegovina</option>
     <option>Botswana</option>
     <option>Bouvet Island</option>
     <option>Brazil</option>
     <option>British Indian Ocean Territory</option>
     <option>Brunei Darussalam</option>
     <option>Bulgaria</option>
     <option>Burkina Faso </option>
     <option>Burundi</option>
     <option>Cambodia</option>
     <option>Cameroon</option>
     <option>Canada</option>
     <option>Cape Verde</option>
     <option>Cayman Islands</option>
     <option>Central African Republic</option>
     <option>Chad</option>
     <option>Chile</option>
     <option>China</option>
     <option>Christmas Island</option>
     <option>Cocos (Keeling) Islands</option>
     <option>Colombia</option>
     <option>Comoros</option>
     <option>Congo", </option>
     <option>Congo, The Democratic Republic of the</option>
     <option>Cook Islands</option>
     <option>Costa Rica</option>
     <option>Cote D'Ivoire</option>
     <option>Croatia </option>
     <option>Cuba</option>
     <option>Cyprus</option>
     <option>Czech Republic</option>
     <option>Denmark</option>
     <option>Djibouti</option>
     <option>Dominica</option>
     <option>Dominican Republic</option>
     <option>Ecuador</option>
     <option>Egypt</option>
     <option>El Salvador</option>
     <option>Equatorial Guinea</option>
     <option>Eritrea</option>
     <option>Estonia</option>
     <option>Ethiopia</option>
     <option>Falkland Islands (Malvinas)</option>
     <option>Faroe Islands</option>
     <option>Fiji</option>
     <option>Finland</option>
     <option>France</option>
     <option>French Guiana</option>
     <option>French Polynesia</option>
     <option>French Southern Territories</option>
     <option>Gabon</option>
     <option>Gambia</option>
     <option>Georgia</option>
     <option>Germany </option>
     <option>Ghana</option>
     <option>Gibraltar</option>
     <option>Greece</option>
     <option>Greenland </option>
     <option>Grenada</option>
     <option>Guadeloupe</option>
     <option>Guam</option>
     <option>Guatemala</option>
     <option>Guernsey</option>
     <option>Guinea</option>
     <option>Guinea-Bissau</option>
     <option>Guyana </option>
     <option>Haiti</option>
     <option>Heard Island and Mcdonald Islands</option>
     <option>Holy See (Vatican City State)</option>
     <option>Honduras</option>
     <option>Hong Kong</option>
     <option>Hungary</option>
     <option>Iceland</option>
     <option>India</option>
     <option>Indonesia</option>
     <option>Iran, Islamic Republic Of</option>
     <option>Iraq</option>
     <option>Ireland</option>
     <option>Isle of Man</option>
     <option>Israel </option>
     <option>Italy</option>
     <option>Jamaica</option>
     <option>Japan</option>
     <option>Jersey</option>
     <option>Jordan</option>
     <option>Kazakhstan</option>
     <option>Kenya</option>
     <option>Kiribati</option>
     <option>North Korea</option>
     <option>South Korea</option>
     <option>Kuwait</option>
     <option>Kyrgyzstan</option>
     <option>Lao People'S Democratic Republic</option>
     <option>Latvia</option>
     <option>Lebanon</option>
     <option>Lesotho</option>
     <option>Liberia</option>
     <option>Libyan Arab Jamahiriya </option>
     <option>Liechtenstein</option>
     <option>Lithuania</option>
     <option>Luxembourg</option>
     <option>Macao</option>
     <option>Macedonia</option>
     <option>Madagascar</option>
     <option>Malawi</option>
     <option>Malaysia</option>
     <option>Maldives</option>
     <option>Mali</option>
     <option>Malta</option>
     <option>Marshall Islands</option>
     <option>Martinique</option>
     <option>Mauritania</option>
     <option>Mauritius</option>
     <option>Mayotta</option>
     <option>Mexico</option>
     <option>Micronesia</option>
     <option>Moldova</option>
     <option>Monaco </option>
     <option>Mongolia</option>
     <option>Montserrat</option>
     <option>Morocco </option>
     <option>Mozambique</option>
     <option>Myanmar</option>
     <option>Namibia</option>
     <option>Nauru</option>
     <option>Nepal</option>
     <option>Netherlands</option>
     <option>Netherlands Antilles</option>
     <option>New Caledonia</option>
     <option>New Zealand</option>
     <option>Nicaragua</option>
     <option>Niger</option>
     <option>Nigeria</option>
     <option>Niue</option>
     <option>Norfolk Island</option>
     <option>Northern Mariana Islands</option>
     <option>Norway</option>
     <option>Oman</option>
     <option>Pakistan</option>
     <option>Palau</option>
     <option>Palestinian Territory, Occupied</option>
     <option>Panama</option>
     <option>Papua New Guinea</option>
     <option>Paraguay </option>
     <option>Peru</option>
     <option>Philippines</option>
     <option>Pitcairn</option>
     <option>Poland</option>
     <option>Portugal</option>
     <option>Puerto Rico</option>
     <option>Qatar</option>
     <option>Reunion</option>
     <option>Romania</option>
     <option>Russian Federation</option>
     <option>RWANDA</option>
     <option>Saint Helena</option>
     <option>Saint Kitts and Nevis</option>
     <option>Saint Lucia</option>
     <option>Saint Pierre and Miquelon</option>
     <option>Saint Vincent and the Grenadines</option>
     <option>Samoa</option>
     <option>San Marino</option>
     <option>Sao Tome and Principe</option>
     <option>Saudi Arabia</option>
     <option>Senegal</option>
     <option>Serbia and Montenegro</option>
     <option>Seychelles</option>
     <option>Sierra Leone</option>
     <option>Singapore</option>
     <option>Slovakia</option>
     <option>Slovenia</option>
     <option>Solomon Islands</option>
     <option>Somalia</option>
     <option>South Georgia and the South Sandwich Islands</option>
     <option>Spain</option>
     <option>Sri Lanka</option>
     <option>Sudan</option>
     <option>Suriname</option>
     <option>Svalbard and Jan Mayen</option>
     <option>Swaziland</option>
     <option>Sweden</option>
     <option>Switzerland</option>
     <option>Syrian Arab Republic</option>
     <option>Taiwan, Province of China</option>
     <option>Tajikistan</option>
     <option>Tanzania, United Republic of</option>
     <option>Thailand</option>
     <option>Timor-Leste</option>
     <option>Togo</option>
     <option>Tokelau</option>
     <option>Tonga</option>
     <option>Trinidad and Tobago</option>
     <option>Tunisia</option>
     <option>Turkey</option>
     <option>Turkmenistan</option>
     <option>Turks and Caicos Islands</option>
     <option>Tuvalu</option>
     <option>Uganda</option>
     <option>Ukraine</option>
     <option>United Arab Emirates</option>
     <option>United Kingdom</option>
     <option>United States</option>
     <option>United States Minor Outlying Islands</option>
     <option>Uruguay</option>
     <option>Uzbekistan</option>
     <option>Vanuatu</option>
     <option>Venezuela</option>
     <option>Viet Nam</option>
     <option>Virgin Islands, British</option>
     <option>Virgin Islands, U.S.</option>
     <option>Wallis and Futuna</option>
     <option>Western Sahara</option>
     <option>Yemen</option>
     <option>Zambia</option>
     <option>Zimbabwe </option>
                        </Form.Control>
                        </div>

                        {/* Email */}
                        <div className="col-7 form-group  ">
                        <Form.Label>EMAIL</Form.Label>
                            <input  style = {{borderColor : "black", border : "solid", borderRadius : "0"}} type="email" className="form-control" placeholder="" name="Email"></input>
                        </div>

                        </Row>
                        <Row lg={1} xs={1}>
                        {/* SUbject */}
                        <div className="col-7 form-group  ">
                        <Form.Label>SUBJECT</Form.Label>
                            <input  style = {{borderColor : "black", border : "solid", borderRadius : "0"}} type="text" className="form-control" placeholder="" name="Subject"></input>
                        </div>
                        </Row>
                        <Row lg={1} xs={1}>
                        {/* Message */}
                        <div className="col-7 form-group ">
                        <Form.Label>MESSAGE</Form.Label>
                            <textarea  style = {{borderColor : "black", border : "solid", borderRadius : "0"}} className="form-control" id="" cols="30" rows="8" placeholder="" name="Message"></textarea>
                        </div>

                        <div className="col-7 ">
                            <input  style = {{borderColor : "black", border : "solid", borderRadius : "0" ,borderWidth : "1px"}}type="submit" className="btn" value="Send Message" style = {{color : "black" , borderColor : "black", backgroundColor : "#EEECE6"}} ></input>
                        </div>
                        </Row>
                </form>
            </Container>
        </div>
    
    </Col>

)
}



export default FormContact;