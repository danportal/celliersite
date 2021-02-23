import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
function About() {
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

<Container   style = {{textAlign : "center",backgroundColor: "#EEECE6",}}>

<Row  style = {{paddingTop : "5rem", paddingBottom : "3rem",}}>

<Row lg={2} xs={1}>
<Col style = {{textAlign : "center"}}>
    
<Image src="Images/AboutPhoto.jpg" rounded 
width="90%"
height="90%"
style={{ textAlign: 'center', border : "solid", borderRadius : "0" ,borderWidth : "3px", borderColor : "#EEECE6", padding : "0em" , marginTop: "4rem", }}
/>

</Col>

<Col>
<Card style={{
  fontFamily: "montserrat",
  backgroundColor: "#EEECE6",
  borderColor: "#F1EDE2",
  
}}>

<Card.Body>

<Card.Title > <h6>OUR STORY</h6></Card.Title>
<br></br>
<Card.Subtitle><h2><b>THE CONCEPTION</b></h2></Card.Subtitle>
<br></br>
<Card.Text style = {{textAlign : "left"}}>
Cellier Wine Tanks started in a mountain side garage by owners John and William after discovering the European egg shaped tanks in a local winery in early 2016. <br></br><br></br>
With a mutual love of wine and already operating in the concrete industry, pursuing this new project was the perfect step forward. Inspired by the European innovators and our French family heritage, the father and son duo embarked on an adventure to develop a uniquely constructed concrete egg that stood out from the rest. <br></br><br></br>
Over the next 4 years, working prototypes were continually tested, redesigned and refined until in late 2019, a prototype was born that satisfied their scrupulous expectations. In January 2020, Miles Mossop took a leap of faith and was the first winemaker to both ferment and age in Cellier eggs, one filled with Chenin Blanc, the other with Cinsault. 
</Card.Text>
</Card.Body>
</Card>
</Col>
</Row>

</Row>
</Container>
<Container fluid>
<Row>
        {/* xs=12 means that this column will take up all 12 available bootstrap columns in the line, xs is for exstra small size and up. (see here for more info https://react-bootstrap.github.io/layout/grid/) */}
        <Col
          xs={12}
          style={{
            height: "550px",
            background:
              "url('Images/ourstory bckgr miage overlay_2.jpg') no-repeat center fixed",
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
                fontSize: "1rem",
                fontFamily: "Montserrat",
                textAlign: "center",
                color: "red",
                paddingBottom : "1rem"
              }}
            >
              THE VISION
            </div>

            <div
              style={{
                fontSize: "2rem",
                fontFamily: "Montserrat",
                textAlign: "center",
                color: "white",

              }}
            >
            Cellier’s driving force is simple - to create elegant, innovative, world class concrete wine tanks <br></br>  
            that give winemakers the control to craft their masterpieces - with less intervention.              </div>


          </div>
        </Col>
      </Row>
      <br></br>
      </Container>

<Container style = {{textAlign : "left",backgroundColor: "#EEECE6",}}>
<Row lg={2} xs={1} style ={{paddingTop : "3rem"}} >


<Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
<Card style={{
  fontFamily: "montserrat",
  backgroundColor: "#EEECE6",
  borderColor: "#F1EDE2",

}}>

<Card.Body>

<Card.Title style = {{ color : "red", fontSize : "0.9rem",}}>THE ETHOS</Card.Title>

<Card.Subtitle style = {{fontSize : "2rem"}}><b>WHAT WE ARE ALL ABOUT</b></Card.Subtitle>
<br></br>
<br></br>
<Card.Text style = {{textAlign : "left"}}>

Integrity is the common denominator at Cellier. Our relationships, our conduct, our products...we commit to building a reputation based on trust and honour. 

<br></br>
<br></br>
We pride ourselves in our love for craftsmanship... Some may call it perfectionist - we prefer to call it “attention to detail”. In today’s age, it’s becoming a rare commodity and we like to think it separates us from the rest of the pack.
<br></br>
<br></br>
Family is everything. We build close business relationships based on transparency and trust. We go the extra mile, care for your interests and where possible share our knowledge. Those who are friends, are destined to become like family in time. 
</Card.Text>

</Card.Body>
</Card>
</Col>

<Col style = {{textAlign : "center"}} xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
<Image src="Images/AboutTank.jpg" rounded

style={{ textAlign: 'center', border : "solid", borderRadius : "0" ,borderWidth : "3px", borderColor : "#EEECE6", padding : "0rem" , marginLeft : "0rem", marginTop : "1rem" , width : "75%"}}
/>

</Col>

</Row>

<Row lg={2} xs={1} style = {{paddingBottom : "3rem"}}>
<Col style = {{textAlign : "center"}}>
<Image src="Images/Sigil.jpg" thumbnail 
style={{ textAlign: 'center', border : "solid", borderRadius : "0" ,borderWidth : "3px", borderColor : "#EEECE6",padding : "0rem" , marginLeft : "0rem", marginTop : "2rem" ,  width : "70%",  }}
/>

</Col>

<Col >
<Card style={{
  fontFamily: "montserrat",
  backgroundColor: "#EEECE6",
  borderColor: "#F1EDE2",
 textAlign : "left",
}}>

<Card.Body>

<Card.Title style = {{ color : "red",fontSize : "0.9rem", marginTop : "3rem", }}><h7>THE CELLIER NAME</h7></Card.Title>
<br></br>
<Card.Subtitle style = {{fontSize : "2rem"}}><b>THE HISTORY OF OUR NAME</b></Card.Subtitle>
<br></br>
<Card.Text>
Part tribute to family, part ode to Cape wine history, Cellier is a name rich in tradition. John’s mother, Lynette Celliers, was a direct descendant of Josue Cellier from Orleans on the Loire River in Northern Central France. He arrived in the Cape with his wife, Elizabeth, as a refugee French Huguenot on board the VOC Reigersdaal in August, 1700, settling in Bottlerary. As well as a carpenter, Josue was a viticulturist and winemaker in the Cape and went on to own a farm called De Olreans in Dal Josafat, Klein Drakenstein where he farmed till his passing in 1721. 
<br></br>
<br></br>
The modern word “cellar” is derived from, amongst others, the Old french word “cellier” which means “storeroom”. Over time, the association between cellar and winemaking and wine storage has become synonymous. 
</Card.Text>

</Card.Body>
</Card>
</Col>
</Row>

</Container>

    </div>
  );
}

export default About;
