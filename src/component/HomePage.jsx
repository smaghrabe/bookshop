import React from 'react';
import { CiDeliveryTruck, CiHeadphones } from "react-icons/ci";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaArrowsRotate } from "react-icons/fa6"; 
import { FaSearch } from 'react-icons/fa';

// 1. المكونات الفرعية (Sub-components)
const FeatureItem = ({ Icon, title, desc }) => (
  <div className="flex flex-col items-start text-left">
    <div className="text-gray-400 text-4xl mb-3">
      <Icon /> 
    </div>
    <h3 className="font-bold text-gray-800 text-sm mb-2">{title}</h3>
    <p className="text-gray-500 text-[10px] leading-relaxed max-w-[200px]">{desc}</p>
  </div>
);

const BookCard = ({ img, title, author }) => (
  <div className="bg-white rounded-lg overflow-hidden text-gray-800 hover:scale-105 transition-transform cursor-pointer shadow-lg border border-gray-100">
    <img src={img} className="w-full h-65 object-cover" alt={title} />
  </div>
);

// مكون الـ Recommended الجديد (image_992e19.jpg)
const RecommendedCard = ({ img, title, author, price, desc }) => (
  <div className="bg-white border border-gray-100 rounded-lg p-4 flex gap-4 shadow-sm hover:shadow-md transition-shadow">
    <img src={img} className="w-24 h-32 object-cover rounded" alt={title} />
    <div className="flex flex-col justify-between flex-1 text-left">
      <div>
        <h4 className="font-bold text-sm text-gray-800">{title}</h4>
        <p className="text-[10px] text-gray-400 mb-1">Author: {author}</p>
        <p className="text-[9px] text-gray-500 leading-tight mb-2 line-clamp-3">
          {desc}
        </p>
        <div className="text-yellow-400 text-xs">★★★★☆</div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className="font-bold text-pink-600">${price}</span>
        <button className="bg-pink-600 text-white text-[10px] px-3 py-1 rounded-full hover:bg-pink-700">Add To Cart</button>
      </div>
    </div>
  </div>
);

// مكون الـ Flash Sale الجديد (image_992e19.jpg)
const FlashSaleCard = ({ img, title, price, oldPrice }) => (
  <div className="bg-[#3B2F4A] text-white rounded-lg p-3 relative group">
    <div className="absolute top-2 left-2 bg-pink-600 text-[8px] px-2 py-0.5 rounded z-10">SALE</div>
    <div className="h-40 overflow-hidden mb-3">
        <img src={img} className="w-full h-full object-contain group-hover:scale-110 transition-transform" alt={title} />
    </div>
    <h4 className="text-xs font-bold truncate text-left">{title}</h4>
    <div className="flex items-center gap-2 mt-1">
      <span className="text-pink-400 font-bold">${price}</span>
      <span className="text-gray-400 text-[10px] line-through">${oldPrice}</span>
    </div>
  </div>
);

const HomePage = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <img 
          src="/bgBooks.png" 
          className="w-full h-full object-cover" 
          alt="Library Background" 
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4 ">
          <div className="w-full max-w-4xl flex flex-col items-center">
             <div className="relative w-full max-w-3xl flex items-center">
               <input
                 type="text"
                 placeholder="Search..."
                 className="w-full bg-white py-4 px-6 pr-14 rounded-md text-black text-sm outline-none shadow-2xl"
               />
               <button className="absolute right-0 bg-pink-600 text-white h-full px-5 rounded-r-md hover:bg-pink-700 transition-all">
                 <FaSearch size={18} />
               </button>
             </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto py-16 px-10 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FeatureItem Icon={CiDeliveryTruck} title="Fast & Reliable Shipping" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit..." />
          <FeatureItem Icon={RiSecurePaymentLine} title="Secure Payment" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit..." />
          <FeatureItem Icon={FaArrowsRotate} title="Easy Returns" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit..." />
          <FeatureItem Icon={CiHeadphones} title="24/7 Support" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit..." />
        </div>
      </div>

      {/* Best Seller Section */}
      <div className="bg-[#3B2F4A] py-16 text-white">
        <div className="container mx-auto px-10 md:px-24 text-center">
          <h2 className="text-2xl font-bold mb-2">Best Seller</h2>
          <p className="text-gray-300 text-xs mb-10 max-w-md mx-auto">Check out our most popular books of the week from gripping thrillers to inspiring biographies.</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            <BookCard img="/book1.png" />
            <BookCard img="/book2.png" />
            <BookCard img="/book3.png" />
            <BookCard img="/book4.png" />
            <BookCard img="/book5.png" />
          </div>
          <div className="mt-10">
            <button className="bg-pink-600 px-10 py-2 rounded-md font-bold text-sm hover:bg-pink-700 transition-all shadow-lg cursor-pointer">
                Shop now
            </button>
          </div>
        </div>
      </div>

      {/* Recommended For You Section (image_992e19.jpg) */}
      <div className="container mx-auto py-16 px-10 md:px-24">
        <h2 className="text-xl text-gray-700 font-bold mb-8 text-left">Recommended For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RecommendedCard img="/book6.png" title="Rich Dad Poor Dad" author="Robert T. Kiyosaki" price="30.00" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, Aliquam in justo varius," />
          <RecommendedCard img="/book4.png" title="The Design of Books" author="Debbie Berne" price="40.00" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, Aliquam in justo varius," />
        </div>
      </div>

      {/* Flash Sale Section */}
      <div className="container mx-auto pb-20 px-10 md:px-24 ">
        <div className="flex justify-between items-center mb-8">
          <div className="flex flex-col w-[350px] ">
          <h2 className="text-xl font-bold text-gray-700 mb-2">Flash Sale</h2>
          <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.

          </p>
          </div>
          <div className="bg-pink-100 text-pink-600 font-bold px-3 py-1 rounded-full text-sm">30:00:00</div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 p-4">
          <FlashSaleCard img="/book2.png" title="The Power of Habit" price="30.00" oldPrice="45.00" />
          <FlashSaleCard img="/book4.png" title="Design of Everyday Things" price="30.00" oldPrice="45.00" />
        </div>
      </div>

    </div>
  );
};

