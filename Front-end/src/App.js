import './App.css' 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './componentes/paginas/Home'
import Contato from './componentes/paginas/Contato'
import Sobre from './componentes/paginas/Sobre'
import Entrar from './componentes/paginas/Entrar'

import Navbar from './componentes/layouts/Navbar'

function App() {
  return (
    <div>
      <Router>
        <Navbar/>

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
          <Route path="/entrar" element={<Entrar />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
