
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Men from './components/Tabs/Men/Men'
import Women from './components/Tabs/Women/Women'
import ContactUs from './components/Tabs/ContactUs/ContactUs'
import AboutUs from './components/Tabs/AboutUs/AboutUs'
import SignIn from './components/Tabs/SignIn/SignIn'
import SignUp from './components/Tabs/SignUp/SignUp'
import Kid from './components/Tabs/Kid/Kid'
import MenProduct from './components/Product/MenProduct/MenProduct'
import WomenProduct from './components/Product/WomenProduct/WomenProduct'
import MiniCart from './components/Product/Cart/MiniCart/MiniCart'
import Checkout from './components/Product/Checkout/Checkout'
import Wcheckout from './components/Product/Checkout/Wcheckout'


function App() {

  return (

    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/men' element={<Men/>}/>
           <Route path='/women' element={<Women/>}/>
           <Route path='/kid' element={<Kid/>}/>
           <Route path='contact' element={<ContactUs/>}/>
           <Route path='about' element={<AboutUs/>}/>
           <Route path='signin' element={<SignIn/>}/>
           <Route path='signup' element={<SignUp/>}/>
           <Route path='menproduct' element={<MenProduct/>}/>
           <Route path='womenproduct' element={<WomenProduct/>}/>
           <Route path='minicart' element={<MiniCart />}/>
           <Route path='checkout' element={<Checkout/>}/>
           <Route path='wcheckout' element={<Wcheckout/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default App
