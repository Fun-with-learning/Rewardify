import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginLanding from './Pages/Login/LoginLanding';
import Login from './Pages/Login/Login';

import StoreLanding from './Pages/Login/StoreLanding';
import SelectStore from './Pages/Login/SelectStore';

import VerifyOtp from './Pages/Login/VerifyOtp';
import MasterDashboard from './Pages/Dashboard/MasterDashboard';



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginLanding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<VerifyOtp />} />
          <Route path="/storeregister" element={<StoreLanding />} />
          <Route path="/selectstore" element={<SelectStore />} />
          <Route path="/Home" element={<MasterDashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App