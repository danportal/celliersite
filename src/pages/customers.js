import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

function Customers() {
  return (
    <div style={{ backgroundColor: "#EEECE6" }}>
      <style type="text/css">
        {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
      </style>

      {/* Second Div with William's quote 
Note: need to center text */}

      <style type="text/css">
        {`
    .centered {
      position: 
      absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    `}
      </style>

      {/* Third part with concrete back 
Note: need text on image */}

      {/* Last part with image left and text right 
Note: Button needs a dark border  style={{ backgroundColor: '#EEECE6'}} */}

      <Card style={{ backgroundColor: "#EEECE6", borderColor: "#EEECE6" }}>
        <Row style={{ padding: "6em" }}>
          <Image
            src="Images/ImageBollow.jpg"
            rounded
            width="40%"
            height="40%"
          ></Image>

          <Col xs={12} md={6}>
            <br></br>
            <Card
              style={{
                fontFamily: "montserrat",
                backgroundColor: "#EEECE6",
                borderColor: "#F1EDE2",
                padding: "5em",
              }}
              class="text-body"
            >
              <Card.Title
                style={{
                  fontSize: "3rem",
                  fontFamily: "montserrat",
                  textAlign: "left",
                  position: "absolute",
                  top: "45%",
                  left: "16%",
                }}
              >
                <b>THIS WILL BE CARD ONE - TEXT ON RIGHT </b>
              </Card.Title>
              <Card.Body
                style={{
                  fontSize: "1.3rem",
                  fontFamily: "montserrat",
                  textAlign: "left",
                  position: "absolute",
                  top: "75%",
                  left: "13%",
                }}
              >
                this is the card at the top text on right khkuafgskjhg
                skgLKHAkjgs kGSKA`JHGSHJ,AJHGSKJAGKJAHJDV
                AJGKDGSHJafkhsfjhafjkgs
              </Card.Body>
            </Card>
            <br></br>
            <br></br>
          </Col>
        </Row>
      </Card>

      <br></br>
      <br></br>
      <Card style={{ backgroundColor: "#EEECE6", borderColor: "#EEECE6" }}>
        <Row style={{ padding: "6em" }}>
          <Image
            src="Images/ImageBollow.jpg"
            rounded
            width="40%"
            height="40%"
          ></Image>

          <Col xs={12} md={6}>
            <br></br>
            <Card
              style={{
                fontFamily: "montserrat",
                backgroundColor: "#EEECE6",
                borderColor: "#F1EDE2",
                padding: "5em",
              }}
              class="text-body"
            >
              <Card.Title
                style={{
                  fontSize: "3rem",
                  fontFamily: "montserrat",
                  textAlign: "left",
                  position: "absolute",
                  top: "45%",
                  left: "16%",
                }}
              >
                <b>TEXT ON LEFT </b>
              </Card.Title>
              <Card.Body
                style={{
                  fontSize: "1.3rem",
                  fontFamily: "montserrat",
                  textAlign: "left",
                  position: "absolute",
                  top: "75%",
                  left: "13%",
                }}
              >
                Wsecond card image on right text on left shjkgsjsgksgs
                jkfajhfjksfajghL whjkAGSJAFKJYFSYJ
              </Card.Body>
            </Card>
            <br></br>
            <br></br>
          </Col>
        </Row>
      </Card>

      <br></br>
      <br></br>

      <Card style={{ backgroundColor: "#EEECE6", borderColor: "#EEECE6" }}>
        <Row style={{ padding: "6em" }}>
          <Image
            src="Images/ImageBollow.jpg"
            rounded
            width="40%"
            height="40%"
          ></Image>

          <Col xs={12} md={6}>
            <br></br>
            <Card
              style={{
                fontFamily: "montserrat",
                backgroundColor: "#EEECE6",
                borderColor: "#F1EDE2",
                padding: "5em",
              }}
              class="text-body"
            >
              <Card.Title
                style={{
                  fontSize: "3rem",
                  fontFamily: "montserrat",
                  textAlign: "left",
                  position: "absolute",
                  top: "45%",
                  left: "16%",
                }}
              >
                <b>TEXT ON RIGHT </b>
              </Card.Title>
              <Card.Body
                style={{
                  fontSize: "1.3rem",
                  fontFamily: "montserrat",
                  textAlign: "left",
                  position: "absolute",
                  top: "75%",
                  left: "13%",
                }}
              >
                image on left text on right hsigjhksfakjhsdfa\kgkjg
                jkaghkgdjkghajkb ljdgkjagKJGSAKJ
              </Card.Body>
            </Card>
            <br></br>
            <br></br>
          </Col>
        </Row>
      </Card>

    </div>
  );
}

export default Customers;
