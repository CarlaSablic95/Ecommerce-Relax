import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import OutfitsMujer from './pages/OutfitsMujer/OutfitsMujer';
import OutfitsHombre from './pages/OutfitsHombre/OutfitsHombre';
import Faq from './pages/Faq/Faq';
import Login from './pages/Login/Login';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
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
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1 className='text-center'>404 Not found</h1>} />
        </Routes>
      </BrowserRouter>
    
    <Footer />
    </>
  );
}

export default App;
