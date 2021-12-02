import Topbar from "./Components/TopBar/Topbar";
import Sidebar from "./Components/SideBar/Sidebar";
import Home from "./Pages/home/home";
import './app.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UserList from "./Pages/userList/UserList";
import User from "./Pages/user/User";
import NewUser from "./Pages/newUser/NewUser";
import ProductList from "./Pages/productList/ProductList";
import Product from "./Pages/product/Product";
import NewProduct from "./Pages/newProduct/NewProduct";
function App() {
  return (
    <Router>
      <Topbar />
      <div className='container'>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/users" element={<UserList/>}/>
          <Route path="/users/:userId" element={<User/>}/>
          <Route path="/newUser" element={<NewUser/>}/>
          <Route path="/products" element={<ProductList/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/newProduct' element={<NewProduct/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
