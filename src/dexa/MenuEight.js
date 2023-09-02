import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import './css/style.css';

export default function MenuEight(){
    return(
        <div className="ms-2 mt-4">
            <p className='textDisignTwo'>Расположение</p>
            <Form>
                <Row>
                    <Col>
                        <FloatingLabel controlId="floatingInputGrid" label="IP Шопстер">
                            <Form.Control type="text" placeholder='IP Шопстер' />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel controlId="floatingInputGrid" label="URL API">
                            <Form.Control type="text" placeholder='URL API' />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col>
                        <Form.Select size="lg">
                            <option>Регион</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Select size="lg">
                            <option>Город</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col>
                        <FloatingLabel controlId="floatingInputGrid" label="Часовой пояс">
                            <Form.Control type="text" placeholder='Часовой пояс' />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col>
                        <FloatingLabel controlId="floatingInputGrid" label="Адрес">
                            <Form.Control type="text" placeholder='Адрес' />
                        </FloatingLabel>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}