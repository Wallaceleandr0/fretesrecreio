import Navbar from './Navbar'
import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import Services from '../../pages/Services/Services'
import Contact from '../../pages/Contact/Contact'
import { Routes, Route } from 'react-router-dom'
import './Header.css'

function Header () {
    return (
        <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    </>
    )
}

export default Header