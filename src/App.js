import { HashRouter, Routes, Route } from 'react-router-dom';
import UserLogin from './Components/UserLogin'
import Pokemon from './Components/Pokemon';
import PokemonDetails from './Components/PokemonDetails';
import './App.css';
import ProtectedRoutes from './Components/ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <div className="container mt-5"></div>
          <Routes>
            <Route path="/" element={<UserLogin/>}/>
            <Route element={<ProtectedRoutes/>}>
              <Route path="/pokemon" element={<Pokemon/>}/>
              <Route path="/pokemon/:id" element={<PokemonDetails/>}/>
            </Route>
          </Routes>

      </HashRouter>
    </div>
  );
}

export default App;
