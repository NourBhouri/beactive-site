import React from 'react';
import Card from 'react-bootstrap/Card';

const Karte = () => {
  return (
      <div>
        <Card style={{ width: '20rem' }}>  
        <Card.Body>
          <Card.Title>Sarah Johnson</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Weight Loss Transformation</Card.Subtitle>
          <Card.Text id="text"> <p>
          After struggling with my weight for years, I finally decided to take charge of my health. 
          The transformation wasn't just physical The journey inspired those around me, showing that with determination,
          anything is possible. my weight loss experience taught me the value of self-care and perseverance, 
          leaving my feeling empowered and grateful for the journey </p>
          </Card.Text>
          <Card.Link href="../photos/before-lose.png">The Before</Card.Link>
          <Card.Link href="../photos/after-lose.png">The After</Card.Link>
        </Card.Body>
      </Card>
      </div>
  )
}

export default Karte
