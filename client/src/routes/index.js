import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import SeeAll from '../pages/SeeAll';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Product from '../pages/Product';
import CheckOut from '../pages/CheckOut';
import FileUpload from '../pages/FileUpload';
import Order from '../pages/Orders';
import { useSelector } from 'react-redux';

const Routing = () => {
    const logged = useSelector((state) => state.logged);
    const token = useSelector((state) => state.token);

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/signIn' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/orders' element={logged && token && token.role === 'admin' ? <Order /> : <Navigate to="/signIn" />} />
                <Route path="/see-all" element={logged ? <SeeAll /> : <Navigate to="/signIn" />} />
                <Route path="/check-out" element={logged ? <CheckOut /> : <Navigate to="/signIn" />} />
                <Route path='/product/:id' element={<Product />} />
                <Route path='/product/add' element={logged && token && token.role === 'admin' ? <FileUpload /> : <Navigate to="/signIn" />} />
            </Routes>
        </div>
    )
}

export default Routing;