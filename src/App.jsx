import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className=' overflow-hidden min-h-screen  bg-richblack-900
 flex flex-col'>
      <Navbar 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn} 
      />

        <div className="flex-1 overflow-hidden">
     <Routes>
        <Route path='/' element={<Home isLoggedIn={isLoggedIn}/>} />
        <Route 
          path='/login' 
          element={<Login setIsLoggedIn={setIsLoggedIn} />} 
        />
        <Route 
          path='/signup' 
          element={<Signup setIsLoggedIn={setIsLoggedIn} />} 
        />
        <Route path='/dashboard' element={
         
           <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
          </PrivateRoute>
          
          } />
      </Routes>
        </div>
    
    </div>
  )
}

export default App
