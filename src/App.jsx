import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import FullScreenLoader from "./components/fullScreenLoader/FullScreenLoader";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Toaster />
      <FullScreenLoader />
      <div className="App">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
