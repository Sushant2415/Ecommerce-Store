import React from "react";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
      <Navbar storeName="Shopora" cartCount={0} />
      <main>
        <h1 className="title">Welcome To Shopora</h1>
      </main>
    </div>
  );
};

export default App;
