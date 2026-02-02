import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";
import useAuthStore from "../store";

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const { token } = useAuthStore();

  const categories = [
    "Business",
    "Self Help",
    "History",
    "Romance",
    "Fantasy",
    "Art",
    "Kids",
    "Cooking",
  ];

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://bookstore.eraasoft.pro/api/books",
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        const data = response.data.data || [];
        setBooks(data);
        setFilteredBooks(data);
      } catch (error) {
        console.error("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    let result = [...books];
    if (searchTerm) {
      result = result.filter(
        (b) =>
          b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          b.author?.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }
    if (sortBy === "price-low") result.sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") result.sort((a, b) => b.price - a.price);
    setFilteredBooks(result);
  }, [searchTerm, sortBy, books]);

  if (loading) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Image Section*/}
      <div className="w-full h-30 bg-gray-200 relative mb-8 overflow-hidden">
        <img
          src="/bgBooks.png"
          className="w-full h-full object-cover opacity-60"
          alt="Banner"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* 2. Sidebar (Filter) */}
          <aside className="w-full md:w-1/4">
            <div className="sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xl">≡</span> {/* أيقونة الفلتر */}
                <h3 className="font-bold text-lg">Filter</h3>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-pink-600 mb-4 text-xs uppercase">
                  Categories
                </h4>
                <ul className="space-y-3 text-gray-600 text-sm">
                  {["All Categories", "Business", "History"].map((c) => (
                    <li
                      key={c}
                      className="flex items-center gap-2 cursor-pointer hover:text-pink-500 transition-colors"
                    >
                      <input
                        type="checkbox"
                        className="accent-pink-500 w-4 h-4 rounded"
                      />
                      {c}
                    </li>
                  ))}
                </ul>
                <button className="text-pink-600 text-xs mt-3 font-bold hover:underline">
                  Load More
                </button>
              </div>

              {/* Publisher & Year */}
              <div className="border-t py-4 flex justify-between items-center font-semibold text-gray-700 cursor-pointer border-b mb-4">
                Publisher <span className="text-xs">▼</span>
              </div>
              <div className="border-b py-4 flex justify-between items-center font-semibold text-gray-700 cursor-pointer mb-4">
                Year <span className="text-xs">▼</span>
              </div>
            </div>
          </aside>

          {/* 3. Main Content */}
          <main className="flex-1">
            {/* Search & Sort Row */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
              <div className="relative w-full md:w-1/2">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-200 outline-none focus:ring-1 focus:ring-pink-500 bg-gray-50/50"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  🔍
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="font-bold text-gray-800 outline-none cursor-pointer bg-transparent"
                >
                  <option value="default">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Category Pills (الأزرار اللي تحت السيرش) */}
            <div className="flex gap-2 overflow-x-auto pb-6 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSearchTerm(cat)}
                  className={`whitespace-nowrap px-5 py-1.5 rounded-full text-xs font-medium border transition-all ${
                    searchTerm === cat
                      ? "bg-pink-600 text-white border-pink-600"
                      : "bg-white text-gray-500 border-gray-200 hover:border-pink-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Books List */}
            <div className="space-y-6">
              {filteredBooks.length > 0 ? (
                filteredBooks.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))
              ) : (
                <div className="text-center py-20 text-gray-400 border-2 border-dashed rounded-2xl">
                  No books found.
                </div>
              )}
            </div>

            {/* Pagination Placeholder */}
            <div className="flex justify-center gap-2 mt-12 pb-10">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  className={`w-8 h-8 rounded-full text-xs ${n === 1 ? "bg-pink-600 text-white" : "text-gray-400 hover:bg-gray-100"}`}
                >
                  {n}
                </button>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
