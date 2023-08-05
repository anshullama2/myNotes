import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {


    

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} px-5`}>
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold" to={'/'}>MyNotes</Link >
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link >
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Contact</Link >
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">About </Link >
                            </li>
                        </ul>
                        <div className="d-flex ">
                            <Link to={'/userragister'} className="btn btn-outline-success mx-2" type="submit">Sign Up</Link>
                            <Link to={'/userlogin'}className="btn btn-outline-success mx-2" type="submit">Login</Link>
                        </div>
                        <div className="form-check form-switch ms-3">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.darkMode}/>
                            <label className={`form-check-label text-${props.mode === 'light' ? "dark" : "light"}`} htmlFor="flexSwitchCheckDefault" >Theme Mode</label>
                        </div>
                    </div>
                </div>
            </nav>



            
        </div>
    )
}

export default Navbar