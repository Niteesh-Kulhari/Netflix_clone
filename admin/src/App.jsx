import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import './App.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContex";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";

function App() {
  const{user} = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>

      <Route path="/login" 
        element={user ? <Navigate to="/"/> : <Login />} />

        {user && 
        <>
          <Route
          path="/"
          element={
            <>
              <Topbar />
              <div className="container">
                <Sidebar />
                <Outlet /> {/* Nested routes */}
              </div>
            </>
          }
        >
          {/* Nested routes with sidebar and topbar */}
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/movies" element={<ProductList />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/newProduct" element={<NewProduct />} />
          <Route path="/lists" element={<ListList />} />
          <Route path="/list/:listId" element={<List/>} />
          <Route path="/newlist" element={<NewList/>} />

        </Route>
        </>}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;



