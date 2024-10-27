
import { Car } from 'lucide-react'
import './App.css'

import Login from './pages/AuthPages/Login.jsx'
import Signup from './pages/AuthPages/signup'
import BuyPage from './pages/Ecommerrce/BuyPage'
import Cart from './pages/Ecommerrce/Cart'
import SellPage from './pages/Ecommerrce/SellPage'
import HomePage from './pages/HomePage'
// import HomePage from './pages/HomePage
import LandingPage from './pages/LandingPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthStore } from './State/useAuth'
import Order from './pages/Ecommerrce/Order'



function App() {
  const {authUser} = useAuthStore()
  console.log(authUser)
   return (
   <>
      <Routes>
        <Route path='/login' element={authUser? <Navigate to='/' /> : <Login/>}/>
        <Route path='/signup' element={authUser? <Navigate to='/' /> : <Signup/>}/>
        {authUser && <Route path='/' element={<HomePage/>}/>}

        <Route path='/buyPage' element={<BuyPage/>}/>
        <Route path='/sellPage' element={<SellPage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
      <Toaster/>
   </>
  )
}

export default App
