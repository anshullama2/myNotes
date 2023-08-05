import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import NoPage from '../Components/NoPage'
import Navbar from '../Components/Navbar'
import AddNote from '../Components/AddNote'
import UserRegis from '../UserForm/UserRegis'
import UserLogin from '../UserForm/UserLogin'





function Mapping() {

    const [mode, setMode] = useState("light");


    const darkMode = () => {

        if (mode === "dark") {
            setMode("light");
            document.body.style.backgroundColor = "#fff";
        } else {
            setMode("dark");
            document.body.style.backgroundColor = "#001d36";
        }
    }




    return (
        <div>
            <Router>
                <Navbar mode={mode} darkMode={darkMode} />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/addnote' element={<AddNote mode={mode} />} />
                    <Route exact path='/userragister' element={<UserRegis />} />
                    <Route exact path='/userlogin' element={<UserLogin />} />

                    <Route path="*" element={<NoPage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Mapping