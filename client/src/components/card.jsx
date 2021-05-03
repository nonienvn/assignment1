import  React from "react";
import {CardGroup, Card} from "react-bootstrap";
import amzn from "../Assets/AMZN.svg"
import fb from "../Assets/FB.png"
import googl from "../Assets/GOOGL.png"


function Cards () {
    return (
        <div>
            <CardGroup>
  <Card>
    <div className= "sample "> <Card.Title><h1>Amazon</h1> </Card.Title> 
    <img className="img" variant="top" src= {amzn} /></div>
    <Card.Body>
      
      
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
  <div className= "sample "> <Card.Title><h1>Facebook</h1> </Card.Title> 
    <img className="img" variant="top" src= {fb} /></div>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
  <div className= "sample "> <Card.Title><h1>Google</h1></Card.Title> 
    <img className="img" variant="top" src= {googl} /></div>
    <Card.Body>
      
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
        </div>
    ); 
}

export default Cards;