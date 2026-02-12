import React, { useState } from "react";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

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
    <div className="bg-white min-h-screen py-12 px-6 md:px-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-[#1A202C] mb-12">My Cart</h1>

        {/* Product table */}
        <div className="w-full mb-10">
          <div className="hidden md:grid grid-cols-6 pb-6 border-b border-gray-100 text-gray-400 font-bold text-xs uppercase tracking-widest">
            <div className="col-span-2">Product</div>
            <div className="text-center">Quantity</div>
            <div className="text-center">Price</div>
            <div className="text-center">Total Price</div>
            <div className="text-right">Action</div>
          </div>

          <div className="divide-y divide-gray-50">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-6 py-8 items-center gap-4"
              >
                {/* Product Info */}
                <div className="col-span-2 flex gap-6 items-center">
                  <div className="w-20 h-28 rounded-xl overflow-hidden shadow-sm flex-shrink-0 border border-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-xs mt-1">
                      By {item.author}
                    </p>
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex justify-center">
                  <div className="flex items-center border border-gray-200 rounded-full bg-gray-50/50 p-1">
                    <button
                      onClick={() => decrementQty(item.id)}
                      className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-pink-600"
                    >
                      <FaMinus size={10} />
                    </button>
                    <span className="px-4 font-bold text-gray-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => incrementQty(item.id)}
                      className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-pink-600"
                    >
                      <FaPlus size={10} />
                    </button>
                  </div>
                </div>

                {/* Single Price */}
                <div className="text-center text-gray-500 font-semibold">
                  ${item.price.toFixed(2)}
                </div>

                {/* Total Item Price */}
                <div className="text-center text-xl font-black text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                {/* Trash Icon  */}
                <div className="text-right">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-300 hover:text-red-500 transition-colors p-2 bg-gray-50 rounded-lg"
                  >
                    <FaTrashAlt size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Payment Summary*/}
        {cartItems.length > 0 && (
          <div className="w-full border-2 border-dashed border-gray-200 rounded-[30px] p-8 md:p-12 bg-gray-50/30">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-black text-gray-800">
                  Payment Summary
                </h2>
                <p className="text-gray-400 text-sm font-medium">
                  Review your total and proceed to secure checkout.
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                    Subtotal
                  </span>
                  <span className="text-xl font-bold text-gray-800">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                    Shipping
                  </span>
                  <span className="text-xl font-bold text-gray-800">
                    ${shipping.toFixed(2)}
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-pink-600 text-xs font-bold uppercase tracking-widest">
                    Total Amount
                  </span>
                  <span className="text-4xl font-black text-pink-600">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => navigate("/checkout")}
                  className="bg-pink-600 text-white px-12 py-4 rounded-2xl font-black text-lg hover:bg-pink-700 shadow-xl shadow-pink-100 transition-all active:scale-95"
                >
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        )}

        {cartItems.length === 0 && (
          <div className="py-20 text-center border-2 border-dashed border-gray-100 rounded-[30px]">
            <p className="text-gray-400 text-xl mb-6">Your cart is empty!</p>
            <Link
              to="/books"
              className="bg-pink-600 text-white px-10 py-3 rounded-full font-bold"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
