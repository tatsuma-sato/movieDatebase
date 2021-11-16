import React, { setState } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main"
import "./App.scss";

function App() {
  const Home = () => <h2>Home</h2>;
  const About = () => <h2>About</h2>;

  

  return (
    <div>
      <Header />
      <Main />

      {/* Routes */}
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/content:id" element={<ContentPage />} />
        <Route path="*" element={<Error404 />} /> */}
      </Routes>

    </div>
  );
}

export default App;
