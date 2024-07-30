import React from 'react'
import { Routes, Route } from 'react-router-dom'
import "./App.css"
import Homepage from './components/Home/Homepage'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import CreateNotes from './components/CreateNote/CreateNotes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/createNotes' element={<CreateNotes/>}/>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App