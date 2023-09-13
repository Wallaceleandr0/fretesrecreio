import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import { Routes, Route } from 'react-router-dom'
import '../css/Header.css'

function Header () {
    return (
        <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/services' element={<Services />} />
        </Routes>
    </>
    )
}

export default Header