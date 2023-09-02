import Nav from 'react-bootstrap/Nav';
import './css/style.css';
import settings from '../img/settings-4-line.png';
import Group from '../img/Group.png';
import device from '../img/device-line.png';

export default function SectionMenuLeftHeader(){
    return(
        <Nav className='bg-white border-sm d-flex align-items-center'>
          <Nav.Item>
            <Nav.Link href="/Настройки" className='textSection me-5 ms-5 d-flex align-items-center activs'><img src={settings} alt="settings" className='me-2'/> Настройки</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Товар" className='textSection me-5 ms-5 d-flex align-items-center'><img src={Group} alt="Group" className='me-2'/> Товар</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Свойства" className='textSection me-5 ms-5 d-flex align-items-center'><img src={device} alt="device" className='me-2'/> Свойства</Nav.Link>
          </Nav.Item>
        </Nav>
    );
}