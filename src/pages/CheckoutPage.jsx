import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const CheckoutPage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="bg-[#FDFDFD] min-h-screen py-12 px-6 md:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          variants={item}
          className="text-4xl text-gray-400 font-black mb-12 tracking-tight"
        >
          Checkout
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left col */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              variants={item}
              className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-50"
            >
              <h2 className="text-xl text-gray-400 font-bold mb-8">
                Shipping Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {["Name", "Phone", "Email", "City"].map((label) => (
                  <div key={label} className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      {label}
                    </label>
                    <input
                      type="text"
                      className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-pink-500 outline-none transition-all"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Payment Methods */}
            <motion.div
              variants={item}
              className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-50"
            >
              <h2 className="text-xl text-gray-400 font-bold mb-6">
                Payment Method
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {["Online", "Cash", "POS"].map((method, i) => (
                  <motion.button
                    key={method}
                    whileHover={{ y: -5 }}
                    className={`p-5 rounded-2xl border-2 font-bold text-sm ${i === 1 ? "border-pink-500 bg-pink-50/30 text-pink-600" : "border-gray-50 text-gray-400"}`}
                  >
                    {method} on Delivery
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right col - Summary */}
          <motion.div variants={item} className="lg:sticky lg:top-24 h-fit">
            <div className="bg-[#1A202C] text-white p-8 rounded-[40px] shadow-2xl">
              <h2 className="text-xl font-bold mb-8 text-pink-500">
                Order Summary
              </h2>
              {/* Summary */}
              <div className="space-y-4 border-t border-gray-800 pt-6">
                <div className="flex justify-between text-gray-400 font-medium">
                  <span>Subtotal</span>
                  <span>$80.00</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                  <span className="font-bold">Total Amount</span>
                  <span className="text-3xl font-black text-white">$84.00</span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-pink-600 mt-8 py-5 rounded-2xl font-black text-lg shadow-lg"
              >
                Confirm Order
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CheckoutPage;
