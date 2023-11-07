import React from 'react'

import { useNavigate } from 'react-router-dom'
import { footerLinks } from '../data';
import './footer.css'


function Footer() {
  const navigate = useNavigate();


  return (
    <div className='footer'>
      <div className='footer-div-2'>
        {footerLinks.map((data) => {
          const {title, links} = data
          return (
            <div className='footer-link-div'>
              <h1>{title}</h1>
              <div className='div-link'>
                {links.map((link) => {
                  return (
                    <div> 
                      <a id='footer-a' onClick={() => navigate(`this Should be an Error ${link.link}`)} target='_blank'>{link.name}</a>
                    </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Footer