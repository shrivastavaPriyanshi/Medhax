import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Clubs from './components/Clubs';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import Recommendation from './components/Recommendation';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Clubs />
              </>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/recommendation" element={<Recommendation />} />
          <Route path="/dashboard" element={<Dashboard />} />  {/* ✅ added dashboard route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
