import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import './css/style.css';
import React, { useState } from 'react';


export default function MenuTwo(){
    const [inputValueOne, setInputValueOne] = useState('666999');
    const [inputValueTwo, setInputValueTwo] = useState('01-045674');
    const [inputValueThree, setInputValueThree] = useState('Спар холодильник 4');
    const [inputValueFore, setInputValueFore] = useState('Структура полностью заполнена, сохранена, изменил параметры и товары, цвет , нужно сделать прочее');

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
            <p className='textDisignTwo'>О планограмме</p>
            <Form>
            <Row>
                <Col>
                    <FloatingLabel controlId="floatingInputGrid" label="Код планограммы" className='pt-3 pb-3'>
                        <Form.Control type="text" placeholder='Код планограммы' value={inputValueOne} onChange={handleInputChangeOne} />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel controlId="floatingInputGrid" label="Код устройства" className='pt-3 pb-3'>
                        <Form.Control type="text" placeholder='Код устройства' value={inputValueTwo} onChange={handleInputChangeTwo} />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col>
                    <FloatingLabel controlId="floatingInputGrid" label="Название планограммы" className='pt-3 pb-3'>
                        <Form.Control type="text" placeholder='Название планограммы'  value={inputValueThree} onChange={handleInputChangeThree} />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Адрес устройства"
                    className='pt-3 pb-3'>
                    <Form.Select aria-label="Floating label select example" className='pt-3 pb-3'>
                        <option>ул.Пискунова 41</option>
                        <option value="1">ул.Пискунова 42</option>
                    </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col>
                    <FloatingLabel controlId="floatingTextarea2" label="Комментарий" className='pt-3 pb-3'>
                        <Form.Control
                        as="textarea"
                        placeholder="Комментарий"
                        style={{ height: '100px', resize: 'none' }}
                        value={inputValueFore}
                        onChange={handleInputChangeFore}
                        />
                    </FloatingLabel>
                </Col>
            </Row>
            </Form>
        </div>
    );
}