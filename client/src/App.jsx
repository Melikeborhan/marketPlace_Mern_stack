import { BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header'
import { CreateListing } from './pages/CreateListing'
import { PrivateRoute } from './components/PrivateRoute'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/'  element={<Home />} />
      <Route path='/sign-in'  element={<SignIn />} />
      <Route path='/sign-up'  element={<SignUp />} />
      <Route path='/about'  element={<About />} />

      <Route  element={<PrivateRoute />} > //ıts a private route for user profile
      <Route path='/profile'  element={<Profile />} />
      </Route>

      <Route path='/create-listing'  element={<CreateListing />} />
    </Routes>
    </BrowserRouter>
  )
}
