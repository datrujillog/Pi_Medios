
// import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Headercomponet from "./components/nav"
import Sales from './components/sales';
import ProductManager from './components/ProductManager';
import  UserManager  from './components/userManager';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/*" element={<Headercomponet />}>
          <Route path="sales" element={<Sales />} />
          <Route path="product" element={<ProductManager />} />
          <Route path="user" element={<UserManager />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App
