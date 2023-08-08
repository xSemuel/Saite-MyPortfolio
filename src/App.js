import './styles/main.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Projectpage from './pages/Projectpage';
import Contacts from './pages/Contacts';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './utils/scrollToTop';

function App() {
  return (
    <div className="App"> 
      <Router>
        <ScrollToTop />    
        <Navbar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<Projectpage />} />
            <Route path="/contacts" element={<Contacts />} />
        </Routes>
    
        <Footer /> 
      </Router> 
    </div>
  );
}

export default App;
