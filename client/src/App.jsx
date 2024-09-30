
import './App.css'

import Login from './pages/AuthPages/Login.jsx'
import Signup from './pages/AuthPages/signup'
import BuyPage from './pages/Ecommerrce/BuyPage'
import Cart from './pages/Ecommerrce/Cart'
import SellPage from './pages/Ecommerrce/SellPage'
// import HomePage from './pages/HomePage
import LandingPage from './pages/LandingPage'



function App() {
   return (
   <>
     <Signup/>
     {/* <BuyPage/> */}
     {/* <LandingPage/> */}
     <Cart/>
     <SellPage/> 

    

   </>
  )
}

export default App
