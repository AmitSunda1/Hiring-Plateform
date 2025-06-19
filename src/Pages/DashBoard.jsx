import React from 'react'
import Hiring from '../Components/Dashboard/Hiring'
import JobSummery from '../Components/Dashboard/JobSummery'
import DashBoardMain from '../Components/Dashboard/DashBoardMain'
import Header from '../Components/Header'
import Taskadd from '../Components/Dashboard/Taskadd'
import Schedule from '../Components/Dashboard/Schedule'

function DashBoard() {
  return (
    <div >
      
      <DashBoardMain/>
      <Hiring/>
      <JobSummery/>
      <Taskadd/>
      <Schedule/>
    </div>
  )
}

export default DashBoard
