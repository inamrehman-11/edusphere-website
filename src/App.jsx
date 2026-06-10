import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Courses from './pages/Courses';
import Events from './pages/Events';
import Teachers from './pages/Teachers';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
        {/* Navbar har page par show hogi */}
        <Navbar />

        {/* Main Content Area jahan pages change honge */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/events" element={<Events />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer har page ke end par show hoga */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;