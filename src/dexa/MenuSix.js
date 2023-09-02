import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import './css/style.css';
import { useState } from 'react';

export default function MenuSix(){
    const [inputValueOne, setInputValueOne] = useState('01-045674');
    const [inputValueTwo, setInputValueTwo] = useState('https://target.sendflips.com/auth/login');

    const handleInputChangeOne = (event) => {
        setInputValueOne(event.target.value);
    };
    const handleInputChangeTwo = (event) => {
        setInputValueTwo(event.target.value);
    };

    return(
        <Form>
            <Row>
                <Col>
                    <FloatingLabel controlId="floatingInputGrid" label="IP Шопстер" className='pt-3 pb-3'>
                        <Form.Control type="text" placeholder='IP Шопстер' value={inputValueOne} onChange={handleInputChangeOne} />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel controlId="floatingInputGrid" label="URL API" className='pt-3 pb-3'>
                        <Form.Control type="text" placeholder='URL API' className='link-one' value={inputValueTwo} onChange={handleInputChangeTwo}/>
                    </FloatingLabel>
                </Col>
            </Row>
        </Form>
    );
}