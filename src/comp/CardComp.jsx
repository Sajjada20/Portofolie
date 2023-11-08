import React from 'react'
import { cardInfo } from '../data';
import './cardcomp.css'


/* geen boostrap gebruiken */




function CardComp({isDark}) {
  return (
    <div className='card-div-main'>
    <div className='cardcom-div'>
    {cardInfo.map((item) => {
      const {title, image, url} = item;
      return (
        <a href={url} target='_blank'>
        <div className={isDark ? 'card-item' : 'card-item-light-mode' }>
            <img src={image} alt="" />
            <h3>{title}</h3>
          </div>
        </a>
        )
      })}
      </div>
    </div>

  )
}

export default CardComp