import { Route, Routes } from 'react-router';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import DashboardPage from './pages/dasboardPage/DashboardPage';
import DepartmentPage from './pages/departmentPage/DepartmentPage';
import ProductlistPage from './pages/productListingPage.jsx/ProductlistPage';
import SingleProductPage from './pages/singleProductPage/SingleProductPage';
import AddProduct from './pages/addProduct/AddProduct';

function App() {


  return (
    <div className="App layout">
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='pages'>
        <Routes>
          <Route path='/' element={<DashboardPage />} />
          <Route path='/departments' element={<DepartmentPage />} />
          <Route path='/products' element={<ProductlistPage />} />
          <Route path='/product/:productId' element={<SingleProductPage />} />
          <Route path='/add-product' element={<AddProduct />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
