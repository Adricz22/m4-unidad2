// import logo from './logo.svg';
// import '../src/styles/components/pages/normalize.css';
import './App.css';
import { BrowserRouter, Routes, Route } 
from "react-router-dom";
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Nav />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/nosotros" exact element={<NosotrosPage />} />
        <Route path="/novedades" exact element={<NovedadesPage />} />
        <Route path="/contacto" exact element={<ContactoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
