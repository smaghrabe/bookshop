import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaStar,
  FaShoppingCart,
  FaRegHeart,
  FaCheckCircle,
} from "react-icons/fa";
import useAuthStore from "../store/index";
import toast from "react-hot-toast";

const BookSinglePage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("product details");
  const { addToCartStore, addToWishlistStore } = useAuthStore();

  const handleAddToCart = () => {
    addToCartStore();
    toast.success("Added to Cart! 🛒");
  };

  const handleAddToWishlist = () => {
    addToWishlistStore();
    toast.error("Added to Wishlist! ❤️");
  };

  const book = {
    bookName: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    price: 540.0,
    discount: 10,
    final_price: 486.0,
    description:
      "Written by Robert Kiyosaki and Sharon Lechter in 1997, Rich Dad Poor Dad is based on Kiyosaki's young days spent in Hawaii. The book highlights the different attitudes towards money, work and life of two men.",
    bookImage:
      "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg",
    category_name: "Business & Finance",
    publicationYear: 1997,
    numberOfPages: 336,
    lang: "English",
    bookFormat: "Hard Cover",
    stock: 15,
    countReview: 1250,
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-16 pt-10">
        {/* الجزء العلوي: تفاصيل الكتاب */}
        <div className="flex flex-col md:flex-row gap-16 mb-20">
          {/* الصورة */}
          <div className="w-full md:w-[400px] h-[550px] rounded-3xl overflow-hidden shadow-2xl bg-gray-50 border border-gray-100">
            <img
              src={book.bookImage}
              className="w-full h-full object-cover"
              alt={book.bookName}
            />
          </div>

          {/* info */}
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <span className="bg-pink-50 text-pink-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                {book.category_name}
              </span>
              <h1 className="text-5xl font-black text-gray-800 leading-tight">
                {book.bookName}
              </h1>
              <p className="text-xl text-gray-500 font-medium">
                By{" "}
                <span className="text-pink-600 italic cursor-pointer underline-offset-4 hover:underline">
                  {book.author}
                </span>
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex text-yellow-400 text-xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className="text-gray-200" />
              </div>
              <span className="text-gray-400 font-medium border-l pl-4 border-gray-200">
                {book.countReview} Customer Reviews
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg max-w-2xl">
              {book.description}
            </p>

            <div className="pt-8 flex flex-col gap-6">
              <div className="flex items-baseline gap-4">
                <span className="text-5xl font-black text-gray-900">
                  ${book.final_price}
                </span>
                <span className="text-2xl text-gray-400 line-through">
                  ${book.price}
                </span>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="bg-pink-600 text-white px-12 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-pink-700 hover:-translate-y-1 transition-all shadow-lg shadow-pink-100"
                >
                  <FaShoppingCart /> Add to Cart
                </button>
                <button
                  onClick={handleAddToWishlist}
                  className="p-4 border border-gray-200 rounded-2xl text-gray-400 hover:text-pink-600 hover:border-pink-100 hover:bg-pink-50 transition-all"
                >
                  <FaRegHeart size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex border-b border-gray-100 gap-12 mb-10">
            {["Product Details", "Customer Reviews", "Recommended for you"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`pb-4 text-lg font-bold transition-all relative ${
                    activeTab === tab.toLowerCase()
                      ? "text-pink-600"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab}
                  {activeTab === tab.toLowerCase() && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-pink-600 rounded-full"></div>
                  )}
                </button>
              ),
            )}
          </div>

          <div className="py-6 transition-all duration-300">
            {activeTab === "product details" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6">
                {[
                  { label: "Book Title", value: book.bookName },
                  { label: "Author", value: book.author },
                  { label: "Publication Year", value: book.publicationYear },
                  { label: "Language", value: book.lang },
                  { label: "Pages", value: book.numberOfPages },
                  { label: "Format", value: book.bookFormat },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between border-b border-gray-50 pb-4"
                  >
                    <span className="text-gray-500 font-medium">
                      {item.label}
                    </span>
                    <span className="text-gray-800 font-bold">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "customer reviews" && (
              <div className="flex flex-col items-center py-20 text-center space-y-4">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                  <FaStar size={40} />
                </div>
                <p className="text-gray-500 italic">
                  No reviews yet for this edition.
                </p>
                <button className="text-pink-600 font-bold hover:underline">
                  Write the first review
                </button>
              </div>
            )}

            {activeTab === "recommended for you" && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <p className="text-gray-400 col-span-full text-center py-10">
                  Similar books in {book.category_name} will appear here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSinglePage;
