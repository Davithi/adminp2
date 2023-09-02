import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Accordion from 'react-bootstrap/Accordion';
import Popover from 'react-bootstrap/Popover';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import './css/style.css';

const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Данные устройства</Popover.Header>
      <Popover.Body>
            Данные устройства
      </Popover.Body>
    </Popover>
  );
  
  const Example = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <button variant="success" className='buttonDisign ms-2'>?</button>
    </OverlayTrigger>
  );

export default function MenuTwelve(){
    return(
        <div className="mt-4">
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Button id='button-color'  className='textDisignTwo'>Подключение данных</Accordion.Button>
                    <Accordion.Body>
                    <div className='ms-2 d-flex align-items-center'>Настройки показов <Example/></div>
                    <Form>
                        <Row className='mt-3'>
                            <Col md="6">
                                <FloatingLabel
                                controlId="floatingSelectGrid"
                                label="Длина показа"
                                className='pt-3 pb-3'>
                                <Form.Select aria-label="Floating label select example" className='pt-3 pb-3'>
                                    <option>2</option>
                                    <option value="1">3</option>
                                </Form.Select>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Form>
                    <div className='ms-2 d-flex align-items-center'>Тип показов</div>
                    <Form className='ms-2 mt-2'>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                            inline
                            label="Динамическое размещение"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                        />
                        <Form.Check
                            inline
                            label="Фиксированное размещение"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                            checked="true"
                        />
                        </div>
                    ))}
                    </Form>
                    <Form>
                        <Row className='mt-3'>
                            <Col md="4">
                                <FloatingLabel
                                controlId="floatingSelectGrid"
                                label="Количество показов"
                                className='pt-3 pb-3'>
                                <Form.Select aria-label="Floating label select example" className='pt-3 pb-3'>
                                    <option>2</option>
                                    <option value="1">3</option>
                                </Form.Select>
                                </FloatingLabel>
                            </Col>
                            <Col md="4">
                                <FloatingLabel
                                controlId="floatingSelectGrid"
                                label="Длинна блока"
                                className='pt-3 pb-3'>
                                <Form.Select aria-label="Floating label select example" className='pt-3 pb-3'>
                                    <option>2 мин</option>
                                    <option value="1">3</option>
                                </Form.Select>
                                </FloatingLabel>
                            </Col>
                            <Col md="4">
                                <FloatingLabel
                                controlId="floatingSelectGrid"
                                label="Показов в блоке"
                                className='pt-3 pb-3'>
                                <Form.Select aria-label="Floating label select example" className='pt-3 pb-3'>
                                    <option>1</option>
                                    <option value="1">3</option>
                                </Form.Select>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}