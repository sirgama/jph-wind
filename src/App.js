import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signin from "./APP/Pages/Auth/Signin/Index";
import Signup from "./APP/Pages/Auth/Signup/Index";

import HomePage from "./APP/Pages/Home/Index";

import Albums from "./APP/Pages/Home/Features/Albums/Index";

import AppContext from "./APP/Context/AppContext";
import { useState } from "react";


function App() {

  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [token, setToken] = useState(null)

  return (
    <AppContext.Provider value={{
      user,
      setUser,
      isLoggedIn,
      setIsLoggedIn,
      token,
      setToken
    }}>
      <BrowserRouter >
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="albums" element={<Albums />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
