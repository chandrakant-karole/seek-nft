import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Logo from '../../assets/images/logo.png'

export default function Footer() {
    return (
        <>
            <section className='footer_section'>
                <Container >
                    <Row>
                        <Col lg={4}>
                            <div className="footerLogo_Div">
                                <div className="footerLogo">
                                    <Image className='footerLogo' src={Logo} fluid />
                                </div>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non numquam tempore veritatis ab aliquid beatae sed molestiae rerum illo magnam soluta alias quae ea voluptatum labore, pariatur culpa voluptates praesentium!</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="footerDirect_LinkContainer">
                                <div className="footer_DirectLinkDiv">
                                    <h4>Direct Links</h4>
                                    <ul>
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Roadmap</li>
                                        <li>Faq</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="footer_SocialLinkContainer">
                                <div className="footer_SocialLinkDiv">
                                    <h4>Social Links</h4>
                                    <ul>
                                        <li>
                                            <div className="footerDiscord_link">
                                                <div className="Discord_Icon"><FontAwesomeIcon icon={faDiscord} /></div>
                                                <div className="Discord_Link">Discord</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="footerTwitter_link">
                                                <div className="Twitter_Icon"><FontAwesomeIcon icon={faTwitter} /></div>
                                                <div className="Twitter_Link">Twitter</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="footerInstagram_link">
                                                <div className="Instagram_Icon"><FontAwesomeIcon icon={faInstagram} /></div>
                                                <div className="Instagram_Link">Instagram</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="footerFacebook_link">
                                                <div className="Facebook_Icon"><FontAwesomeIcon icon={faFacebook} /></div>
                                                <a herf="/" className="Facebook_Link">Facebook</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
