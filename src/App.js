import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <header>
      <NavBar></NavBar>
    </header>
      <ItemListContainer greeting="Es hora de comprar... ¡Bienvenidos a Relax!😊"></ItemListContainer>
    </>
  );
}

export default App;
