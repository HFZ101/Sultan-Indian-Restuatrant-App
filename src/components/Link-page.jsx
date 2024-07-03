import '../assets/styles/Navi.css'
import { Link } from "react-router-dom";


export default function Naviheader(){
    return(
        <>
    <header>
        <div className='logo'>
            <img src="/images/SULTAN_LOGO.jpg" alt="Sultan Logo" />
        </div>
        <div className='navigation'>
            <Link to='/'>Main Menu</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/booking'>Booking</Link>
            
        </div>
    </header>
        
        </>
    )
}