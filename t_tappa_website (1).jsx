import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="flex justify-between items-center p-6 shadow bg-white">
        <h1 className="text-2xl font-bold text-indigo-600">T Tappa</h1>
        <nav className="space-x-6 text-gray-700">
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#cart">Cart ({cart.length})</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-4"
        >
          Custom T-Shirts That Speak Your Style
        </motion.h2>
        <p className="text-lg mb-6">Print what you love. Wear what you feel.</p>
        <Button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl shadow">
          Shop Now
        </Button>
      </section>

      {/* Products */}
      <section id="shop" className="py-16 px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1,2,3].map((item) => (
          <Card key={item} className="shadow-xl rounded-2xl">
            <CardContent className="p-4 text-center">
              <img src={`https://source.unsplash.com/400x400/?tshirt,${item}`} alt="Tshirt" className="rounded-xl mb-4" />
              <h3 className="text-xl font-semibold">Trendy Tee {item}</h3>
              <p className="text-gray-500 mb-4">₹499</p>
              <Button className="flex items-center gap-2" onClick={() => addToCart(`Trendy Tee ${item}`)}>
                <ShoppingCart size={16}/> Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Cart */}
      <section id="cart" className="py-16 px-8 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6 text-indigo-600">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="max-w-lg mx-auto">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between items-center bg-gray-100 p-3 rounded-lg mb-3">
                <span>{item}</span>
                <Button variant="destructive" size="sm" onClick={() => removeFromCart(index)}>Remove</Button>
              </div>
            ))}
            <Button className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-xl shadow">
              Proceed to Checkout
            </Button>
          </div>
        )}
      </section>

      {/* About */}
      <section id="about" className="py-16 px-8 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4 text-indigo-600">About T Tappa</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          At T Tappa, we believe every T-shirt should tell a story. Whether it’s your design, your vibe, or your group’s spirit – we make it wearable.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6 text-indigo-600">Contact Us</h2>
        <p className="text-gray-600 mb-4">Got bulk orders or custom designs? Let’s talk.</p>
        <p>Email: <a href="mailto:info@ttappa.com" className="text-indigo-600">info@ttappa.com</a></p>
        <p>Phone: <a href="tel:+919999999999" className="text-indigo-600">+91 99999 99999</a></p>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center bg-indigo-600 text-white">
        © 2025 T Tappa. All Rights Reserved.
      </footer>
    </div>
  );
}
