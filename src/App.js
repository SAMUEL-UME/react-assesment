// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { ItemsProvider } from "./context/ItemsContext";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound";
import "animate.css";

function App() {
  return (
    <AuthProvider>
      <ItemsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </ItemsProvider>
    </AuthProvider>
  );
}

function PrivateRoute({ children }) {
  const { isAuthenticated } = React.useContext(AuthContext);
  
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default App;
