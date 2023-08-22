import './App.css';
import NavBar from './components/NavBar/NavBar';
import BannerPrincipal from './components/BannerPrincipal/BannerPrincipal';
import Footer from './components/Footer/Footer';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
    <header className="position-relative">
      <NavBar className='position-absolute' />
      <BannerPrincipal className='position-absolute' />
    </header>
      {/* <ItemListContainer greeting="Es hora de comprar... ¡Bienvenidos a Relax!😊"></ItemListContainer> */}
      <Footer/>
    </>
  );
}

export default App;
