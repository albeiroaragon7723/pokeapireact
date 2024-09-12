import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sobre from './componentes/sobre';
import Main from './componentes/main';
import Equipo from './componentes/equipo';
import ListaProductos from './componentes/lista-productos';
import BasicModal from './componentes/modal';
import PokemonList from './componentes/pokemon-list';
import RickAndMortyList from './componentes/rick-and-morty-list';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' index element= { <RickAndMortyList/>} />
      </Routes>
    </Router>
  );
}

export default App;
