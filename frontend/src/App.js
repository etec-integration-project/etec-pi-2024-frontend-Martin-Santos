import React from "react";
import Header from "./Components/header/header";
import Login from "./Components/login/login";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from "./Components/register/register";
import Slider from "./Components/slider/slider";
import Footer from "./Components/footer/footer";



const App = () => {

  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>
            <Header/>
            <Slider/>
            <Footer/>
          </>} />

          <Route path="/login" element={<>
            <Header/>
            <Login/>
          </>} />

          <Route path="/register" element={<>
            <Header/>
            <Register/>
          </>} />

          <Route path="/cart" element={<>
            <Header/>
            <Footer/>
          </>} />

        </Routes>
      </BrowserRouter>
      
    </div>
  );
};



export default App;
