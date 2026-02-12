import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isLoggedIn: false,
      // البيانات الأساسية للسلة والويش ليست
      cartItems: [],
      cartCount: 0,
      wishlistCount: 0,

      login: (userData, token) =>
        set({
          user: userData,
          token: token,
          isLoggedIn: true,
        }),

      logout: () => {
        set({
          user: null,
          token: null,
          isLoggedIn: false,
          cartItems: [], // تصفير السلة عند الخروج
          cartCount: 0,
          wishlistCount: 0,
        });
      },

      // دالة الإضافة: بتضيف المنتج للمصفوفة وتحدث العداد تلقائياً
      addToCartStore: (product) =>
        set((state) => {
          const isExist = state.cartItems.find(
            (item) => item.id === product.id,
          );
          let newCart;

          if (isExist) {
            // لو الكتاب موجود أصلاً، زود الكمية فقط
            newCart = state.cartItems.map((item) =>
              item.id === product.id
                ? { ...item, quantity: (item.quantity || 1) + 1 }
                : item,
            );
          } else {
            // لو كتاب جديد، ضيفه للمصفوفة بـ quantity = 1
            newCart = [...state.cartItems, { ...product, quantity: 1 }];
          }

          return {
            cartItems: newCart,
            cartCount: newCart.length,
          };
        }),

      // دالة الحذف: بتمسح المنتج وتحدث العداد والأسعار
      removeFromCartStore: (productId) =>
        set((state) => {
          const newCart = state.cartItems.filter(
            (item) => item.id !== productId,
          );
          return {
            cartItems: newCart,
            cartCount: newCart.length,
          };
        }),

      // تحديث الكمية داخل السلة (+ أو -)
      updateQuantity: (id, type) =>
        set((state) => {
          const newCart = state.cartItems.map((item) => {
            if (item.id === id) {
              const newQty =
                type === "inc" ? item.quantity + 1 : item.quantity - 1;
              return { ...item, quantity: newQty > 0 ? newQty : 1 };
            }
            return item;
          });
          return { cartItems: newCart };
        }),

      addToWishlistStore: () =>
        set((state) => ({ wishlistCount: state.wishlistCount + 1 })),

      setCartCount: (count) => set({ cartCount: count }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useAuthStore;

// import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";

// const useAuthStore = create(
//   persist(
//     (set) => ({
//       user: null,
//       token: null,
//       isLoggedIn: false,
//       cartCount: 0,
//       wishListCount: 0,

//       login: (userData, token) =>
//         set({
//           user: userData,
//           token: token,
//           isLoggedIn: true,
//         }),

//       logout: () => {
//         localStorage.removeItem("token");
//         set({
//           user: null,
//           token: null,
//           isLoggedIn: false,
//           cartCount: 0,
//           wishListCount: 0,
//         });
//       },

//       addToCartStore: () =>
//         set((state) => ({ cartCount: state.cartCount + 1 })),

//       addToWishlistStore: () =>
//         set((state) => ({ wishlistCount: state.wishlistCount + 1 })),

//       setCartCount: (count) => set({ cartCount: count }),
//     }),
//     {
//       name: "auth-storage",
//       storage: createJSONStorage(() => localStorage),
//     },
//   ),
// );

// export default useAuthStore;
