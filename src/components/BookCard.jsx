import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart, FaStar, FaShoppingCart } from "react-icons/fa";

const BookCard = ({ book }) => {
  const imageSrc =
    book.bookImage && book.bookImage.length > 0
      ? book.bookImage[0].image
      : "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400";

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-8 hover:shadow-xl transition-all group relative">
      {/* قسم الصورة */}
      <Link
        to={`/book/${book.bookId}`}
        className="w-full md:w-44 h-60 flex-shrink-0 rounded-2xl overflow-hidden shadow-md bg-gray-50"
      >
        <img
          src={imageSrc}
          alt={book.bookName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </Link>

      {/* قسم تفاصيل الكتاب (المنتصف) */}
      <div className="flex flex-col justify-between flex-1 py-2">
        <div>
          <Link to={`/book/${book.bookId}`}>
            <h3 className="font-extrabold text-2xl text-gray-800 mb-2">
              {book.bookName}
            </h3>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
            {book.description || "No description available for this book."}
          </p>

          {/* التقييم بالنجوم */}
          <div className="flex items-center gap-1 mb-4 text-yellow-400">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} size={16} />
            ))}
            <FaStar className="text-gray-200" size={16} />
            <span className="text-gray-400 text-xs ml-2 font-medium">
              ({book.countReview || 0} Reviews)
            </span>
          </div>

          <p className="text-gray-700 font-bold italic">
            {book.author} ,{" "}
            <span className=" text-gray-400 font-normal">
              {book.publicationYear || "N/A"}
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-end gap-4 border-l pl-8 border-gray-50 min-w-[180px]">
        <div className="flex flex-col items-end">
          <span className="text-pink-600 font-black text-4xl">
            ${book.final_price?.toFixed(2) || book.price}
          </span>
          {book.discount > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-gray-400 line-through text-sm">
                ${book.price}
              </span>
              <span className="text-green-500 text-xs font-bold">
                -{book.discount}%
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 mt-2">
          <button className="flex items-center gap-2 bg-pink-600 text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-pink-100 hover:bg-pink-700 hover:-translate-y-1 transition-all active:scale-95">
            <span>Add</span>
            <FaShoppingCart size={18} />
          </button>

          <button className="p-3 rounded-xl border border-gray-100 text-gray-400 hover:text-pink-500 hover:bg-pink-50 transition-all shadow-sm">
            <FaRegHeart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
