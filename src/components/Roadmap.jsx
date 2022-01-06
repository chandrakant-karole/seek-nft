import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import User from '../assets/images/seek-hero1.png'

export default function Roadmap() {
    const options = {
        items: 4,
        margin: 30,
        responsiveClass: true,
        dots: false,
        autoplay: false,
        // autoplayTimeout:1500,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 3,

            }
        },
    };
    return (
        <>
            <section className='roadMap-section'>
                <Container>
                    <Row>
                        <Col>
                            <div className="roadMapTitle">
                                <h2>Our RoadMap</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <OwlCarousel className='owl-theme' loop margin={10} nav {...options}>
                    <div className='item'>
                        <div className="roadMapCardDiv">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={User} />
                                <Card.Body>
                                    <Card.Title>Name</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="roadMapCardDiv">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={User} />
                                <Card.Body>
                                    <Card.Title>Name</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="roadMapCardDiv">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={User} />
                                <Card.Body>
                                    <Card.Title>Name</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="roadMapCardDiv">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={User} />
                                <Card.Body>
                                    <Card.Title>Name</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="roadMapCardDiv">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={User} />
                                <Card.Body>
                                    <Card.Title>Name</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </OwlCarousel>
            </section>
        </>
    )
}
