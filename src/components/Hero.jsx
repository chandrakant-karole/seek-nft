import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import HeroImg from '../assets/images/seek-hero1.png'
export default function Hero() {
    return (
        <>
            <section className='hero_section'>
                <Container>
                    <Row>
                        <Col lg={6}><Image src={HeroImg} fluid /></Col>
                        <Col lg={6}>
                            <div className="heroSectionDiv">
                                <div className="hero_contentDiv">
                                    <h1>Seek NFT</h1>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure aut ducimus cumque. Cum saepe rem temporibus laudantium asperiores expedita, architecto blanditiis, maxime deleniti voluptatum molestiae? Non incidunt aliquam neque quam.</p>
                                    <button className='hero_mint'>Mint <FontAwesomeIcon className='mint-icon' icon={faArrowAltCircleRight}/></button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