export default HomePage;



// import React from 'react';
// import { CiDeliveryTruck, CiHeadphones } from "react-icons/ci";
// import { RiSecurePaymentLine } from "react-icons/ri";
// import { FaArrowsRotate } from "react-icons/fa6"; // دي موجودة في fa6 فعلاً
// import { FaSearch } from 'react-icons/fa';

// // 1. تعريف المكون مرة واحدة فقط وبشكل صحيح (image_cc07f5.png fix)
// const FeatureItem = ({ Icon, title, desc }) => (
//   <div className="flex flex-col items-start text-left">
//     <div className="text-gray-400 text-4xl mb-3">
//       <Icon /> 
//     </div>
//     <h3 className="font-bold text-gray-800 text-sm mb-2">{title}</h3>
//     <p className="text-gray-500 text-[10px] leading-relaxed max-w-[200px]">{desc}</p>
//   </div>
// );

// const BookCard = ({ img, title, author }) => (
//   <div className="bg-white rounded-lg  overflow-hidden text-gray-800 hover:scale-105 transition-transform cursor-pointer shadow-lg border border-gray-100">
//     <img src={img} className="w-full h-65 object-cover " alt={title} />
    
//   </div>
// );

// const HomePage = () => {
//   return (
//     <div className="w-full bg-white">
//       <div className="relative h-[400px] w-full">
//         <img 
//           src="/bgBooks.png" 
//           className="w-full h-full object-cover" 
//           alt="Library Background" 
//         />
//         <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4 ">
//           <div className="w-full max-w-4xl flex flex-col items-center">
             
            
//              <div className="relative w-full max-w-3xl flex items-center">
//                <input
//                  type="text"
//                  placeholder="Search..."
//                  className="w-full bg-white py-4 px-6 pr-14 rounded-md text-black text-sm outline-none shadow-2xl"
//                />
//                <button className="absolute right-0 bg-pink-600 text-white h-full px-5 rounded-r-md hover:bg-pink-700 transition-all">
//                  <FaSearch size={18} />
//                </button>
//              </div>
//           </div>
//         </div>
//       </div>

    
//       <div className="container mx-auto py-16 px-10 md:px-24">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <FeatureItem 
//             Icon={CiDeliveryTruck} 
//             title="Fast & Reliable Shipping" 
//             desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo." 
//           />
//           <FeatureItem 
//             Icon={RiSecurePaymentLine} 
//             title="Secure Payment" 
//             desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo." 
//           />
//           <FeatureItem 
//             Icon={FaArrowsRotate} 
//             title="Easy Returns" 
//             desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo." 
//           />
//           <FeatureItem 
//             Icon={CiHeadphones} 
//             title="24/7 Support" 
//             desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo." 
//           />
//         </div>
//       </div>

      
//       <div className="bg-[#3B2F4A] py-16 text-white">
//         <div className="container mx-auto px-10 md:px-24 text-center">
//           <h2 className="text-2xl font-bold mb-2">Best Seller</h2>
//           <p className="text-gray-300 text-xs mb-10 max-w-md mx-auto">Check out our most popular books of the week from gripping thrillers to inspiring biographies.</p>
          
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
//             <BookCard img="/book1.png" />
//             <BookCard img="/book2.png" />
//             <BookCard img="/book3.png" />
//             <BookCard img="/book4.png" />
//             <BookCard img="/book5.png" />
//           </div>
          
//           <div className="mt-10">
//             <button className="bg-pink-600 px-10 py-2 rounded-md font-bold text-sm hover:bg-pink-700 transition-all shadow-lg cursor-pointer">
//                 Shop now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;




