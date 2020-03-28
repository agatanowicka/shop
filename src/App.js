import React from 'react';
import './App.css'; 
//import PageOneProduct from  "../src/Commponents/PageOneProduct/PageOneProduct";
import Header from "./Commponents/Header";
import Footer from "./Commponents/Footer";
import Catalog from "../src/Commponents/Catalog/Catalog"

function App() {
  return (
    <div className="App">
      <Header />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
