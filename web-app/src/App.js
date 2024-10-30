import { Divider } from 'semantic-ui-react';
import './App.css';
import TopMenu from './components/topMenu';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer';
import { MenuPage } from './components/menu';
import { AboutUs } from './components/aboutUs';
import { Location } from './components/location';
import { AdminPage } from './admin/adminPage';
import { CartPage } from './cart/cartPage';
import { OnlineOrderingPage } from './ordering/onlineOrdering';

function App() {
  return (
    <div>
      <TopMenu/>
      <div className="container">
        <Routes>
          <Route path="/" element={<landingPage/>}></Route>
          <Route path="/menu" element={<MenuPage/>}></Route>
          <Route path="/order" element={<OnlineOrderingPage/>}></Route>
          <Route path="/about" element={<AboutUs/>}></Route>
          <Route path="/location" element={<Location/>}></Route>
          <Route path="/cart" element={<CartPage/>}></Route>
          <Route path='/admin' element={<AdminPage/>}></Route>
        </Routes>
      </div>
        <Divider/>
      <Footer/>
    </div>
  );
}

export default App;
