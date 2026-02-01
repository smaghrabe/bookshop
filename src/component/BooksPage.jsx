import React, { useState, useEffect } from "react";
import axios from "axios";

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // 1. سحب التوكن من التخزين المحلي (لازم عشان الـ API يقبل الطلب)
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "https://bookstore.eraasoft.pro/api/books",
          {
            // 2. إرسال التوكن في الـ Headers كما هو مطلوب في Postman
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        // 3. التأكد من الوصول للمصفوفة الصحيحة (data داخل data)
        setBooks(response.data.data || []);
      } catch (error) {
        console.error("Error details:", error.response);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
        <span className="ml-3 font-bold text-pink-600">Loading Books...</span>
      </div>
    );

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Sidebar Filter - كما في الفيجما */}
        <aside className="w-full md:w-1/4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit">
          <h3 className="font-bold text-lg mb-6 border-b pb-2">Filter</h3>
          <div className="space-y-6 text-sm">
            <div>
              <h4 className="font-semibold text-pink-600 mb-3">Categories</h4>
              <ul className="space-y-2 text-gray-600">
                {["Business", "History", "Fiction", "Cookery"].map((cat) => (
                  <li
                    key={cat}
                    className="flex items-center gap-2 cursor-pointer hover:text-pink-500 transition-colors"
                  >
                    <input
                      type="checkbox"
                      className="accent-pink-500 w-4 h-4"
                    />{" "}
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Books List - تصميم الكارت الطولي */}
        <main className="flex-1">
          <div className="space-y-4">
            {books.length > 0 ? (
              books.map((book) => (
                <div
                  key={book.id}
                  className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-all duration-300"
                >
                  <img
                    src={book.image || "/book_rich.png"}
                    alt={book.name}
                    className="w-full sm:w-32 h-44 object-cover rounded-lg shadow-sm"
                  />

                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">
                        {book.name}
                      </h3>
                      <p className="text-gray-500 text-sm italic mb-2">
                        by {book.author || "Unknown Author"}
                      </p>
                      <p className="text-gray-400 text-xs line-clamp-2 mb-3 leading-relaxed">
                        {book.description ||
                          "No description available for this book."}
                      </p>

                      <div className="flex items-center text-yellow-400 text-xs">
                        {"★".repeat(4)}
                        {"☆".repeat(1)}
                        <span className="text-gray-400 ml-2 font-medium">
                          (120 Reviews)
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-6 border-t pt-4">
                      <span className="text-pink-600 font-bold text-2xl">
                        ${book.price}
                      </span>
                      <button className="bg-pink-600 text-white px-8 py-2 rounded-lg text-sm font-bold hover:bg-pink-700 transition-all shadow-lg shadow-pink-100 active:scale-95">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20 text-gray-500 bg-white rounded-2xl shadow-sm">
                No books found at the moment.
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default BooksPage;
