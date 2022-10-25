import React from 'react'
import {Container} from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './commponents/Header';
import Footer from './commponents/Footer';
import HomeScreen from './commponents/screens/HomeScreen';
import ProductScreen from './commponents/screens/ProductScreen';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <main className='py-3'>
      <Container>
        
        <Routes>
            <Route path='/' element={<HomeScreen/>} exact/>
            <Route path='/product/:id' element={<ProductScreen/>}/>
        </Routes>
      </Container>
      <Footer/>
    </main>
    </BrowserRouter>
  );
}



export default App;
