import Nav from 'react-bootstrap/Nav';
import './css/style.css'

export default function SectionHeader(){
    return(
        <Nav className='bg-white border-sm p-2'>
          <Nav.Item>
            <Nav.Link href="/Планограмма" className='textSection'>Планограмма</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Товары" className='textSection'>Товары</Nav.Link>
          </Nav.Item>
        </Nav>
    );
}