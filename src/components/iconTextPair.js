import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faFootballBall } from '@fortawesome/free-solid-svg-icons';

const IconTextPairRowOne = () => {
    const RowInfo = [{ image: faLaptopCode, text: 'Full Stack Developer' }, { image: faBook, text: 'High School Student' }, { image: faFootballBall, text: 'Kasnas City Chiefs Fan' }];

    function renderIconTextPair(info, index) {

        return (
            <Col id='rowContainer' key={index}>
                <Row id='imageRow'>
                    <FontAwesomeIcon id="aboutImage" icon={info.image} />
                    </Row>
                <Row className='textRow'>
                    <h11 id='text'>{info.text}</h11>
                </Row>
            </Col>
        )



    }
    return (
        <div className='aboutRow1'>
            <Row className='renderedRow'>
                {RowInfo.map(renderIconTextPair)}
            </Row>

        </div>
    )

}

export default IconTextPairRowOne;