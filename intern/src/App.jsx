import './App.css';

import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import FloatingButtons from './FloatingButtons/FloatingButtons';
import Home from './Pages/Home';
import About from './Pages/About';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <FloatingButtons />
    </>
  );
}
