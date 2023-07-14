import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Empresa } from "./pages/Empresa";
import { Home } from "./pages/Home";
import { Contato } from "./pages/Contato";
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route echo path='/empresa' element={<Empresa />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
