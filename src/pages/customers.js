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

<Container  style = {{textAlign : "left",}}>
<Row lg={2} xs={1} style = {{paddingTop : "10rem"}}>
<Col style = {{textAlign : "center", paddingTop : "4rem"}}>
<Image src="Images/FirstCust.jpg" rounded 
width="80%"
/>

</Col>

<Col style = {{textAlign : "center"}}>
<Card style={{
  fontFamily: "montserrat",
  backgroundColor: "#EEECE6",
  borderColor: "#F1EDE2",
  
}}>

<Card.Body>

<Card.Title>Miles Mossop</Card.Title>
<Card.Subtitle style ={{color : "red",fontSize: "1rem"}}>WINEMAKER</Card.Subtitle>
<Card.Text>

One might say he was born with wine in his DNA. Miles is son of the late Tony Mossop, a Cape Wine Master and distinguished South African wine authority. Alumnus of Wynberg Boys’ High, he obtained a degree in geology which he followed  with a degree in viticulture and oenology at Stellenbosch University graduating top of his class. That set the bar, with Miles beginning his journey into winemaking working under some well renowned winemakers both locally and abroad, quickly gaining world class experience. In 2000 he joined Tokara Wine Estate and over the next two decades, established the estate as one of the top producers in South Africa, winning numerous accolades in the process. In 2012 Miles was inducted into the prestigious Cape Winemakers Guild in time becoming chairman and in May 2018, he left his legacy at Tokara to focus entirely on his solo journey.
<br></br>
Miles and his wife established Miles Mossop Wines back in 2004 with the vision to create wines unique in character that express the true nature of South Africa and the sites from which the grapes are sourced. The wines exude finesse and elegance, but still show aspects of power and fruit concentration, having great texture while maintaining balance. In 2020, Tim Atkins rated his 2017 “Sam” an amazing 99 points, with all wines in his range scoring over 91 points.
<br></br>
Miles took two Cellier concrete eggs at the beginning of 2020 and bottled their maiden vintages, his 2020 Chapter One Cinsault and Chenin Blanc blend, at the end of 2020. Exciting times ahead! 


</Card.Text>

</Card.Body>
</Card>
</Col>
</Row>

<Row lg={2} xs={1} style = {{paddingTop : "4rem", textAlign : "center"}}>


<Col style = {{textAlign : "center"}}>
<Card style={{
  fontFamily: "montserrat",
  backgroundColor: "#EEECE6",
  borderColor: "#F1EDE2",
}}>

<Card.Body>

<Card.Title>MPHUMI NDLAGANISA</Card.Title>
<Card.Subtitle style ={{color : "red",fontSize: "1rem"}}>WINEMAKER</Card.Subtitle>
<Card.Text>

Mphumi hails from an unexpected land where sugar cane is far more prominent than grape vines. Growing up in Kwa Zulu Natal and travelling extensively, he developed a love for rural nature and agriculture from an early age. After matriculating at Kearsney College, Mphumi moved to Cape Town completing a B Com at UCT followed by a post grad at Stellenbosch. It was during this time where he developed a love affair with wine and consumed himself in the culture. 
<br></br>
While leading a life as an investment banker, his devotion to wine eventually led him to experiment with making wine and before long, he saved up enough to quit banking and dive into wine making full time. He learnt his trade under the mentorship of Pieter de Waal, Schalk Opperman and Warwick Denman and in 2014 started Magna Carta Wines. Mphumi describes himself as a “small batch natural winemaker”, focusing on terroir but prioritising accessibility and drinkability. His wines are free of mechanical and chemical intervention, everything is done “old school”. The wines are targeted at experienced wine lovers who have grown tired of conventional wines.
<br></br>
Mphumi, alongside Warwick Denman, acquired Cellier’s first five prototype concrete eggs way back in 2018. We worked with them extensively researching, designing and paving the way for the tanks we make today. Mphumi is in the process of constructing a dedicated cellar in Cape Town which will be the new home for the eggs. We can’t wait to see this space!


</Card.Text>

</Card.Body>
</Card>
</Col >

<Col style = {{textAlign : "center", paddingTop : "6rem"}}>
<Image src="Images/SecondCust.jpg" rounded  
width="80%"

/>

</Col>

</Row>

<Row lg={2} xs={1} style = {{paddingBottom : "4rem", paddingTop : "4rem"}}>
<Col style = {{textAlign : "center", paddingTop : "4rem"}}>
<Image src="Images/ThirdCust.jpg" rounded  
width="80%"
/>

</Col>

<Col>
<Card style={{
  fontFamily: "montserrat",
  backgroundColor: "#EEECE6",
  borderColor: "#F1EDE2",

}}>

<Card.Body>

<Card.Title>MARK LE ROUX</Card.Title>
<Card.Subtitle style ={{color : "red",fontSize: "1rem", paddingTop : "2rem"}}>WINEMAKER</Card.Subtitle>
<Card.Text>

Growing up between Stellenbosch and the Karoo, Mark developed a deep love for nature and it’s mesmerizing mechanics at an early age.  Growing older, his appreciation and fascination for the relationship between chemistry, biology and geography developed and while it wasn’t the wine what grabbed him first, winemaking was the thread that tied these facets together. Mark graduated Stellenbosch University with a BSc Agric in winemaking & viticulture in 2007, working harvests at Rustenberg, Waterford and Morgenhof before being appointed assistant winemaker at L’Ormarins in 2008.
<br></br>
In 2009, Mark moved to Waterford Estate and as they say, the rest is history. In 2012 he was appointed winemaker and headed up the wine production team.  His focus is firmly rooted on the symbiotic relationship between viticulture and the environment. He favours a natural and sustainable winemaking philosophy, believing that these elements are key to the true understanding and reflection in a wine.  Marks philosophy and attention to detail coupled with his mantra of “walking the walk” saw him named as Tim Atkin’s South African young winemaker of the year in 2017. The reputation and quality of Waterford Estate continues to speak for itself, with Mark always pushing the winemaking boundaries in the cellar. 
<br></br>
In 2020, Mark acquired a Cellier concrete egg for an exciting new project he is working on for the 2021 harvest. Watch this space!


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
