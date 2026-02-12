import React, { useState } from "react";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      price: 480.0,
      image:
        "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg",
      quantity: 1,
    },
    {
      id: 2,
      name: "The Psychology of Money",
      author: "Morgan Housel",
      price: 350.0,
      image:
        "https://m.media-amazon.com/images/I/71TR7C7fTIL._AC_UF1000,1000_QL80_.jpg",
      quantity: 2,
    },
    {
      id: 3,
      name: "The Psychology of Money",
      author: "Morgan Housel",
      price: 320.0,
      image:
        "https://m.media-amazon.com/images/I/71TR7C7fTIL._AC_UF1000,1000_QL80_.jpg",
      quantity: 2,
    },
  ]);

  const incrementQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decrementQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shipping = cartItems.length > 0 ? 50 : 0;
  const total = subtotal + shipping;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white min-h-screen py-12 px-6 md:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-[#1A202C] mb-12 tracking-tighter">
          My Cart
        </h1>

        <div className="w-full mb-10">
          <div className="hidden md:grid grid-cols-6 pb-6 border-b border-gray-100 text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em]">
            <div className="col-span-2">Product</div>
            <div className="text-center">Quantity</div>
            <div className="text-center">Price</div>
            <div className="text-center">Total</div>
            <div className="text-right">Action</div>
          </div>

          <motion.div layout className="divide-y divide-gray-50">
            <AnimatePresence mode="popLayout">
              {cartItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="grid grid-cols-1 md:grid-cols-6 py-8 items-center gap-4"
                >
                  <div className="col-span-2 flex gap-6 items-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-20 h-28 rounded-xl overflow-hidden shadow-lg flex-shrink-0 border border-gray-100"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-gray-400 text-xs mt-1">
                        By {item.author}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="flex items-center border border-gray-100 rounded-full bg-gray-50 p-1">
                      <button
                        onClick={() => decrementQty(item.id)}
                        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-pink-600 transition-colors"
                      >
                        <FaMinus size={10} />
                      </button>
                      <span className="px-4 font-bold text-gray-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => incrementQty(item.id)}
                        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-pink-600 transition-colors"
                      >
                        <FaPlus size={10} />
                      </button>
                    </div>
                  </div>

                  <div className="text-center text-gray-400 font-bold text-sm">
                    ${item.price.toFixed(2)}
                  </div>
                  <div className="text-center text-xl font-black text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  <div className="text-right">
                    <motion.button
                      whileHover={{ scale: 1.1, backgroundColor: "#FEE2E2" }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => removeItem(item.id)}
                      className="text-gray-300 hover:text-red-500 p-3 bg-gray-50 rounded-xl transition-colors"
                    >
                      <FaTrashAlt size={16} />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Payment Summary */}
        {cartItems.length > 0 && (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-full border-2 border-dashed border-gray-200 rounded-[35px] p-8 md:p-12 bg-gray-50/30"
          >
            {/* Payment Summary */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-black text-gray-800">
                  Payment Summary
                </h2>
                <p className="text-gray-400 text-sm">
                  Review your total and proceed to secure checkout.
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
                    Total Amount
                  </span>
                  <span className="text-4xl font-black text-pink-600">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgb(219 39 119 / 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/checkout")}
                  className="bg-pink-600 text-white px-12 py-4 rounded-2xl font-black text-lg shadow-xl shadow-pink-100"
                >
                  Checkout Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default CartPage;
