import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import HomeUnauth from './Pages/HomeUnauth';
import Dashbord from './Pages/Dashbord';
import Profile from './Pages/Profile';
import Earning from './Pages/Earning';
import Deposit from './Pages/Deposit';
import CompleteTask from './Pages/CompleteTask';
import Withdraw from './Pages/Withdraw';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<HomeUnauth/>}></Route>
        <Route path='/dashboard' element={<Dashbord/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/earning' element={<Earning/>}></Route>
        <Route path='/deposit' element={<Deposit/>}></Route>
        <Route path='/complate/task' element={<CompleteTask/>}></Route>
        <Route path='/withdraw' element={<Withdraw/>}></Route>
      </Routes>
    </Router>
  )
}

export default App