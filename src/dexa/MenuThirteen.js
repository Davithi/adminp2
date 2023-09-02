import Button from 'react-bootstrap/Button';
import add from '../img/Group 33549.png';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Popover from 'react-bootstrap/Popover';
import './css/style.css';
import delet from "../img/delete-outline.png"
import download from "../img/Vector.png";
import fill from "../img/attach-file.png";
import Accordion from 'react-bootstrap/Accordion';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


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

export default function MenuThirteen(){
    return(
        <div className="bg-white p-2 mt-4">
            <div className='d-flex justify-content-between pt-3'>
                <p className='textDisignTwo m-0 ms-2'>Нижний баннер</p>
                <Button size="sm" className='addButton p-2'>
                    <img src={add} alt="add"/>
                </Button>
            </div>
            <Form>
                <Row className='m-0 mt-5'>
                    <Col>
                        <p>6503058102 image.png</p>
                    </Col>
                    <Col className='d-flex p-0 justify-content-end'>
                        <Button size="sm" className='deletButton'>
                            <img src={delet} alt="delet"/>
                        </Button>
                        <Button size="sm" className='ms-2 deletButton'>
                            <img src={fill} alt="fill"/>
                            Добавить из медиа
                        </Button>
                        <Button size="sm" className='ms-2 downloadBtn'>
                            <img src={download} alt="download" className='me-2'/>
                            Загрузить
                        </Button>
                    </Col>
                </Row>
            </Form>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="1">
                    <Accordion.Button id='button-color'  className='textDisignTwo p-2 d-flex align-items-center mt-3'>Настройки показов <Example/></Accordion.Button>
                    <Accordion.Body>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}