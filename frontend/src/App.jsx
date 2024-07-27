import React from 'react'
import { Routes, Route } from 'react-router-dom'
import "./App.css"
import Homepage from './components/Home/Homepage'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import Notes from './components/Notes/Notes'
import CreateNotes from './components/CreateNote/CreateNotes'


const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/createNotes' element={<CreateNotes/>}/>
        <Route path='/notes' element={<Notes/>}/>
      </Routes>
    </div>
  )
}

export default App