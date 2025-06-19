import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box } from '@mui/material'
import Header from './Components/Header'
import Layout from './Components/Layout'
import {Routes,Route} from 'react-router-dom'
import DashBoard from './Pages/DashBoard'
import Recruiter from './Pages/Recruiter'
import Interviews from './Pages/Interviews'
import Assignment from './Pages/Assignment'

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<DashBoard/>}/>
      <Route path="/recruit" element={<Recruiter/>}/>
      <Route path="/interview" element={<Interviews/>}/>
      <Route path="/assign" element={<Assignment/>}/>
    </Routes>
      <Layout/>
      
    </>
  )
}

export default App
