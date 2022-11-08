import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../containers/Home'
import Checkout from '../containers/Checkout'
import Information from '../containers/Information'
import Payment from '../containers/Payment'
import Success from '../containers/Success'
import NotFound from '../containers/NotFound'
import Layout from '../components/Layout';


function App(){
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/information' element={<Information />} />
          <Route path='/checkout/payment' element={<Payment />} />
          <Route path='/checkout/success' element={<Success />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App