import {React, useEffect} from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import "aos/dist/aos.css";


export default function Roadmap() {
    useEffect(() => {
        AOS.init({
          duration : 500
        });
      }, []);

    const options = {
        items: 4,
        margin: 30,
        responsiveClass: true,
        dots: false,
        autoplay: true,
        autoplayTimeout:4000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            700: {
                items: 1,
            },
            1000: {
                items: 1,

            }
        },
    };
    return (
        <>
            <section className='roadMap-section' id='roadmap'>
                <Container>
                    <Row>
                        <Col>
                            <div className="roadMapTitle">
                                <h2 data-aos={"zoom-in-up"}>RoadMap</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <OwlCarousel className='owl-theme' loop margin={10} {...options}>
                    <div className='item'>
                        <div className="roadMapContainer container">
                            <div className="roadMapDiv">
                                {/* <div className="phaseNumber">
                                    1
                                </div> */}
                                <div className="phaseTitle">
                                    <h2>Phase 1</h2>
                                    <FontAwesomeIcon icon={faLongArrowAltRight}/>
                                </div>
                                <div className="phaseDescription">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi perferendis, labore ullam mollitia expedita voluptatibus sed repudiandae iure atque corrupti. Dolor tempore facilis pariatur incidunt consectetur nobis consequuntur, qui maxime!  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi perferendis, labore ullam mollitia expedita voluptatibus sed repudiandae iure atque corrupti. Dolor tempore facilis pariatur incidunt consectetur nobis consequuntur, qui maxime!  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi perferendis, labore ullam mollitia expedita voluptatibus sed repudiandae iure atque corrupti. Dolor tempore facilis pariatur incidunt consectetur nobis consequuntur, qui maxime!
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="roadMapContainer container">
                            <div className="roadMapDiv">
                                {/* <div className="phaseNumber">
                                    1
                                </div> */}
                                <div className="phaseTitle">
                                    <h2>Phase 2</h2>
                                    <FontAwesomeIcon icon={faLongArrowAltRight}/>
                                </div>
                                <div className="phaseDescription">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi perferendis, labore ullam mollitia expedita voluptatibus sed repudiandae iure atque corrupti. Dolor tempore facilis pariatur incidunt consectetur nobis consequuntur, qui maxime!  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi perferendis, labore ullam mollitia expedita voluptatibus sed repudiandae iure atque corrupti. Dolor tempore facilis pariatur incidunt consectetur nobis consequuntur, qui maxime!  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi perferendis, labore ullam mollitia expedita voluptatibus sed repudiandae iure atque corrupti. Dolor tempore facilis pariatur incidunt consectetur nobis consequuntur, qui maxime!
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="roadMapContainer container">
                            <div className="roadMapDiv">
                                {/* <div className="phaseNumber">
                                    1
                                </div> */}
                                <div className="phaseTitle">
                                    <h2>Phase 3</h2>
                                    <FontAwesomeIcon icon={faLongArrowAltRight}/>
                                </div>
                                <div className="phaseDescription">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi perferendis, labore ullam mollitia expedita voluptatibus sed repudiandae iure atque corrupti. Dolor tempore facilis pariatur incidunt consectetur nobis consequuntur, qui maxime!  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi perferendis, labore ullam mollitia expedita voluptatibus sed repudiandae iure atque corrupti. Dolor tempore facilis pariatur incidunt consectetur nobis consequuntur, qui maxime!  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi perferendis, labore ullam mollitia expedita voluptatibus sed repudiandae iure atque corrupti. Dolor tempore facilis pariatur incidunt consectetur nobis consequuntur, qui maxime!
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="roadMapContainer container">
                            <div className="roadMapDiv">
                                {/* <div className="phaseNumber">
                                    1
                                </div> */}
                                <div className="phaseTitle">
                                    <h2>Phase 4</h2>
                                    <FontAwesomeIcon icon={faLongArrowAltRight}/>
                                </div>
                                <div className="phaseDescription">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi perferendis, labore ullam mollitia expedita voluptatibus sed repudiandae iure atque corrupti. Dolor tempore facilis pariatur incidunt consectetur nobis consequuntur, qui maxime!  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi perferendis, labore ullam mollitia expedita voluptatibus sed repudiandae iure atque corrupti. Dolor tempore facilis pariatur incidunt consectetur nobis consequuntur, qui maxime!  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi perferendis, labore ullam mollitia expedita voluptatibus sed repudiandae iure atque corrupti. Dolor tempore facilis pariatur incidunt consectetur nobis consequuntur, qui maxime!
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
                <Container>
                    <Row>
                        <Col>
                            <div className="roadMapBar_outer">
                                <div className="roadMapBar_inner"></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
