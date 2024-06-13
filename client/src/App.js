import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PDFViewer from './pages/PDFViewer';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Register from './pages/Register';
import './styles/global.css';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check localStorage for token on component mount
    const token = localStorage.getItem('token');
    if (token) {
      // Set user state if token exists
      setUser({ token });
    }
  }, []);

  return (
    <Router>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/pdf/:id" element={<PDFViewer />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route
            path="/protected"
            element={
              <PrivateRoute user={user}>
                <ProtectedComponent />
              </PrivateRoute>
            }
          />
           <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
};

const ProtectedComponent = () => <div>Protected Content</div>;

export default App;
