import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Filmes from './pages/Filmes/Filmes';
import Animes from './pages/Animes/Animes';
import Series from './pages/Series/Series'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/Filmes" element={<Filmes />} />
        <Route path="/Animes" element={<Animes />} />
        <Route path="/Series" element={<Series />} />
      </Routes>
    </Router>
  );
}

export default App;
