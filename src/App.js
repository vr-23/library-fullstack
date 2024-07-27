import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
// import SignUp from './Components/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/SignIn" element={<Login />} />
        </Routes>

      </BrowserRouter>
      {/* <Login />
      <SignUp /> */}
    </>
  );
}

export default App;
