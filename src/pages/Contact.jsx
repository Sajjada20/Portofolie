import React, { useContext, useEffect, useState } from 'react'
import './styles/contact.css'
import { useContextHook } from '../App'

import {like,like2,likeFill,airbnb,sajjad,bill,binance,card,coinbase,dropbox,logo,quotes,robot,send,shield,star,menu,close,google,apple,arrowUp,discount,facebook,instagram,linkedin,twitter,people01,people02,people03,logo1} from '../assets/new/index'



function Contact() {
  const [MainData, setMainData] = useState([])
  const [data, setData] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  })
  const {isDark} = useContextHook()


  
console.log(MainData);

  const transferData = (value, id) => {
    setData((prevData) => ({ ...prevData, [id]: value }));
  }; 
  function dataOverzet() {
    setMainData((prevData) => ([...prevData, data]))
  }
  return (
    <div className='contact-div-1'>

    <div className='contact-main-div'>

      <div className='contact-div-text'>
        <h1 id='contact-h1'>Neem <strong>Contact</strong> op.</h1>
        <p id='contact-p'>Of je nu een project begint, zakelijke vragen hebt of gewoon hallo wilt zeggen, mijn inbox staat altijd open, dus voel je vrij om contact op te nemen, en ik zal zo snel mogelijk antwoorden.</p>
        <button className='btnt'><a id='a-contact' href='mailto:sajjadarr978@gmail.com' target='_blank' >Stuur me een e-mail.</a></button>
      </div>

      {/* input */}
      <div className={isDark ? 'contact-div-input' : 'contact-div-input-light-mode'}>
        <div className='input-div-name-subject'>
          <input type="text"  placeholder='Name*' onChange={(e) => transferData(e.target.value, 'name')} />
          <input type="text"  placeholder='Subject*'  onChange={(e) => transferData(e.target.value, 'subject')}/>
        </div>
          <input type="email"  placeholder='Email*'   onChange={(e) => transferData(e.target.value, 'email')} />
          <input type="text" id='message-contact'  placeholder='Message*'  onChange={(e) => transferData(e.target.value, 'message')} />
          <button id='btn' onClick={dataOverzet}>
            <span id='btn-contact'> submit </span>
          </button>
      </div>
    </div>
    <div className='about-image-div'>
        <img src={airbnb} alt="" />
        <img src={binance} alt="" />
        <img src={coinbase} alt="" />
        <img src={dropbox} alt="" />
      </div>
    </div>
  );
}

export default Contact