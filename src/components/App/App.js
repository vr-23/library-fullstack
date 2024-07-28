import './App.css';
import Login from '../Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from '../Signup/Signup';
import Dashboard from '../Dashboard/Dashboard';
// import SignUp from './Components/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/SignIn" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;