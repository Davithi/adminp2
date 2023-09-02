import './css/style.css';
import MenuTen from './MenuTen';
import MenuEleven from './MenuEleven';
import MenuTwelve from './MenuTwelve';

export default function MenuNine(){
    return(
        <div className="bg-white p-2 mt-4">
            <p className='textDisignTwo ms-2'>Верхний баннер</p>
            <MenuTen/>
            <MenuEleven/>
            <MenuTwelve/>
        </div>
    );
}