import React from 'react'
import Header from './Header'
import Sidebar from './SideBar'

function Layout() {
  return (
    
    <div style={{
      backgroundColor:"#F5F6FA",     
      
    }} >
      <Header />
      <div>
     <Sidebar/></div>
      
    </div>
  )
}

export default Layout
