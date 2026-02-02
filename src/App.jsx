import { Route, Routes } from "react-router-dom";
import Footer from "./pages/Footer";
import HomePage from "./pages/HomePage";
import Header from "./pages/Header";
import LoginPage from "./pages/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ForgotPassword from "./pages/ForgetPassword.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import AddCode from "./pages/AddCode.jsx";
import BooksPage from "./pages/BooksPage.jsx";

function App() {
  return (
    <div className="w-full bg-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/add-code" element={<AddCode />} />
          <Route path="/books" element={<BooksPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;
