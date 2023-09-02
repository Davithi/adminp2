import { useState } from 'react';
import './css/style.css';
import Accordion from 'react-bootstrap/Accordion';

export default function MenuFuurteen(){
    const [open, setOpen] = useState(false);
    const [openTwo, setOpenTwo] = useState(false);
    const [openThre, setOpenThre] = useState(true);

    return(
        <div className="bg-white p-2 mt-4">
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Button id='button-color'  className='textDisignTwo d-flex align-items-center'>История изменений</Accordion.Button>
                    <Accordion.Body className='p-0'>
                        <div>
                            <ul className='d-flex justify-content-between mt-2'>
                                <li className='me-4'>15.05.2023</li>
                                <li className='me-4'>Воробьев</li>
                                <li className='me-4'>Комментарии 
                                    <p className={open ? "shows" : "noShows"}>Структура полностью заполнена, сохранена, изменил параметры и товары,цвет , нужно сделать прочее</p></li>
                                <li className='me-4'>
                                    <a className={open ? "showsA" : "noShowsA"} onClick={(env) => {
                                        env.preventDefault();
                                        setOpen(!open);
                                    }
                                    }>Смотреть</a>
                                </li>
                            </ul>
                            <ul className='d-flex justify-content-between mt-2'>
                                <li className='me-4'>15.05.2023</li>
                                <li className='me-4'>Воробьев</li>
                                <li className='me-4'>Комментарии 
                                    <p className={openTwo ? "shows" : "noShows"}>Структура полностью заполнена, сохранена, изменил параметры и товары,цвет , нужно сделать прочее</p></li>
                                <li className='me-4'>
                                    <a className={openTwo ? "showsA" : "noShowsA"} onClick={(env) => {
                                        env.preventDefault();
                                        setOpenTwo(!openTwo);
                                    }
                                    }>Смотреть</a>
                                </li>
                            </ul>
                            <ul className='d-flex justify-content-between mt-2'>
                                <li className='me-4'>15.05.2023</li>
                                <li className='me-4'>Воробьев</li>
                                <li className='me-4'>Комментарии 
                                    <p className={openThre ? "shows" : "noShows"}>Структура полностью заполнена, сохранена, изменил параметры и товары,цвет , нужно сделать прочее</p></li>
                                <li className='me-4'>
                                    <a className={openThre ? "showsA" : "noShowsA"} onClick={(env) => {
                                        env.preventDefault();
                                        setOpenThre(!openThre);
                                    }
                                    }>Смотреть</a>
                                </li>
                            </ul>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}