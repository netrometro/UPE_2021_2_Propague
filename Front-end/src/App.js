import './App.css' 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './componentes/paginas/Home'
import FaleConosco from './componentes/paginas/FaleConosco'
import Sobre from './componentes/paginas/Sobre'
import Entrar from './componentes/paginas/Entrar'
import Cadastro from './componentes/paginas/Cadastro'
import ListagemProjetos from './componentes/paginas/ListagemProjetos'
import Footer from './componentes/rodape/footer';


import Navbar from './componentes/layouts/Navbar'
import Container from './componentes/layouts/Container'
import Propaganda from './componentes/paginas/Propaganda';

import Provider from './store/Provider'
import PrivateRoute from './routes/private/Private';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Provider>
          <Container>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/faleconosco" element={<FaleConosco />}></Route>
              <Route path="/sobre" element={<Sobre />}></Route> 
              <Route path="/entrar" element={<Entrar />}></Route>
              <Route path="/cadastro" element={<Cadastro/>}></Route>
              <Route path="/listagem" element={<ListagemProjetos />}></Route>
              <Route exact path='/' element={<PrivateRoute/>}>
                <Route path="/propaganda" element={<Propaganda/>}></Route>
              </Route>
            </Routes>
          </Container>
        </Provider>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

