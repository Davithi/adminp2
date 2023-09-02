import Accordion from 'react-bootstrap/Accordion';
import MenuSix from './MenuSix';
import './css/style.css';
import MenuSeven from './MenuSeven';
import MenuEight from './MenuEight';

export default function MenuFive(){
    return(
        <div className='mt-3'>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Button id='button-color'  className='textDisignTwo'>Подключение данных</Accordion.Button>
                    <Accordion.Body>
                        <MenuSix/>
                        <MenuSeven/>
                        <MenuEight/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}