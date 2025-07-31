import React from 'react';
import Landing from "./Components/Landing/Landing";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Landing />
      <ToastContainer /> {/* ✅ Toast messages ke liye container zaroori hai */}
    </div>
  );
}

export default App;
