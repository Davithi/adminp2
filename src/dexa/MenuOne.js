import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import './css/style.css';
import MenuTwo from "./MenuTwo";
import MenuThre from "./MenuThre";
import MenuFour from "./MenuFour";


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


export default function MenuOne(){
    return(
        <div className='bg-white p-2 pt-4'>
            <div className='ms-2 d-flex align-items-center textDisign'>Данные устройства <Example/></div>
            <MenuTwo/>
            <MenuThre/>
            <MenuFour/>
        </div>
    );
}