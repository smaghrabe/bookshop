const BookCard = ({ book }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border flex flex-col sm:flex-row gap-6 hover:shadow-md transition-all">
      <img
        src={book.image || "/book_rich.png"}
        alt={book.name}
        className="w-full sm:w-32 h-44 object-cover rounded-lg"
      />
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-bold text-lg text-gray-800">{book.name}</h3>
          <p className="text-gray-500 text-sm italic mb-2">
            by {book.author || "Unknown"}
          </p>
          <p className="text-gray-400 text-xs line-clamp-2">
            {book.description || "No description available."}
          </p>
        </div>
        <div className="flex justify-between items-center mt-4 pt-4 border-t">
          <span className="text-pink-600 font-bold text-2xl">
            ${book.price}
          </span>
          <button className="bg-pink-600 text-white px-6 py-2 rounded-lg text-sm font-bold shadow-lg shadow-pink-100 active:scale-95 transition-transform">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
