import React from 'react';
import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routing/AppRoutes";

function App() {
  return (
    <div className="container">
      <Header/>
      <AppRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
