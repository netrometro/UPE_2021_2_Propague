import './App.css' 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './componentes/paginas/Home'
import Contato from './componentes/paginas/Contato'
import Sobre from './componentes/paginas/Sobre'
import Entrar from './componentes/paginas/Entrar'
import Cadastro from './componentes/paginas/Cadastro'
import ListagemProjetos from './componentes/paginas/ListagemProjetos'


import Navbar from './componentes/layouts/Navbar'
import Container from './componentes/layouts/Container'
import Propaganda from './componentes/paginas/Propaganda';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Container>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/contato" element={<Contato />}></Route>
            <Route path="/sobre" element={<Sobre />}></Route>
            <Route path="/entrar" element={<Entrar />}></Route>
            <Route path="/cadastro" element={<Cadastro/>}></Route>
            <Route path="/listagem" element={<ListagemProjetos />}></Route>
            <Route path="/propaganda" element={<Propaganda/>}></Route>
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;

