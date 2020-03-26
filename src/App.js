import React from 'react';
import './App.css'; 
import PageOneProduct from  "../src/Commponents/PageOneProduct";
import Header from "./Commponents/Header";
import Footer from "./Commponents/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <PageOneProduct />
      <Footer />
    </div>
  );
}

export default App;
