import { useEffect, useMemo, useState } from 'react'

import './App.css'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import {BrowserRouter , Routes, Route} from "react-router-dom";
import UserList from './pages/userList/UserList'
import User from './pages/user/User'
import NewUser from './pages/newUser/NewUser'
import ProductList from './pages/productList/ProductList'
import Product from './pages/product/Product'
import NewProduct from './pages/newProduct/NewProduct'
import axios from "axios";
import Login from './pages/login/Login'

function App() {
  return (
    <>
    <BrowserRouter> 
       <Routes>
       <Route element={
            <>
                  <Topbar></Topbar>
                  <div className="container">
                  <Sidebar/>
                  <Route exact path='/' element={<Home/>}/>
                  <Route path='/users' element={<UserList/>}/>
                  <Route path='/user/:userId' element={<User/>}/>
                  <Route path='/newUser' element={<NewUser/>}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/movies' element={<ProductList/>}/>
                  <Route path='/products/:productsId' element={<Product/>}/>
                  <Route path='/newProduct' element={<NewProduct/>}/>
                  </div>
          </>
        }/>

        <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


