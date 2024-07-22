import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom';
import Home from './../pages/Home';
import Sites from './../pages/Sites';
import Login from './../pages/Login';
import Explore from './../pages/Explore';
import Register from './../pages/Register';
import SearchRes from './../pages/SearchRes';


const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/> } />
        <Route path='/home' element={<Home/>}/>
        <Route path='/sites' element={<Sites/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/sites/search' element={<SearchRes/>}/>

    </Routes>
  )
}

export default Router
