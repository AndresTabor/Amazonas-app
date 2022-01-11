import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';

const AppRouter = () => {
    
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/registro" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default AppRouter
