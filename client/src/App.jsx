import { Car } from 'lucide-react'
import './App.css'

import Login from './pages/AuthPages/Login.jsx'
import Signup from './pages/AuthPages/signup'
import BuyPage from './pages/Ecommerrce/BuyPage'
import Cart from './pages/Ecommerrce/Cart'
import SellPage from './pages/Ecommerrce/SellPage'
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthStore } from './State/useAuth'
import Order from './pages/Ecommerrce/Order'
import CropPrediction from './pages/CropPrediction'
import MessageSkeleton from './components/ecommerce/Skeleton'
import WeatherPredict from './pages/WeatherPredict'
import YieldAnalysis from './pages/YieldAnalysis'
import SoldItems from './pages/Ecommerrce/SoldItems'

// Protected route component
const ProtectedRoute = ({ authUser, children }) => {
  return authUser ? children : <Navigate to="/login" />;
};

function App() {
  const { authUser } = useAuthStore();
  console.log(authUser);

  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />
        
        {/* Protected routes */}
        <Route path='/' element={<ProtectedRoute authUser={authUser}><HomePage /></ProtectedRoute>} />
        <Route path='/buyPage' element={<ProtectedRoute authUser={authUser}><BuyPage /></ProtectedRoute>} />
        <Route path='/sellPage' element={<ProtectedRoute authUser={authUser}><SellPage /></ProtectedRoute>} />
        <Route path='/sold' element={<ProtectedRoute authUser={authUser}><SoldItems /></ProtectedRoute>} />
        <Route path='/cart' element={<ProtectedRoute authUser={authUser}><Cart /></ProtectedRoute>} />
        <Route path='/order' element={<ProtectedRoute authUser={authUser}><Order /></ProtectedRoute>} />
        <Route path='/cropPredict' element={<ProtectedRoute authUser={authUser}><CropPrediction /></ProtectedRoute>} />
      <Route path='/analyze' element={<ProtectedRoute authUser={authUser}><YieldAnalysis /></ProtectedRoute>} />
        <Route path='/ms' element={<MessageSkeleton />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App;
