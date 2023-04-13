import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NovoProjeto from './components/pages/NovoProjeto';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';
import Home from './components/pages/Home';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Projetos from './components/pages/Projetos';

function App() {
  return (
    <div>
      <Router>
          
          <Navbar />
          <Container customClass="min-height">
            <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/projetos" element={<Projetos />} />
              <Route path="/empresa" element={<Empresa />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/novoprojeto" element={<NovoProjeto />} />
            </Routes>
          </Container>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
