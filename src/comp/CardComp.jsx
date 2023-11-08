import React from 'react'
import { cardInfo } from '../data';
import './cardcomp.css'






function CardComp({isDark}) {
  return (
    <div className='card-div-main'>
    <div className='cardcom-div'>
    {cardInfo.map((item) => {
      const {title, image, url} = item;
      return (
        <div className={isDark ? 'card-item' : 'card-item-light-mode' }>
          <a href={url} target='_blank'>
            <img src={image} alt="" />
            <h3 style={{color: isDark ? 'white' : 'black'}}>{title}</h3>
          </a>
        </div>)
      })}
      </div>
    </div>

  )
}

export default CardComp