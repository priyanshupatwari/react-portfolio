import React from 'react'
import { Card } from 'react-bootstrap'

function card(props) {
 return (
  <>
   <Card style={{ flexGrow:'1', width:'18rem'}} className="shadow-lg">
    <Card.Img variant="top" src={props.imgSrc} />
    <Card.Body>
     <Card.Title className="text-capitalize">{props.title}</Card.Title>
     <Card.Text>
      We help you with {props.desc}
     </Card.Text>
     <button className="btn-call btn-call-2 px-3">Show works</button>
    </Card.Body>
   </Card>
  </>
 )
}

export default card
