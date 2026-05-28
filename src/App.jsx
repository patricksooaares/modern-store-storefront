import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { useState } from "react";

export function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemsExists = prevCart.find((item) => item.id === product.id);

      if (itemsExists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => { 
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
};

const clearCart = () => setCart([]);

const totalItems = cart.reduce((acc,item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header totalItems={totalItems} />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <Outlet context={{ cart, addToCart, removeFromCart, clearCart}} />
      </main>

      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
          © 2026 Storefront. Projeto Educacional.
        </div>
      </footer>
    </div>
  );
}
