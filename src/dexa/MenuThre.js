import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import './css/style.css';
import React, { useState } from 'react';

export default function MenuThre(){
    const [inputValueOne, setInputValueOne] = useState('850');
    const [inputValueTwo, setInputValueTwo] = useState('2160');
    const [inputValueThree, setInputValueThree] = useState('1900');
    const [inputValueFore, setInputValueFore] = useState('3840');

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
            <div className='d-flex'>
                <p className='textDisignTwo'>Размер в MM</p>
                <p className='textDisignTwo textTwo'>Размер в PX</p>
            </div>
            <Form>
            <Row>
                <Col>
                    <FloatingLabel controlId="floatingInputGrid" label="Ширина (мм)" className='pt-3 pb-3'>
                        <Form.Control type="text" placeholder='Ширина (мм)' value={inputValueOne} onChange={handleInputChangeOne} />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel controlId="floatingInputGrid" label="Разрешение (px)" className='pt-3 pb-3'>
                        <Form.Control type="text" placeholder='Разрешение (px)' value={inputValueTwo} onChange={handleInputChangeTwo}/>
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col>
                    <FloatingLabel controlId="floatingInputGrid" label="Высота (мм)" className='pt-3 pb-3'>
                        <Form.Control type="text" placeholder='Высота (мм)'  value={inputValueThree} onChange={handleInputChangeThree} />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel controlId="floatingInputGrid" label="Разрешение (px)" className='pt-3 pb-3'>
                        <Form.Control type="text" placeholder='Разрешение (px)' value={inputValueFore} onChange={handleInputChangeFore} />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col md="6">
                    <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Цвет фона"
                    className='pt-3 pb-3'>
                    <Form.Select aria-label="Floating label select example" className='pt-3 pb-3'>
                        <option>FFFFFF</option>
                        <option value="1">F1F1F1</option>
                    </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>
            </Form>
        </div>
    );
}