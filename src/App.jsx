import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Clubs from './components/Clubs';
import Footer from './components/Footer';
import SignIn from './components/SignIn';  // Importing SignIn component
import Recommendation from './components/Recommendation';  // Importing Recommendation component

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Clubs />
            </>
          } />
          <Route path="/signin" element={<SignIn />} />   {/* SignIn route */}
          <Route path="/recommendation" element={<Recommendation />} />  {/* New Recommendation route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
