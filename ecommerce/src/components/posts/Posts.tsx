import React from 'react';
import { Button, Card} from 'react-bootstrap';


export default function Posts() {
  return (
    <>
        <Card style={{ width: '400px' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </>
  )
}
