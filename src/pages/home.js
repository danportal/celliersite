import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function Home() {
  return (
    <Container fluid style={{ padding: 0, margin: 0, width: "100%" }}>
      <Row>
        {/* xs=12 means that this column will take up all 12 available bootstrap columns in the line, xs is for exstra small size and up. (see here for more info https://react-bootstrap.github.io/layout/grid/) */}
        <Col
          xs={12}
          style={{
            height: "700px",
            background:
              "url('Images/ImageAboveNew.jpg') no-repeat center fixed",
            "background-size": "cover",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                fontSize: "6vw",
                fontFamily: "Montserrat",
                textAlign: "center",
                color: "white",
              }}
            >
              FUNCTIONAL ELEGANCE
            </div>

            <div
              style={{
                fontSize: "2rem",
                fontFamily: "Montserrat",
                textAlign: "center",
                color: "white",
              }}
            >
              Manufacturer of Premium Concrete Wine Tanks
            </div>

            <div
              style={{
                textAlign: "center",
              }}
            >
              <br></br>
              <Button href="/contact" variant="outline-light" size="xxl">
                REQUEST A QUOTE
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <br></br>

      {/* this is the second card - it is also not responsive for some reason */}

      <Row>
        <Col xs={12}>
          <div
            style={{
              backgroundColor: "#EEECE6",
              fontSize: "2rem",
              fontFamily: "Montserrat, sans-serif",
              display: "flex",
              alignContent: "center",
              textAlign: "center",
              flexDirection: "column",
              paddingBottom: "1rem",
            }}
          >
            <h3 style={{ padding: "1rem", textAlign: "center" }}>
              "Winemakers are artisans who deserve exceptional vessels that
              enable their wines to express their full potential without any
              distraction"
            </h3>
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h4 style={{ width: "100%" }}>- William Souter, Co-Founder </h4>
            </span>
          </div>
        </Col>
      </Row>

      {/* This is the third card with the green concrete image, we struggled to place everything and cant keep it responsive */}

      <Row
        style={{
          height: "700px",
          background:
            "url('Images/ConcreteBackCrop.jpg') no-repeat center fixed",
          "background-size": "cover",
        }}
      >
        {/* xs=12 means that this column will take up 12 of all 12 available bootstrap columns in the line (full screen), xs is for exstra small size and up. (see here for more info https://react-bootstrap.github.io/layout/grid/) Then when the md size its it makes it 6 of 12 (half the screen) hebnce md={6} */}
        <Col
          xs={12}
          md={6}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              className="text-warning"
              style={{
                fontSize: "2rem",
                fontFamily: "montserrat",
                textAlign: "left",
              }}
            >
              THE BENEFITS
            </div>
            <div
              style={{
                fontSize: "3rem",
                fontFamily: "montserrat",
                textAlign: "center",
                color: "white",
              }}
            >
              <b>WHAT MAKES CONCRETE SO SPECIAL?</b>
            </div>
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              className="text-white"
              style={{
                fontSize: "2rem",
                fontFamily: "montserrat",
                textAlign: "center",
              }}
            >
              Concrete vessels are completely neutral which allows wines to
              express their unique identity by showcasing their purity and
              terroir.
            </div>
            <a
              href="/benefits"
              class="text-white"
              style={{
                textDecoration: "underline",
                fontSize: "2rem",
                fontFamily: "montserrat",
                textAlign: "center",
                color: "white",
              }}
            >
              <b onClick={{}}>DISCOVER THE BENEFITS</b>
            </a>
          </div>
        </Col>
      </Row>

      <Row style={{paddingTop: "2rem", paddingBottom:"2rem"}}>
        {/* xs=12 means that this column will take up 12 of all 12 available bootstrap columns in the line (full screen), xs is for exstra small size and up. (see here for more info https://react-bootstrap.github.io/layout/grid/) Then when the md size its it makes it 6 of 12 (half the screen) hebnce md={6} */}
        <Col
          xs={12}
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            src="Images/ImageBollowScaled.jpeg"
            rounded
          ></Image>
        </Col>
        <Col
          xs={12}
          md={6}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "2rem",
              fontFamily: "montserrat",
              textAlign: "center",
            }}
          >
            <b>OUR TANKS</b>
            <div style={{ marginBottom: "1rem" }}>
              We have made it our mission to produce premium wine tanks that
              stand out from the rest. The result? Wine tanks that are unique in
              construction, discerning in functionality and unparallelled in
              beauty
            </div>
            <Button variant="outline-secondary" href="/winetanks" size="xl">
              FIND OUT MORE
            </Button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <div
            style={{
              backgroundColor: "#EEECE6",
              fontSize: "2rem",
              fontFamily: "Montserrat, sans-serif",
              display: "flex",
              alignContent: "center",
              textAlign: "center",
              flexDirection: "column",
              padding: "4rem",
            }}
          >
            <h3 style={{ padding: "1rem", textAlign: "center" }}>
              Customise your tank's finish, features, fittings and more!
            </h3>
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                paddingBottom:"2rem"
              }}
            >
              <Button variant="outline-secondary">ENQUIRE NOW</Button>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
