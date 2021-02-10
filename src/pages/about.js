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

<Container fluid  className = "ml-3 ml-lg-0" style = {{textAlign : "center"}}>

<Row  style = {{paddingTop : "5rem", paddingBottom : "3rem",}}>

<Row lg={2} xs={1}>
<Col style = {{textAlign : "center"}}>
    
<Image src="Images/AboutPhoto.jpg" thumbnail 
width="65%"
height="65%"
style = {{padding : "0em" , marginTop: "4rem", }}
/>

</Col>

<Col>
<Card style={{
  fontFamily: "montserrat",
  backgroundColor: "#EEECE6",
  borderColor: "#F1EDE2",
  
}}>

<Card.Body>

<Card.Title style = {{ color : "red"}}> <h6>OUR STORY</h6></Card.Title>
<br></br>
<Card.Subtitle><h2><b>THE CONCEPTION</b></h2></Card.Subtitle>
<br></br>
<Card.Text>
Cellier Wine Tanks started in a mountain side garage by owner John and Willian after discovering the European egg shaped tanks in local winery in early 2016. 
<br></br>
<br></br>
With a mutual love of wine and already operating in the concrete industry, pursuing this new project was the perfect step forward. Inspired by the European innovators and our French family heritage, the father and son duo embarked on an adventure to develop a uniquely constructed concrete egg that stood out from the rest.
<br></br>
<br></br>
Over the next 4 years, working prototypes were continually tested, redesigned and refined until in late 2019, a prototype was born that satisfied their scrupulous expectations. In January 2020, Miles Mossop took a leap of faith and was the first winemaker to both ferment and age in Cellier eggs, one filled with Chenin Blanc, the other with Cinsault.
</Card.Text>
</Card.Body>
</Card>
</Col>
</Row>

</Row>




<Row> 
<Card style={{
  fontFamily: "montserrat",
  backgroundColor: "#EEECE6",
  borderColor: "#F1EDE2", textAlign : "center", }}>
<Card.Img src="Images/ourstory bckgr miage overlay_2.jpg" alt="Card image"/>
<Card.ImgOverlay>
  <Row style = {{ color : "red", padding : "3rem", textAlign : "center",}}>
   <Col><Card.Title ><h6>THE VISION</h6></Card.Title> </Col> 
    </Row>
    <Row>
    <Card.Text style = {{padding : "3rem", color : "white",}}>
    <h3>Cellier's driving force is simple - to create elegant, innovative,
    world class concrete wine tanks that give winemakers the control to
    craft their masterpieces - with less intervention. </h3>
    </Card.Text>
    </Row>

  </Card.ImgOverlay>

</Card>
</Row>

<Row lg={2} xs={1} style ={{paddingTop : "3rem"}} >


<Col>
<Card style={{
  fontFamily: "montserrat",
  backgroundColor: "#EEECE6",
  borderColor: "#F1EDE2",

}}>

<Card.Body>

<Card.Title style = {{ color : "red", fontSize : "0.9rem",}}>THE ETHOS</Card.Title>

<Card.Subtitle style = {{fontSize : "2rem"}}><b>WHAT WE ARE ALL ABOUT</b></Card.Subtitle>
<br></br>
<Card.Text>

Integrity is the common denominator at Cellier. Our relationship, our conduct, our product... we commit to building a reputation based on trust and honour.
<br></br>

We pride ourselves in our love for craftmanship... Some may call it perfectionist - we prefer to call it "attention to detail". In today's age, it's becoming a rare commodity and we like to think it separates us from the rest of the pack.

<br></br>
Family is everything. We build close business relationships based on transparency and trust. We go the extra mile, care for your interests and where possible share our knowledge. Those who are friends, are destined to become like family in time.


</Card.Text>

</Card.Body>
</Card>
</Col>

<Col style = {{textAlign : "center"}}>
<Image src="Images/AboutTank.jpg" thumbnail 
style = {{padding : "0rem" , marginLeft : "0rem", marginTop : "1rem" , width : "50%"}}
/>

</Col>

</Row>

<Row lg={2} xs={1}>
<Col style = {{textAlign : "center"}}>
<Image src="Images/Sigil.jpg" thumbnail 
style = {{padding : "0rem" , marginLeft : "0rem", marginTop : "5rem" ,  width : "50%", }}
/>

</Col>

<Col>
<Card style={{
  fontFamily: "montserrat",
  backgroundColor: "#EEECE6",
  borderColor: "#F1EDE2",

}}>

<Card.Body>

<Card.Title style = {{ color : "red",fontSize : "0.9rem", marginTop : "3rem",}}><h7>THE CELLIER NAME</h7></Card.Title>
<br></br>
<Card.Subtitle style = {{fontSize : "2rem"}}><b>THE HISTORY OF OUR NAME</b></Card.Subtitle>
<br></br>
<Card.Text>

Part tribute to family, part ode to Cape wine history. Cellier is a name rich in tradtition. John's mother, Lynette Celliers, was a direct descendant of Josue Cellier from Orleans on the Loire River in Nothern Central France. He arrived in the Cape with his wife, Elizabeth, as a refugee French Huguenot on board the VOC Reigersdaal in August 1700, settling in Bottlerary. As well as a carpenter, Josue was a viticulturist and winemaker in the Cape and went on to own a farm called De Olreans in Dal Josafat. Klein Drakenstein where he farmed till his passing in 1721.
<br></br>

The modern word "Cellier" is derived from, amongst others, the Old French word "cellier" which means "storeroom". Over time, the association between cellar and winemaking and wine storage has become synonymous.

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
