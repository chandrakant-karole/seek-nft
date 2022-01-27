import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faRss} from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <>
            <footer id="main-footer">



                <div id="footer-bottom">
                    <div className="container clearfix">
                        <ul className="et-social-icons mb-0">

                            <li className="et-social-icon et-social-facebook">
                                <a href="/" className="icon">
                                    <FontAwesomeIcon icon={faFacebookF}/>
                                </a>
                            </li>
                            <li className="et-social-icon et-social-twitter">
                                <a href="/" className="icon">
                                    <FontAwesomeIcon icon={faTwitter}/>
                                </a>
                            </li>
                            <li className="et-social-icon et-social-instagram">
                                <a href="/" className="icon">
                                    <FontAwesomeIcon icon={faInstagram}/>
                                </a>
                            </li>
                            <li className="et-social-icon et-social-rss">
                                <a href="https://www.seeknft.com/feed/" className="icon">
                                    <FontAwesomeIcon icon={faRss}/>
                                </a>
                            </li>

                        </ul><div id="footer-info">Powered by SeekXR, Inc. © Copyright 2022</div>					</div>
                </div>
            </footer>
        </>
    )
}
