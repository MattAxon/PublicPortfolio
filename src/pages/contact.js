import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';





function Contact() {
    return (
        <div className="contactPage">
            <h1 className="h1">Contact</h1>
            <article>
                <div id='pageBody'>
                    <Container id='table'>
                        <a href='/email'>
                            <Row id='emailRow'>
                                <Col sm={4} id='emailIconCol'>
                                    <FontAwesomeIcon id='emailIcon' icon={faEnvelope} />
                                </Col>
                                <Col sm={8} id='emailTextBoxCol'>
                                    <h2>Email Me</h2>
                                </Col>
                            </Row>
                        </a>

                        <a className='linkedInLink' href="https://www.linkedin.com/in/matt-axon-01a56321b/">
                            <Row id='linkedInRow'>
                                <Col sm={4} id='linkedInIconCol'>
                                    <FontAwesomeIcon id='linkedInIcon' icon={faLinkedin} />
                                </Col>
                                <Col sm={8} id='linkedInTextBoxCol'>
                                    <h2>LinkedIn</h2>
                                </Col>
                            </Row>
                        </a>
                    </Container>
                </div>


            </article>

        </div>

    )
}

export default Contact;