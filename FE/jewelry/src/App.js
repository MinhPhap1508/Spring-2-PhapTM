import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { Detail } from './components/Detail';
import { Cart } from './components/Cart';
import { List } from './components/List';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Product } from './components/Product';
import { History } from './components/History';
import { Customer } from './components/Customer';
import { HistoryOrder } from './components/HistoryOrder';


function App() {
  return (
    <>
    <Routes>
      <Route path='/header' element={<Header />} />
      <Route path='/' element={<Home />} />
      <Route path='/footer' element={<Footer/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='detail' element={<Detail/>}/>
      <Route path='product/:id' element={<Detail/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/type/:nameType' element={<List/>}/>
      <Route path='/category/:nameCategory' element={<List/>}/>
      <Route path='/trademark/:nameTrademark' element={<List/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/customer' element={<Customer/>}/>
      <Route path='/order-detail/:id' element={<HistoryOrder/>}/>
    </Routes>
    <ToastContainer/>
    </>
  );
}

export default App;
