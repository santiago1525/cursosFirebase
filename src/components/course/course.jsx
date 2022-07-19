import React from 'react'
import './course.css'
import Card from '../../components/cards/card';
import { courseData } from '../../Data/iconsData';

const Course = ({title}) => {
  return (
    <div className='course-container'>
        <h1 className='course-title'>{title}</h1>
            <div className="cards-container">
                {
                    courseData.map(data => {
                      return(
                        <Card
                          key={data.title}
                          title={data.title}
                          image={data.img}
                          modules={data.modules}
                          time={data.hours}
                          />
                      )
                    })
                  }
                   
            </div>
    </div>
  )
}

export default Course