import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './css/style.css';
import save from '../img/Vector (1).png';
import saveAll from '../img/save-alt.png';
import buttonFild from '../img/bookmark-border.png';
import upload from '../img/Vector (2).png';


export default function MenuFifiteen(){
    return(
        <div className="bg-white p-2 mt-4" style={{position: 'absolute' , bottom: '31px' , position: 'fixed' , zIndex: '3', width: '48vw' }}>
            <Form>
                <Row className='m-0'>
                    <Col className='d-flex justify-content-end'>
                        <Button size="sm" className='deletButton'>
                            <img src={upload} alt="upload"/>
                        </Button>
                        <Button size="sm" className='ms-3 deletButton'>
                            <img src={buttonFild} alt="buttonFild"/>
                        </Button>
                        <Button size="sm" className='ms-3 deletButton'>
                            <img src={saveAll} alt="saveAll"/>
                        </Button>
                        <Button size="sm" className='ms-3 downloadBtn' >
                            <img src={save} alt="save" className='me-2'/>
                            Сохранить
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}