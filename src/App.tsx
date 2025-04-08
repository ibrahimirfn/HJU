import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Priorities from './components/Priorities';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Product from './components/Product';
import Information from './components/Information';

function App() {
  return (
    <Router>
      <main className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Stats />
                <Priorities />
              </>
            }
          />
          {/* Tentang Kami Page */}
          <Route path="/tentang-kami" element={<AboutUs />} /> {/* Fix route to use TentangKita */}
          {/* Kontak Page */}
          <Route path="/kontak" element={<Contact />} /> {/* Add route for Contact page */}
          {/* Product Page */}
          <Route
            path="/produk"
            element={<Product />}
          />
          {/* Information Page */}
          <Route
            path="/informasi"
            element={<Information />}
          />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;