import React from "react";
import { FaChevronRight } from "react-icons/fa";

const CheckoutPage = () => {
  return (
    <div className="bg-[#FDFDFD] min-h-screen py-12 px-6 md:px-24 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-black mb-10">Check out</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left col */}
          <div className="lg:col-span-2 space-y-8">
            {/* 1. Shipping Information */}
            <div className="bg-white p-8 rounded-[30px] border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold mb-6">Shipping Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-pink-500 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="123456789"
                    className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-pink-500 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="johnsmith@gmail.com"
                    className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-pink-500 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="Maadi"
                    className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-pink-500 outline-none"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Maadi, Cairo, Egypt"
                    className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-pink-500 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-8 rounded-[30px] border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold mb-6">Payment Method</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="flex items-center justify-center gap-2 p-4 border border-gray-100 rounded-2xl hover:border-pink-500 transition-all text-sm font-bold text-gray-400">
                  <span className="w-4 h-4 border-2 border-gray-200 rounded-full"></span>{" "}
                  Online payment
                </button>
                <button className="flex items-center justify-center gap-2 p-4 border-2 border-pink-500 bg-pink-50/30 rounded-2xl text-pink-600 text-sm font-bold">
                  <span className="w-4 h-4 border-4 border-pink-500 rounded-full"></span>{" "}
                  Cash on delivery
                </button>
                <button className="flex items-center justify-center gap-2 p-4 border border-gray-100 rounded-2xl hover:border-pink-500 transition-all text-sm font-bold text-gray-400">
                  <span className="w-4 h-4 border-2 border-gray-200 rounded-full"></span>{" "}
                  POS on delivery
                </button>
              </div>
            </div>

            {/*  Note */}
            <div className="bg-white p-8 rounded-[30px] border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold mb-6">Note</h2>
              <textarea
                placeholder="Add note"
                rows="4"
                className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-pink-500 outline-none resize-none"
              ></textarea>
            </div>
          </div>

          {/* Right col */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[30px] border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold mb-8">Order summary</h2>

              {/* Book list*/}
              <div className="space-y-6 mb-8">
                {[1, 2].map((item) => (
                  <div key={item} className="flex gap-4 items-center">
                    <div className="w-16 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src="https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg"
                        alt="book"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold leading-tight">
                        Rich Dad Poor Dad
                      </h4>
                      <p className="text-[10px] text-gray-400 mt-1">
                        Free Shipping
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="font-bold text-sm">$40</span>
                        <div className="flex items-center justify-center font-bold gap-2 rounded-2xl border border-gray-200 bg-gray-50 p-1">
                          <span className="text-pink-500 text-[20px]">-</span>
                          <span className="text-xs font-bold">1</span>
                          <span className="text-pink-500 text-[20px]">+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo Code */}
              <div className="relative mb-8">
                <input
                  type="text"
                  placeholder="Enter Promo Code"
                  className="w-full p-4 bg-gray-50 rounded-2xl border border-gray-100 text-sm outline-none"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-[#1A202C] text-white px-6 rounded-xl font-bold text-xs hover:bg-black transition-all">
                  Apply
                </button>
              </div>

              {/* Totals Table */}
              <div className="space-y-3 border-t border-gray-50 pt-6 mb-8">
                <div className="flex justify-between text-sm text-gray-400 font-bold">
                  <span>Subtotal</span>
                  <span className="text-gray-800">$80</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400 font-bold">
                  <span>Tax</span>
                  <span className="text-gray-800">$4</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400 font-bold">
                  <span>Shipping</span>
                  <span className="text-gray-800">$0</span>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-sm font-bold">Total (USD)</span>
                  <span className="text-2xl font-black text-pink-600">$84</span>
                </div>
              </div>

              <button className="w-full bg-pink-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-pink-700 shadow-xl shadow-pink-100 transition-all flex items-center justify-center gap-2">
                Confirm order <FaChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
