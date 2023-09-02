import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import search from '../img/search.png';
import mail from '../img/mail-outline.png';
import notifications from '../img/notifications-none.png';
import user from '../img/Angela Mayer.png';
import './css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header(){
    return(
        <Navbar collapseOnSelect expand="lg" className="shadow-sm p-3 p-lg-0">
        <Container fluid>
            <Navbar.Brand href="#home" className='logoText'>Dexa</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto align-items-center">
                <Nav.Link href="#Кампании" className='p-3'>Кампании</Nav.Link>
                <Nav.Link href="#Файлы" className='p-3'>Файлы</Nav.Link>
                <Nav.Link href="#Устройства" className='p-3'>Устройства</Nav.Link>
                <Nav.Link href="#Dex.Air" className='link p-4'>Dex.<span className='linkColor'>Air</span></Nav.Link>
            </Nav>
            <Nav className='align-items-center'>
                <Nav.Link href="#search"><img src={search} alt='search'/></Nav.Link>
                <Nav.Link href="#mail"><img src={mail} alt='mail'/></Nav.Link>
                <Nav.Link href="#notifications"><img src={notifications} alt='notifications'/></Nav.Link>
                <Nav.Link href="#user" className='ms-2'><img src={user} alt='user'/></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}