import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Layout from './components/admin/Layout'
import Login from './components/form/Login'
import Signup from './components/form/Signup'
import Users from './components/admin/pages/Users'
import Notification from './components/admin/pages/Notification'
import Members_Layout from './members/Members_Layout'
import Staff_Layout from './components/staff/Staff_Layout'
import Payment from './members/pages/Payment'
import Transactions from './components/admin/pages/Transactions'
import Activities from './components/admin/pages/Activities'
import AddEvent from './components/admin/pages/AddEvent'
import StaffEvent from './components/staff/pages/StaffEvent'
import StaffNotification from './components/staff/pages/StaffNotification'
import StaffPay from './components/staff/pages/StaffPay'
import StaffTransactions from './components/staff/pages/StaffTransactions'
import MemberEvent from './members/pages/MemberEvent'
import MemberNotification from './members/pages/MemberNotification'
import UpdateUser from './components/admin/pages/UpdateUser'
import AddNotification from './components/admin/pages/AddNotification'
import UpdateNotification from './components/admin/pages/UpdateNotification'
import EdditEvent from './components/admin/pages/EdditEvent'
import Home from './components/admin/pages/Home'
import StaffHome from './components/staff/pages/StaffHome'
import AddUser from './components/admin/pages/AddUser'
import StaffAddNotification from './components/staff/pages/StaffAddNotification'
import EventAdd from './components/staff/pages/EventAdd'
import EventUpdate from './components/staff/pages/EventUpdate'
import UpdateNot from './components/staff/pages/UpdateNot'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />



      <Route path='/admin' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/admin/users' element={<Users />} />
      <Route path='/admin/transactions' element={<Transactions />} />
      <Route path='/admin/notifications' element={<Notification />} />
      <Route path='/admin/activites' element={<Activities />} />
      <Route path='/admin/addevent' element={<AddEvent />} />
      <Route path='/admin/updateuser/:id' element={<UpdateUser />} />
      <Route path='/admin/add-notification' element={<AddNotification />} />
      <Route path='/admin/edit-notification/:id' element={<UpdateNotification />} />
      <Route path='/admin/edit-event/:name' element={<EdditEvent />} />
      <Route path='/admin/pay' element={<Payment />} />
      <Route path='/admin/adduser' element={<AddUser />} />
      
      </Route>

      <Route path='/members' element={<Members_Layout />} >
      <Route path='/members/pay' element={<Payment />} />
      <Route path='/members/events' element={<MemberEvent />} />
      <Route path='/members/notifications' element={<MemberNotification />} />
      </Route>
      <Route path='/staff' element={<Staff_Layout />}>
      <Route index element={<StaffHome />} />
      <Route path='/staff/events' element={<StaffEvent />} />
      <Route path='/staff/notifications' element={<StaffNotification  />} />
      <Route path='/staff/Pay' element={<StaffPay  />} />
      <Route path='/staff/transactions' element={<StaffTransactions />} />
      <Route path='/staff/AddNotification' element={<StaffAddNotification />} />
      <Route path='/staff/eventadd' element={<EventAdd />} />
      <Route path='/staff/update-event/:name' element={<EventUpdate />} />
      <Route path='/staff/update-notification/:id' element={<UpdateNot />} />
      </Route>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
