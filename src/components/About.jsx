import {React, useEffect} from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import AboutImg from '../assets/images/seek-hero1.png'
import AOS from 'aos';
import "aos/dist/aos.css";

export default function About() {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return (
        <>
            <section className='about_section'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="aboutContentDiv">
                                <div className="aboutDiv">
                                    <h2 data-aos={"fade-right"} >About</h2>
                                    <p data-aos={"fade-right"} data-aos-delay="100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quae at inventore, rerum, debitis adipisci expedita aliquam accusamus nemo nesciunt modi deleniti autem cumque officia error distinctio, laborum esse tempora!</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <Image src={AboutImg} fluid />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
