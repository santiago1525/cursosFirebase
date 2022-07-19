import React from "react";
import './info.css';
import { infoDataLeft, infoDataRigth } from "../../Data/iconsData";


const Info = () => {
  
  return (
    <div className="info-container">
        <h1>Los lenguajes que aprenderás:</h1>
          <ul className="icons-container">
            <div className="left"  data-aos="fade-right">
              { infoDataLeft.map(data => {
                return (
                  <li key={data.name}><a href={data.link} >{data.icon}{data.name}</a></li>
                )
              })}
            </div> {/* left */}
            
            <div className="rigth"  data-aos="fade-left">
              { infoDataRigth.map(data => {
                  return (
                    <li key={data.name}><a href={data.link} >{data.icon}{data.name}</a></li>
                  )
              })}
            </div> {/* rigth */}
          </ul>
          <h2>Click para ver la documentación de cada lenguaje</h2>
    </div> /* info-container */
    
  )
}

export default Info