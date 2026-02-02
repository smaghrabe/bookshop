import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isLoggedIn: false,

      login: (userData, token) =>
        set({
          user: userData,
          token: token,
          isLoggedIn: true,
        }),

      logout: () => {
        localStorage.removeItem("token");
        set({
          user: null,
          token: null,
          isLoggedIn: false,
        });
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useAuthStore;
