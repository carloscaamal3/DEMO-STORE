import React from 'react'
import logo  from '../../images/logo.png';
import { Link } from 'react-router-dom';

export const footer = () => {
  return (
   
      <header>
        <div className='pie'>
       <box-icon name= "" > </box-icon>
          </div>

          <a href='#'>
            <div className='logo'>
              <img src={logo} alt='logo' width="120px" />
               </div>
          </a>

          <ul>
            <li>
              <a href=''>Inicio</a >
            </li>
            <li>
              <a href='/productos'>Productos</a >
            </li>
            <li>
              <a href='#'>Acerca de</a >
            </li>
            <li>
              <a href='/contacto'>Contacto</a >
            </li>
          </ul>
          <div   className='cart'>
          <box-icon type='solid' name='cart'></box-icon>
          <span className="item__hreftal">0</span>

      
          
          </div>
               
          </header>

    
  );
}
