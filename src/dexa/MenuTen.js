import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './css/style.css';
import delet from "../img/delete-outline.png"
import download from "../img/Vector.png";
import fill from "../img/attach-file.png";

export default function MenuTen(){
    return(
        <div>
            <Form>
                <Row className='m-0 borderForm'>
                    <Col>
                        <p>6503058102 image.png</p>
                    </Col>
                    <Col className='d-flex'>
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
        </div>
    );
}