import './App.css';
import Header from './components/header'
import Footer from "./components/footer";
import Nav from "./components/nav";
import Main from "./components/main";
import React from "react";

const App = () => {
  return (
      <div className="wrap">
        <Header/>
        <Nav />
        <Main />
        <Footer/>
      </div>
  );
}

export default App;
