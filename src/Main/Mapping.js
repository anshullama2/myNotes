import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import NoPage from '../Components/NoPage'
import Navbar from '../Components/Navbar'
import AddNote from '../Components/AddNote'
import UserRegis from '../UserForm/UserRegis'
import UserLogin from '../UserForm/UserLogin'
import { database } from '../Components/firebase'
import { onValue, push, ref, set } from 'firebase/database'





function Mapping() {

    const [mode, setMode] = useState("light");


    const darkMode = () => {

        // push(ref(database, `themeMode`), mode)
        //     .then(() => {
        //         alert("Data Inserted");
        //     }).catch((e) => {
        //         alert("Data Inserted"); 
        //     })

        // onValue(ref(database, `themeMode`), (snapshot) => {
        //     if (snapshot.val() != null) {
        //         console.log(Object.keys(snapshot)   )
                
        //     //   setRegis({ ...snapshot.val() });
        //     } else {
        //         alert("elsepart");
        //     //   setRegis({});
        //     }
        //   });


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