import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiDeliveryTruck, CiHeadphones } from "react-icons/ci";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import useAuthStore from "../store";
import { motion } from "framer-motion";

const FeatureItem = ({ Icon, title, desc }) => (
  <div className="flex flex-col items-start text-left">
    <div className="text-gray-400 text-4xl mb-3">
      <Icon />
    </div>
    <h3 className="font-bold text-gray-800 text-sm mb-2">{title}</h3>
    <p className="text-gray-500 text-[10px] leading-relaxed max-w-[200px]">
      {desc}
    </p>
  </div>
);

const BookCard = ({ img }) => (
  <div className="bg-white rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer shadow-lg border border-gray-100 h-64">
    <img
      src={img || "/book-placeholder.png"}
      className="w-full h-full object-cover"
      alt="best seller"
    />
  </div>
);

const RecommendedCard = ({ book }) => {
  const { addToCartStore } = useAuthStore();
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4 flex gap-4 shadow-sm hover:shadow-md transition-all">
      <img
        src={book.bookImage || "/book1.png"}
        className="w-24 h-34 object-cover rounded-lg shadow-sm"
        alt={book.bookName}
      />
      <div className="flex flex-col justify-between flex-1 text-left">
        <div>
          <h4 className="font-bold text-sm text-gray-800 line-clamp-1">
            {book.bookName}
          </h4>
          <p className="text-[10px] text-gray-400 mb-1">
            Author: {book.author}
          </p>
          <p className="text-[9px] text-gray-500 leading-tight mb-2 line-clamp-3">
            {book.description}
          </p>
          <div className="text-yellow-400 text-xs">★★★★☆</div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold text-pink-600">
            ${book.final_price?.toFixed(2)}
          </span>
          <button
            onClick={() => addToCartStore(book)}
            className="bg-pink-600 text-white text-[10px] px-4 py-1.5 rounded-full hover:bg-pink-700 transition-colors shadow-md shadow-pink-100"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const FlashSaleCard = ({ book }) => (
  <div className="bg-[#3B2F4A] text-white rounded-2xl p-4 relative group min-w-[240px] shadow-xl">
    <div className="absolute top-4 left-4 bg-pink-600 text-[10px] font-bold px-3 py-1 rounded-full z-10 shadow-lg">
      SALE
    </div>
    <div className="h-48 overflow-hidden mb-4 bg-white/10 rounded-xl flex items-center justify-center p-4">
      <img
        src={book.bookImage || "/book-placeholder.png"}
        className="h-full object-contain group-hover:scale-110 transition-transform duration-300"
        alt={book.bookName}
      />
    </div>
    <div className="text-left">
      <h4 className="text-sm font-bold truncate mb-2">{book.bookName}</h4>
      <div className="flex items-center gap-3">
        <span className="text-pink-400 font-extrabold text-lg">
          ${book.final_price?.toFixed(2)}
        </span>
        <span className="text-gray-400 text-xs line-through">
          ${book.price?.toFixed(2)}
        </span>
      </div>
    </div>
  </div>
);

const HomePage = () => {
  const [data, setData] = useState({
    recommended: [],
    flashSales: [],
    bestSelling: [],
  });
  const [loading, setLoading] = useState(true);

  const [timeLeft, setTimeLeft] = useState(30 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // تنظيف الـ Interval عند إغلاق الصفحة
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://bookstore.eraasoft.pro/api/home",
        );
        setData({
          recommended: response.data.data.recommended || [],
          flashSales: response.data.data.flashSales || [],
          bestSelling: response.data.data.best_selling_image || [],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center text-pink-600 font-black animate-pulse text-2xl">
        LOADING STORE...
      </div>
    );

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative h-[450px] w-full">
        <img
          src="/bgBooks.png"
          className="w-full h-full object-cover"
          alt="Hero"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center px-4">
          <div className="w-full max-w-3xl relative">
            <input
              type="text"
              placeholder="Search for books, authors..."
              className="w-full bg-white py-4 px-8 pr-16 rounded-xl text-black outline-none shadow-2xl text-lg"
            />
            <button className="absolute right-0 top-0 bg-pink-600 text-white h-full px-6 rounded-r-xl hover:bg-pink-700 transition-all shadow-lg">
              <FaSearch size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto py-20 px-10 md:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <FeatureItem
            Icon={CiDeliveryTruck}
            title="Fast Shipping"
            desc="Reliable delivery to your doorstep."
          />
          <FeatureItem
            Icon={RiSecurePaymentLine}
            title="Secure Payment"
            desc="100% encryption on all transactions."
          />
          <FeatureItem
            Icon={FaArrowsRotate}
            title="Easy Returns"
            desc="30-day money-back guarantee policy."
          />
          <FeatureItem
            Icon={CiHeadphones}
            title="24/7 Support"
            desc="Expert assistance whenever you need it."
          />
        </div>
      </div>

      {/* Best Seller Section */}
      <div className="bg-[#3B2F4A] py-20 text-white">
        <div className="container mx-auto px-10 md:px-24 text-center">
          <h2 className="text-3xl font-black mb-3">Best Seller</h2>
          <p className="text-gray-400 text-sm mb-12 max-w-md mx-auto">
            Explore our most popular and highly rated titles.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {(data.bestSelling.length > 0
              ? data.bestSelling
              : [1, 2, 3, 4, 5]
            ).map((item, idx) => (
              <BookCard key={idx} img={item.image || `/book${idx + 1}.png`} />
            ))}
          </div>
          <button className="mt-12 bg-pink-600 px-12 py-3 rounded-xl font-bold hover:bg-pink-700 transition-all shadow-xl shadow-pink-900/20">
            Shop Now
          </button>
        </div>
      </div>

      {/* Recommended Section */}
      <div className="container mx-auto py-24 px-10 md:px-24">
        <h2 className="text-2xl font-black text-gray-800 mb-10 text-left border-l-4 border-pink-600 pl-4">
          Recommended For You
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.recommended.map((book) => (
            <RecommendedCard key={book.bookId} book={book} />
          ))}
        </div>
      </div>

      {/* Flash Sale Section */}
      <div className="container mx-auto pb-20 px-10 md:px-24 ">
        <div className="flex justify-between items-center mb-8">
          <div className="flex flex-col w-[350px] ">
            <h2 className="text-xl font-bold text-gray-700 mb-2">Flash Sale</h2>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>
          <div className="bg-pink-100 text-pink-600 font-bold px-4 py-2 rounded-full text-lg shadow-sm border border-pink-200">
            {formatTime(timeLeft)}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 p-4">
          <FlashSaleCard
            book={{
              bookImage: "/book2.png",
              bookName: "Design of Everyday Things",
              final_price: 30.0,
              price: 45.0,
            }}
          />
          <FlashSaleCard
            book={{
              bookImage: "/book4.png",
              bookName: "The Power of Habit",
              final_price: 30.0,
              price: 45.0,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
