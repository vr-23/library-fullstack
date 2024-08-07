import './App.css';
import Login from '../Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from '../Signup/Signup';
import Dashboard from '../Dashboard/Dashboard';
import Cart from '../Cart/Cart';
import AddBook from '../AddBook/AddBook';
import MyLibrary from '../MyLibrary/MyLibrary';
// import SignUp from './Components/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/SignIn" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/AddBook" element={<AddBook />} />
          <Route path="/myLibrary" element={<MyLibrary />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;