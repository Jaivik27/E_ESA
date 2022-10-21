import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Post from './pages/Post.jsx'
import Product from './pages/Products.jsx'
import SingleProduct from './pages/SingleProduct.jsx'
import Error from './pages/Error.jsx'
import SIGN from './pages/SIGN.jsx'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='ABOUT' element={<About/>}  />
      <Route path='PRODUCTS' element={<Product/>}  />
      <Route path='PRODUCTS/:PRODUCTID' element={<SingleProduct/>}  />
      <Route path='POST' element={<Post/>}  />
      <Route path='*' element={<Error/>}  />
      <Route path='SIGN' element={<SIGN/>} />
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
