import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import './css/style.css';
import { useState } from 'react';

export default function MenuFour() {
    const [inputValueOne, setInputValueOne] = useState('Холодильник');
    const [inputValueTwo, setInputValueTwo] = useState('Hummax');
    const [inputValueThree, setInputValueThree] = useState('LCD');
    const [inputValueFore, setInputValueFore] = useState('192.606.100.32');

    const handleInputChangeOne = (event) => {
        setInputValueOne(event.target.value);
    };
    const handleInputChangeTwo = (event) => {
        setInputValueTwo(event.target.value);
    };
    const handleInputChangeThree = (event) => {
        setInputValueThree(event.target.value);
    };
    const handleInputChangeFore = (event) => {
        setInputValueFore(event.target.value);
    };

    return(
        <div className="ms-2 mt-4">
            <p className='textDisignTwo'>Вид устройства</p>
            <Form>
            <Row>
                <Col>
                    <FloatingLabel controlId="floatingInputGrid" label="Тип устройства" className='pt-3 pb-3'>
                        <Form.Control type="text" placeholder='Тип устройства' value={inputValueOne} onChange={handleInputChangeOne} />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel controlId="floatingInputGrid" label="Производитель" className='pt-3 pb-3'>
                        <Form.Control type="text" placeholder='Производитель' value={inputValueTwo} onChange={handleInputChangeTwo} />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col>
                    <FloatingLabel controlId="floatingInputGrid" label="Модель" className='pt-3 pb-3'>
                        <Form.Control type="text" placeholder='Модель'  value={inputValueThree} onChange={handleInputChangeThree} />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel controlId="floatingInputGrid" label="IP" className='pt-3 pb-3'>
                        <Form.Control type="text" placeholder='IP' value={inputValueFore} onChange={handleInputChangeFore} />
                    </FloatingLabel>
                </Col>
            </Row>
            </Form>
        </div>
    );
}