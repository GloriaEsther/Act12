import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import ListaVendedores from './pages/comprador/ListaVendedores';
import DetallesVendedor from './pages/comprador/DetallesVendedor';
import CartPage from './pages/comprador/CartPage';
import { CartProvider } from './context/CartContext';
import ListaProductos from './pages/comprador/ListaProductos';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Routes>
        {/* Ruta de inicio de sesión */}
        <Route path="/" element={<Login />} />
        {/* Ruta de inicio de sesión */}
        <Route path="/comprador" element={<ListaVendedores />} />

        <Route path="/comprador/vendedor/:vendedorId" element={<DetallesVendedor />} />

        <Route path="/productos" element={<ListaProductos />} />

        <Route path="/carrito" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;

