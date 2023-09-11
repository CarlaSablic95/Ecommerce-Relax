import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Footer from './components/Footer/Footer';


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
      <ItemListContainer greeting = {'Bienvenidos'} />
      {/* <ItemDetailContainer /> */}
      <ItemCount valorInicial={1} stockMax={10} onAdd={(cantidad) => console.log('Producto agregado ', cantidad)} />
    <Footer />
    </>
  );
}

export default App;
