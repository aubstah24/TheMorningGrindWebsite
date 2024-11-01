import { Divider } from 'semantic-ui-react';
import './App.css';
import TopMenu from './components/top-menu';
import 'semantic-ui-css/semantic.min.css';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer';
import { MenuPage } from './components/menu';
import { AboutUs } from './components/about-us';
import { Location } from './components/location';
import { AdminPage } from './admin/admin-page';
import { CartPage } from './cart/cart-page';
import { OnlineOrderingPage } from './ordering/online-ordering';
import { ContextProvider } from './cart/cart-context';
import { LandingPage } from './components/landing-page';

function App() {
  return (
     <ContextProvider>
        <TopMenu/>
        <div class="container">
          <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/menu" element={<MenuPage/>}></Route>
            <Route path="/order" element={<OnlineOrderingPage/>}></Route>
            <Route path="/about" element={<AboutUs/>}></Route>
            <Route path="/location" element={<Location/>}></Route>
            <Route path="/cart" element={<CartPage/>}></Route>
            <Route path="/cart" element={<AdminPage/>}></Route>
          </Routes>
        </div>
        <Divider/>
        <Footer/>
     </ContextProvider>
  );
}

export default App;
