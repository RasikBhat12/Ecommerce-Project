import { Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import Products from "./pages/Admin/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
function App() {
  return (
    <>
      <Routes>
       <Route path="/" element={<HomePage></HomePage>}></Route>
       <Route path="/product/:slug" element={<ProductDetails></ProductDetails>}></Route>
       <Route path="/categories" element={<Categories></Categories>}></Route>
       <Route path="/category/:slug" element={<CategoryProduct></CategoryProduct>}></Route>
       <Route path="/search" element={<Search></Search>}></Route>

       
       <Route path="/dashboard" element={<PrivateRoute></PrivateRoute>}>
         <Route path="user" element={<Dashboard></Dashboard>}></Route>
         <Route path="user/orders" element={<Orders></Orders>}></Route>
         <Route path="user/profile" element={<Profile></Profile>}></Route>
       </Route>

       <Route path="/dashboard" element={<AdminRoute></AdminRoute>}>
          <Route path="admin" element={<AdminDashboard></AdminDashboard>}></Route>
          <Route path="admin/create-category" element={<CreateCategory></CreateCategory>}></Route>
          <Route path="admin/create-product" element={<CreateProduct></CreateProduct>}></Route>
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/users" element={<Users></Users>}></Route>
       </Route>

        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/forgot-password" element={<ForgotPassword></ForgotPassword>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/policy" element={<Policy></Policy>}></Route>
        <Route path="*" element={<Pagenotfound></Pagenotfound>}></Route>
      </Routes>
    </>
  );
}

export default App;
