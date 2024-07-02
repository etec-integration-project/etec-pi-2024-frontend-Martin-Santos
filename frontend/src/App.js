import React from "react";
import Header from "./Components/header/header";
import Login from "./Components/login/login";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from "./Components/register/register";
import Slider from "./Components/slider/slider";
import Footer from "./Components/footer/footer";
import { ProductList } from "./Components/productos/productos";



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

          <Route path="/productos" element={<>
            <Header/>
            <ProductList/>
            <Footer/>
          </>} />


          {/* <Route path="/productos" element={<>
            <Header/>
            <ProductList
             allProducts={allProducts}
             setAllProducts={setAllProducts}
             total={total}
             setTotal={setTotal}
             countProducts={countProducts}
             setCountProducts={setCountProducts}/>
            </>} /> */}

        </Routes>
      </BrowserRouter>
      
    </div>
  );
};



export default App;
