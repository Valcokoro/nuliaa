import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.jpg';


const AltNavbar = () => {
    const [isMobile, setIsMobile] = useState(false);
   return (
       <nav className="alt-navbar">
           <img src={logo} className='logo' alt='logo'/>
           <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}
               onClick = {() => setIsMobile(false)}
           >
               <Link to='/' className='profile'>
                   <li>Profile</li>
               </Link>
               <Link to='/about' className='about'>
                   <li>About</li>
               </Link>
               <Link to='/projects' className='projects'>
                   <li>Projects</li>
               </Link>
               
           </ul>
           <button className='phone-menu-icon'
              onClick={ () => setIsMobile(!isMobile)} >
               {isMobile ? (
               <i className="times icon"></i> 
               )
               : (<i className="bars icon"></i>)}
           </button>
       </nav>
   )
}


export default AltNavbar;