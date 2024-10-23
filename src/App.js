// src/App.js
import React from 'react';
import Header from './components/Header';
import PhotoGallery from './components/PhotoGallery';
import ContactBanner from './components/ContactBanner'; 
import About from './components/About'; // Importa el nuevo componente About
import Footer from './components/Footer';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'; // Importa Font Awesome

function App() {
  return (
    <div className="App">
      <Header />
      <About /> {/* Agrega la sección "About" aquí */}
      <ContactBanner />
      <main>
        <PhotoGallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;