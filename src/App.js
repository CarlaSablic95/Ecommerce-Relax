import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';

// import Products from './pages/Products/Products';
// import Detail from './pages/Detail/Detail';


// Pagina todo // lógica
// Componentes => nuestra ayuda UI o elementos que se repiten
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/login' element={<Login/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/products/:id' element={<Products/>} /> */}
          </Routes>
      </BrowserRouter>

    <Footer />
    </>
  );
}

export default App;
