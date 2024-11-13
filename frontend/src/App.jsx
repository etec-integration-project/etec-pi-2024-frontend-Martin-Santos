import React from "react";
import Header from "./Components/header/header";
import Login from "./Components/login/login";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from "./Components/register/register";
import Slider from "./Components/slider/slider";
import Footer from "./Components/footer/footer";
import { ProductList } from "./Components/productos/productos";
import CartContent from "./Components/CartContent/CartContent";
import DataProvider from "./Components/Context/DataContext";
import CreateProduct from "./Components/productos/createProduct";
import EditProduct from "./Components/productos/editProduct";
import Cart from "./Components/cart/cart";



function App() {

  localStorage.setItem('products', JSON.stringify([]))

  return(
    <div>
      {/* <DataProvider> */}
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
              <Cart/>
              <Footer/>
            </>} />

            <Route path="/productos" element={<>
              <Header/>
              <ProductList/>
              <Footer/>
            </>} />

            <Route path="/createProduct" element={<>
              <Header/>
              <CreateProduct/>
              <Footer/>
            </>} />

            <Route path="/editProduct/:id" element={<>
              <Header/>
              <EditProduct/>
              <Footer/>
            </>} />


            {/* <Route path="/cart" element={<>
              <CartContent/>
            </>} /> */}


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
      {/* </DataProvider> */}
      
    </div>
  );
};



export default App;
