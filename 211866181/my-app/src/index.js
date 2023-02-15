import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// 1. import:
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home';

import Items from './screens/Items';
import ContactUs from './screens/ContactUs';
import Nav from './components/Nav';


import MyConsole from './components/MyConsole';
import Console from './screens/items/Console';
import Cellphone from './screens/items/Cellphone';
import MyLaptop from './components/MyLaptop';
import Laptop from './screens/items/Laptop';
import MyCell from './components/MyCell';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      
      <Route path='/items' element={<Items/>}>
          <Route path='/items/cellphone' element={<Cellphone/>}>
              {/* /items/coffee/:coffeName */}
              <Route path=':coffeeName' element={< MyCell/>}/>
          </Route>
          <Route path='/items/laptop' element={<Laptop/>}>
          <Route path=':laptopName' element={<MyLaptop/>}/>
          </Route>
          
          
          <Route path='/items/console' element={<Console/>}>
          <Route path=':consoleName' element={<MyConsole/>}/>
          </Route>
          

      </Route>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='*' element={<h3 className='alert alert-danger text-center'>
        404 - PAGE NOT FOUND</h3>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
