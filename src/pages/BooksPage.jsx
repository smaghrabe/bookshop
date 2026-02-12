import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";
import useAuthStore from "../store";

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
          {
            headers: { Authorization: `Bearer ${token}` },
          },
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

  // Filter books based on search term
  useEffect(() => {
    const result = books.filter((b) =>
      b?.bookName?.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredBooks(result);
  }, [searchTerm, books]);

  return (
    <div className="bg-white min-h-screen">
      {/* Banner */}
      <div className="w-full h-32 bg-gray-100 relative mb-8">
        <img
          src="/bgBooks.png"
          className="w-full h-full object-cover opacity-50"
          alt="Banner"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-16 flex flex-col md:flex-row gap-12">
        {/* Sidebar - Side Menu */}
        <aside className="w-full md:w-1/4">
          <div className="sticky top-24 space-y-8">
            <div className="flex items-center gap-2 border-b pb-4">
              <span className="text-xl font-bold text-gray-400">≡</span>
              <h3 className="font-bold text-lg text-gray-800">Filter</h3>
            </div>

            {/* 1. Categories (Dynamic from API) */}
            <div>
              <h4 className="text-pink-600 font-bold text-xs uppercase mb-6 tracking-widest">
                Categories
              </h4>
              <ul className="space-y-4">
                {categories.map((cat) => (
                  <li
                    key={cat.id}
                    className="flex justify-between items-center text-gray-600 hover:text-pink-600 cursor-pointer font-medium group transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="accent-pink-500 w-4 h-4 rounded border-gray-300"
                      />
                      <span>{cat.categoryName}</span>
                    </div>
                    <span className="text-gray-300 group-hover:text-pink-300">
                      ({Math.floor(Math.random() * 20) + 1})
                    </span>
                  </li>
                ))}
              </ul>
              <button className="text-pink-600 text-xs mt-4 font-bold hover:underline">
                + View More
              </button>
            </div>

            {/* 2. Publisher Section */}
            <div className="border-t pt-6">
              <div className="flex justify-between items-center font-bold text-gray-700 cursor-pointer hover:text-pink-600 transition-colors">
                <span>Publisher</span>
                <span className="text-[10px]">▼</span>
              </div>
            </div>

            {/* 3. Year Section */}
            <div className="border-t pt-6">
              <div className="flex justify-between items-center font-bold text-gray-700 cursor-pointer hover:text-pink-600 transition-colors">
                <span>Year</span>
                <span className="text-[10px]">▼</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Area */}
        <main className="flex-1 pb-20">
          {/* Search Bar */}
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Search by book name or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-6 pr-14 py-4 rounded-2xl border border-gray-100 outline-none focus:ring-2 focus:ring-pink-500 shadow-sm transition-all"
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>

          {/* Top Categories Menu */}
          <div className="flex gap-4 overflow-x-auto pb-8 no-scrollbar">
            {["All Books", "Most Popular", "New Arrivals", "Best Seller"].map(
              (item, idx) => (
                <button
                  key={item}
                  className={`whitespace-nowrap px-8 py-2.5 rounded-full text-sm font-bold border transition-all ${idx === 0 ? "bg-pink-600 text-white border-pink-600" : "bg-white text-gray-400 border-gray-100 hover:border-pink-300 hover:text-pink-500"}`}
                >
                  {item}
                </button>
              ),
            )}
          </div>

          {/* Books List */}
          {loading ? (
            <div className="text-center py-20 text-pink-600 font-bold animate-pulse">
              Loading Books...
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-10">
              {filteredBooks.length > 0 ? (
                filteredBooks.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))
              ) : (
                <div className="text-center py-20 text-gray-400 border-2 border-dashed rounded-3xl">
                  No books found. Try a different search!
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default BooksPage;
