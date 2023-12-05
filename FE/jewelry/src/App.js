import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { Footer } from './components/Footer';
import { Login } from './components/Login';

function App() {
  return (
    <Routes>
      <Route path='/header' element={<Header />} />
      <Route path='/' element={<Home />} />
      <Route path='/footer' element={<Footer/>}/>
      <Route path='login' element={<Login/>}/>
    </Routes>
  );
}

export default App;
