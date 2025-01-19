import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './views/home';
import CategoryPage from './views/category';
import AdPage from './views/ad';


const App: React.FC = () => {
  return (
    <Router>
        <div className="flex flex-col flex-1">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/categories" element={<CategoryPage />} />
              <Route path="/ads" element={<AdPage />} />
              {/* <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} /> */}
            </Routes>
          </main>
        </div>
    </Router>
  );
};

export default App
