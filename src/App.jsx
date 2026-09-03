import {Route, Routes} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthContext";
import {Home} from "./pages/Home";
import ProductDetails from "./pages/ProductDetails.jsx";
import Auth from "./pages/Auth.jsx";
import CartProvider from "./context/CartContext.jsx";
import Checkout from "./pages/Checkout.jsx";

function App() {
    return (<AuthProvider>
        <CartProvider>
            <div className="app">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/auth" element={<Auth/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                    <Route path="/products/:id" element={<ProductDetails/>}/>
                </Routes>
            </div>
        </CartProvider>
    </AuthProvider>);
}

export default App;
