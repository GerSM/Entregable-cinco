import { HashRouter, Routes, Route } from 'react-router-dom';
import UserLogin from './Components/UserLogin'
import Pokemon from './Components/Pokemon';
import PokemonDetails from './Components/PokemonDetails';
import './App.css';
import './styles/stylesLogin.css';
import ProtectedRoutes from './Components/ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <header>
          <div className='logo'>
            <img className='img-logo' src="https://ianars.github.io/Pok-dex/images/pokedeex.png" alt="" />
          </div>
          <div className='container-line'>
            <div className='line'></div>
            <div className='circle'></div>
          </div>
        </header>
        <div className="container mt-5"></div>
          <Routes>
              <Route path="/" element={<UserLogin/>}/>
              <Route element={<ProtectedRoutes/>}>
              <Route path="/pokemon" element={<Pokemon/>}/>
              <Route path="/pokemon/:id" element={<PokemonDetails/>}/>
            </Route>
          </Routes>
        <footer className='ftr'>
          <p> Made with <i className="fa-solid fa-heart"></i> in Academlo </p>
        </footer>
      </HashRouter>
    </div>
  );
}

export default App;
