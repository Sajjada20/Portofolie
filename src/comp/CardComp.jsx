import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { cardInfo } from '../data';
import { Col, Container, Row } from 'react-bootstrap';







/* geen boostrap gebruiken */








function CardComp() {
  return (
    <Container className='justify-content-center align-items-center w-70 '>

    <Row className='row g-3'>
    {cardInfo.map((item, idx) => {
        const {title, text, footerText, image} = item;
        return (
            <Col className='col col-4'>
            <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{text}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{footerText}</small>
                    </Card.Footer>
            </Card>
            </Col>
        )
    })}
    </Row>
    </Container>
  )
}

export default CardComp