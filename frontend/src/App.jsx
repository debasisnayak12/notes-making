import React from 'react'
import "./App.css"
import Signup from './components/Signup'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Notes from './components/Notes'


const App = () => {
  return (
    <div className='app'>
      <h1>Notes Taking Application</h1>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/notes' element={<Notes/>}/>
      </Routes>
    </div>
  )
}

export default App