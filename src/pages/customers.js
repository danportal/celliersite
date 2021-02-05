import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container'

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
    }
    `}
      </style>

      {/* Third part with concrete back 
Note: need text on image */}

      {/* Last part with image left and text right 
Note: Button needs a dark border  style={{ backgroundColor: '#EEECE6'}} */}

<Container fluid style={{padding: "10em",}}>
<Row lg={2} xs={1}>
<Col>
<Image src="Images/FirstCust.jpg" thumbnail 
width="40%"
height="40%"/>

</Col>

<Col>
<Card style={{
  fontFamily: "montserrat",
  backgroundColor: "#EEECE6",
  borderColor: "#F1EDE2",
  padding: "5em",
  
}}>

<Card.Body>

<Card.Title>Miles Mossop</Card.Title>
<Card.Text>

Here lies the text of customer

</Card.Text>

</Card.Body>
</Card>
</Col>
</Row>

<Row lg={2} xs={1}>


<Col>
<Card style={{
  fontFamily: "montserrat",
  backgroundColor: "#EEECE6",
  borderColor: "#F1EDE2",
  padding: "5em",
}}>

<Card.Body>

<Card.Title>MPHUMI NDLAGANISA</Card.Title>
<Card.Text>

Here lies the text of customer

</Card.Text>

</Card.Body>
</Card>
</Col>

<Col>
<Image src="Images/SecondCust.jpg" thumbnail  
width="40%"
height="40%"
/>

</Col>

</Row>

<Row lg={2} xs={1}>
<Col>
<Image src="Images/ThirdCust.jpg" thumbnail 
width="40%"
height="40%"/>

</Col>

<Col>
<Card style={{
  fontFamily: "montserrat",
  backgroundColor: "#EEECE6",
  borderColor: "#F1EDE2",
  padding: "5em",
}}>

<Card.Body>

<Card.Title>MARK LE ROUX</Card.Title>
<Card.Text>

Here lies the text of customer

</Card.Text>

</Card.Body>
</Card>
</Col>
</Row>


</Container>

 
    </div>
  );
}

export default Customers;
