import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import OutfitsMujer from './pages/OutfitsMujer/OutfitsMujer';
import OutfitsHombre from './pages/OutfitsHombre/OutfitsHombre';
import Faq from './pages/Faq/Faq';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Footer from './components/Footer/Footer';
import CartProvider from './context/CartProvider';
import { ToastContainer } from 'react-toastify';
import Checkout from './firebaseConfig/services/Checkout';

function App() {

  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/category/:categoryID" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/outfits-mujer" element={<OutfitsMujer/>} />
          <Route path="/outfits-hombre" element={<OutfitsHombre/>} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
    <ToastContainer/>
    <Footer />
    </>
  );
}

export default App;
