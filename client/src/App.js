// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import PDFViewer from './pages/PDFViewer';
// import Login from './pages/Login';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Header user={user} setUser={setUser} />
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
        </Routes>
      </main>
    </Router>
  );
};

const ProtectedComponent = () => <div>Protected Content</div>;

export default App;
