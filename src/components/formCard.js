import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com'




function EmailFormCard () {
    const serviceID = `${process.env.REACT_APP_SERVICE_KEY}`
    const templateID = `${process.env.REACT_APP_TEMPLATE_KEY}`
    const userID = `${process.env.REACT_APP_USER_KEY}`
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(serviceID, templateID , e.target, userID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <Card id="formCard">
                <Card.Body id='formCardBody'>
                    <form onSubmit={sendEmail} id='form'>
                        <Row id="firstRow">
                            <Col sm={7} id='row1col1'>
                                <Form.Label id='nameLabel' htmlFor="nameInput">Name</Form.Label>
                                <InputGroup id="nameGroup">
                                    <FormControl type='text' placeholder='your name' name='name' id='nameInput' />
                                </InputGroup>
                            </Col>
                            <Col sm={1} id='row1spacer'>

                            </Col>
                            <Col sm={4} id='row1col2'>
                                <Form.Label id='subjectLabel' htmlFor="subjectInput">Subject</Form.Label>
                                <InputGroup id="subjectGroup">
                                    <FormControl type='subject' placeholder='subject' name='subject' id='subjectInput' />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row id="secondRow">
                            <Form.Label id='emailLabel' htmlFor="emailInput">Email</Form.Label>
                            <InputGroup id="emailGroup">
                                <FormControl type='email' placeholder='your email' name='email' id='emailInput' />
                            </InputGroup>
                        </Row>
                        <Row id="thirdRow">
                            <Form.Label id='messageLabel' htmlFor="messageInput">Message</Form.Label>
                            <InputGroup id="messageGroup">
                                <FormControl as='textarea' name='message' id='messageInput' />
                            </InputGroup>
                        </Row>
                        <Row id='fourthRow'>
                            <Button id='submitBtn' type='submit'>submit</Button>
                        </Row>
                    </form>
                </Card.Body>
            </Card>
    )
}

export default EmailFormCard