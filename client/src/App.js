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
function App() {
  return (
    <>
      <Routes>
       <Route path="/" element={<HomePage></HomePage>}></Route>

       <Route path="/dashboard" element={<PrivateRoute></PrivateRoute>}>
         <Route path="user" element={<Dashboard></Dashboard>}></Route>
       </Route>
       <Route path="/dashboard" element={<AdminRoute></AdminRoute>}>
          <Route path="admin" element={<AdminDashboard></AdminDashboard>}></Route>
          <Route path="admin/create-category" element={<CreateCategory></CreateCategory>}></Route>
          <Route path="admin/create-product" element={<CreateProduct></CreateProduct>}></Route>
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
