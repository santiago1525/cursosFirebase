import React from 'react'
import '../dashboard/dashboard.css'
import './courses.css'
import Sidebar from '../../components/sidebar/sidebar';
import NavBoard from '../../components/navBoard/navBoard';
import Course from '../../components/course/course';


const Courses = () => {
  return (
    <div className='dashboard-container'>
      <div className="dashboard-nav">
        <Sidebar />
      </div>
        <div className='dashboard-content'>
            <NavBoard 
            title={'Cursos'}/>
            <div className='courses-container'>
              <div className="course-html">
                <Course
                  title={'Html'} />
                <Course
                  title={'Css'} />
                <Course
                  title={'JavaScript'} />
                <Course
                  title={'React'} />
              </div>
            </div>
      </div> 
    </div>
  )
}

export default Courses