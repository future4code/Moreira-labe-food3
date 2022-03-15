import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Address from './pages/Address';
import Cart from './pages/Cart';
import Feed from './pages/Feed';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Signup from './pages/SignUp';


const RoutesApp = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element ={<Home />} />
                <Route path="/address" element ={<Address />} />
                <Route path="/cart" element ={<Cart />} />
                <Route path="/feed" element ={<Feed />} />
                <Route path="/login" element ={<Login />} />
                <Route path="/profile" element ={<Profile />} />
                <Route path="/search" element ={<Search />} />
                <Route path="/signup" element ={<Signup />} />
            </Routes>
        </BrowserRouter> 
    );
    
}

export default RoutesApp;