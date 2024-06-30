import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Layout from './components/admin/Layout'
import Login from './components/form/Login'
import Signup from './components/form/Signup'
import Users from './components/admin/pages/Users'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/admin' element={<Layout />}>

      <Route path='/admin/users' element={<Users />} />

      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
