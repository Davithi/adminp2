import ekran from '../img/Экран.png';
import icon from '../img/icons.png';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

export default function SectionMenuRight(){

    const [state,setState] = useState(0)
    
    useEffect(()=>{
        setState(300)
        window.scrollY = state
    },[])

    console.log(state);

    return(
        <div className='bg-white p-2 d-block d-md-flex align-items-start' style={{ width: '100%', height: '100%' , display:'flex' , justifyContent:'center' , position:'sticky' , top:'0'}}>
            <img src={ekran} alt="ekran" className='me-0 me-md-5 ms-0 ms-md-5 mt-3'/>
            <Button variant="primary" className='me-3 ms-3 mt-2'><img src={icon} alt="icon"/></Button>
        </div>
    );

    }
