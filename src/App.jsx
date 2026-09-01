import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
const App = () => {
  return (
    <div>
      <Navbar storeName="Shopora" cartCount={0} />
      <main>
        <h1 className="title">Welcome To Shopora</h1>
      </main>

      <Home/>
    </div>
  );
};

export default App;
