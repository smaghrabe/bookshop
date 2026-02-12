// import React, { useState } from "react";
// import { FaTrashAlt, FaShoppingCart } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";

// const WishlistPage = () => {
//   const navigate = useNavigate();
//   const [wishlistItems, setWishlistItems] = useState([
//     {
//       id: 1,
//       name: "Rich Dad Poor Dad",
//       author: "Robert T. Kiyosaki",
//       price: 480.0,
//       image:
//         "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg",
//     },
//     {
//       id: 2,
//       name: "The Psychology of Money",
//       author: "Morgan Housel",
//       price: 350.0,
//       image:
//         "https://m.media-amazon.com/images/I/71TR7C7fTIL._AC_UF1000,1000_QL80_.jpg",
//     },
//   ]);

//   const removeItem = (id) => {
//     setWishlistItems(wishlistItems.filter((item) => item.id !== id));
//   };

//   const totalWishlistPrice = wishlistItems.reduce(
//     (acc, item) => acc + item.price,
//     0,
//   );

//   return (
//     <div className="bg-white min-h-screen py-12 px-6 md:px-24">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex justify-between items-center mb-12">
//           <h1 className="text-4xl font-black text-[#1A202C]">My Wishlist</h1>
//           <span className="bg-pink-100 text-pink-600 px-4 py-1 rounded-full font-bold text-sm">
//             {wishlistItems.length} Items
//           </span>
//         </div>

//         {/* Product table */}
//         <div className="w-full mb-10">
//           <div className="hidden md:grid grid-cols-6 pb-6 border-b border-gray-100 text-gray-400 font-bold text-xs uppercase tracking-widest">
//             <div className="col-span-3">Item</div>
//             <div className="text-center">Status</div>
//             <div className="text-center">Price</div>
//             <div className="text-right">Action</div>
//           </div>

//           <div className="divide-y divide-gray-50">
//             {wishlistItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="grid grid-cols-1 md:grid-cols-6 py-8 items-center gap-4 group"
//               >
//                 {/* Product Info */}
//                 <div className="col-span-3 flex gap-6 items-center">
//                   <div className="w-20 h-28 rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-transform group-hover:scale-105">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-bold text-gray-800 leading-tight">
//                       {item.name}
//                     </h3>
//                     <p className="text-gray-400 text-xs mt-1">
//                       By {item.author}
//                     </p>
//                     <button className="mt-3 text-pink-600 text-[10px] font-bold flex items-center gap-1 hover:underline">
//                       <FaShoppingCart size={10} /> Add to Cart
//                     </button>
//                   </div>
//                 </div>

//                 {/* Status */}
//                 <div className="text-center">
//                   <span className="text-green-500 font-bold text-xs bg-green-50 px-3 py-1 rounded-full border border-green-100">
//                     In Stock
//                   </span>
//                 </div>

//                 {/* Price */}
//                 <div className="text-center text-xl font-black text-gray-900">
//                   ${item.price.toFixed(2)}
//                 </div>

//                 {/* Action - Trash Icon */}
//                 <div className="text-right">
//                   <button
//                     onClick={() => removeItem(item.id)}
//                     className="text-gray-300 hover:text-red-500 transition-colors p-3 bg-gray-50 rounded-xl"
//                   >
//                     <FaTrashAlt size={16} />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Checkout Section  */}
//         {wishlistItems.length > 0 ? (
//           <div className="w-full border-2 border-dashed border-gray-200 rounded-[35px] p-8 md:p-10 bg-gray-50/40">
//             <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//               <div className="text-left">
//                 <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-1">
//                   Total Wishlist Value
//                 </p>
//                 <h2 className="text-4xl font-black text-gray-800">
//                   ${totalWishlistPrice.toFixed(2)}
//                 </h2>
//               </div>

//               <div className="flex gap-4">
//                 <Link
//                   to="/books"
//                   className="px-8 py-4 rounded-2xl font-bold text-gray-500 hover:bg-gray-100 transition-all"
//                 >
//                   Continue Shopping
//                 </Link>
//                 <button
//                   onClick={() => navigate("/checkout")}
//                   className="bg-pink-600 text-white px-12 py-4 rounded-2xl font-black text-lg hover:bg-pink-700 shadow-xl shadow-pink-100 transition-all active:scale-95"
//                 >
//                   Go to Checkout
//                 </button>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="py-20 text-center border-2 border-dashed border-gray-100 rounded-[35px]">
//             <p className="text-gray-400 text-xl mb-6">
//               Your wishlist is empty!
//             </p>
//             <Link
//               to="/books"
//               className="bg-pink-600 text-white px-10 py-3 rounded-full font-bold"
//             >
//               Explore Books
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default WishlistPage;

import React, { useState } from "react";
import { FaTrashAlt, FaShoppingCart } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      price: 480.0,
      image:
        "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 2,
      name: "The Psychology of Money",
      author: "Morgan Housel",
      price: 350.0,
      image:
        "https://m.media-amazon.com/images/I/71TR7C7fTIL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 3,
      name: "The Psychology of Money",
      author: "Morgan Housel",
      price: 250.0,
      image:
        "https://m.media-amazon.com/images/I/71TR7C7fTIL._AC_UF1000,1000_QL80_.jpg",
    },
  ]);

  const removeItem = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-white min-h-screen py-12 px-6 md:px-24 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-end mb-16">
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-5xl font-black text-gray-900 tracking-tighter"
          >
            Wishlist
          </motion.h1>
          <span className="text-gray-300 font-bold uppercase tracking-widest text-xs">
            {wishlistItems.length} Saved Items
          </span>
        </header>

        <motion.div layout className="grid grid-cols-1 gap-6">
          <AnimatePresence>
            {wishlistItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, x: -100 }}
                className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-[35px] border border-gray-50 hover:shadow-xl hover:shadow-gray-100 transition-all group"
              >
                <div className="w-32 h-44 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1 space-y-2 text-center md:text-left">
                  <h3 className="text-2xl font-black text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 font-medium">By {item.author}</p>
                  <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      className="bg-pink-600 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2"
                    >
                      <FaShoppingCart size={14} /> Add to Cart
                    </motion.button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-3 text-gray-300 hover:text-red-500 transition-colors"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>

                <div className="text-3xl font-black text-gray-900 pr-4">
                  ${item.price.toFixed(2)}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default WishlistPage;
