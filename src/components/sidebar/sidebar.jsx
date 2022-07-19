import React from 'react'
import './sidebar.css'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { sidebarData } from '../../Data/iconsData';
import {Link} from 'wouter'


const Sidebar = () => {

  return (
    <div className="sidebar-container">
      <SideNav className='sidebar'
        onSelect={(selected) => {
          
        }} >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="dashboard">
          {
            sidebarData.map(data => {
              return(
                <Link to={'/' + data.link}
                  key={data.title}>
                <NavItem eventKey={data.title} className='sidebar-icon-container'>
                  <NavIcon>
                    {data.icon}
                  </NavIcon>
                  <NavText>
                    {data.title}
                  </NavText>
                </NavItem>
                </Link>
              )
            })
          }   
        </SideNav.Nav>
      </SideNav>
    </div>

  )
}

export default Sidebar