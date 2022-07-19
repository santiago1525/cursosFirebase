import React from 'react'
import './card.css'
import {BsCardList} from 'react-icons/bs'
import {BiTimeFive} from 'react-icons/bi'

const Cards = ({title, image, modules, time}) => {
  return (
      <div className="card-container" data-aos="zoom-in">
          <div className="cardimage-container">
              <img src={image} alt={title} width={'100px'} />
          </div>
          <div className="textcard-container">
              <h2>{title}</h2>
              <div className="container-decription">
                <div className="info-description">
                  <BsCardList /> <h3>{modules} módulos</h3>
                </div>
                <div className="info-description">
                  <BiTimeFive /> <h3>{time}h</h3>
                </div>
              </div>
              
          </div>
      </div>
    
  )
}

export default Cards