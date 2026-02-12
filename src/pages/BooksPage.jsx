import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";
import useAuthStore from "../store";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaFilter } from "react-icons/fa";

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const { token } = useAuthStore();

  useEffect(() => {
    const fetchBooks = async () => {
      if (!token) return;
      try {
        setLoading(true);
        const response = await axios.get(
          "https://bookstore.eraasoft.pro/api/book",
          { headers: { Authorization: `Bearer ${token}` } },
        );
        const booksData = response.data?.data?.books || [];
        const categoriesData = response.data?.data?.categories || [];
        setBooks(booksData);
        setFilteredBooks(booksData);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [token]);

  useEffect(() => {
    const result = books.filter((b) =>
      b?.bookName?.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredBooks(result);
  }, [searchTerm, books]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const bookVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 },
  };

  return (
    <div className="bg-[#FDFDFD] min-h-screen font-sans">
      {/* Banner Zoom  */}
      <div className="w-full h-44 bg-gray-900 relative mb-8 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="/bgBooks.png"
          className="w-full h-full object-cover opacity-60"
          alt="Banner"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-white text-4xl font-black tracking-tighter"
          >
            Our Library
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-16 flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="sticky top-24 space-y-8 bg-white p-6 rounded-[25px] border border-gray-50 shadow-sm"
          >
            <div className="flex items-center gap-3 border-b border-gray-50 pb-4">
              <FaFilter className="text-pink-600" size={16} />
              <h3 className="font-bold text-lg text-gray-800 tracking-tight">
                Filters
              </h3>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-gray-400 font-black text-[10px] uppercase mb-6 tracking-[0.2em]">
                Categories
              </h4>
              <ul className="space-y-4">
                {categories.map((cat, idx) => (
                  <motion.li
                    key={cat.id}
                    whileHover={{ x: 5 }}
                    className="flex justify-between items-center text-gray-600 hover:text-pink-600 cursor-pointer font-bold text-sm group transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="accent-pink-500 w-4 h-4 rounded border-gray-300"
                      />
                      <span>{cat.categoryName}</span>
                    </div>
                    <span className="text-gray-200 group-hover:text-pink-200">
                      ({Math.floor(Math.random() * 20) + 1})
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Publisher & Year */}
            {["Publisher", "Year"].map((filter) => (
              <div key={filter} className="border-t border-gray-50 pt-6">
                <div className="flex justify-between items-center font-bold text-gray-700 cursor-pointer hover:text-pink-600 transition-colors">
                  <span>{filter}</span>
                  <span className="text-[10px] opacity-30">▼</span>
                </div>
              </div>
            ))}
          </motion.div>
        </aside>

        {/* Main Area */}
        <main className="flex-1 pb-20">
          {/* Search Bar مطور */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative mb-10 group"
          >
            <input
              type="text"
              placeholder="Search by book name or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-6 pr-14 py-5 rounded-[20px] border border-gray-100 outline-none focus:ring-4 focus:ring-pink-50 transition-all shadow-sm group-hover:shadow-md text-gray-700"
            />
            <div className="absolute right-5 top-1/2 -translate-y-1/2 bg-pink-600 p-2.5 rounded-xl text-white shadow-lg shadow-pink-100">
              <FaSearch size={18} />
            </div>
          </motion.div>

          {/* Top Menu */}
          <div className="flex gap-4 overflow-x-auto pb-10 no-scrollbar">
            {["All Books", "Most Popular", "New Arrivals", "Best Seller"].map(
              (item, idx) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`whitespace-nowrap px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest border transition-all ${idx === 0 ? "bg-[#1A202C] text-white border-[#1A202C]" : "bg-white text-gray-400 border-gray-100 hover:border-pink-200"}`}
                >
                  {item}
                </motion.button>
              ),
            )}
          </div>

          {/* Books List with AnimatePresence */}
          {loading ? (
            <div className="flex flex-col items-center py-32">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-10 h-10 border-4 border-pink-100 border-t-pink-600 rounded-full mb-4"
              />
              <p className="text-gray-400 font-bold text-xs uppercase tracking-widest animate-pulse">
                Browsing Shelves...
              </p>
            </div>
          ) : (
            <motion.div
              layout
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredBooks.length > 0 ? (
                  filteredBooks.map((book) => (
                    <motion.div
                      key={book.id}
                      variants={bookVariants}
                      layout
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <BookCard book={book} />
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-32 text-gray-300 border-2 border-dashed border-gray-100 rounded-[40px] flex flex-col items-center"
                  >
                    <span className="text-5xl mb-4">🔍</span>
                    <p className="font-bold italic">
                      No results found for "{searchTerm}"
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
};

export default BooksPage;
