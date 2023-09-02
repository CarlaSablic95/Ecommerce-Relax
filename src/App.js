import './App.css';
import NavBar from './components/NavBar/NavBar';
import BannerPrincipal from './components/BannerPrincipal/BannerPrincipal';
import SobreNosotros from './components/SobreNosotros/SobreNosotros';
import SeccionOutfits from './components/SeccionOutfits/SeccionOutfits';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
    <header>
      <NavBar/>
      {/* <ItemListContainer greeting="Es hora de comprar... ¡Bienvenidos a Relax!😊">
      </ItemListContainer> */}
      <BannerPrincipal/>
    </header>
    <SobreNosotros />
    <SeccionOutfits />
    <Faq />
    
      <Footer />
    </>
  );
}

export default App;
