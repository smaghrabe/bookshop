import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import HomePage from "./component/HomePage";
import Header from "./component/Header";
import LoginPage from "./component/LoginPage.jsx";
import RegistrationPage from "./component/RegistrationPage.jsx";
import AboutPage from "./component/AboutPage.jsx";
import ForgotPassword from "./component/ForgetPassword.jsx";
import ResetPassword from "./component/ResetPassword.jsx";
import AddCode from "./component/AddCode.jsx";
import BooksPage from "./component/BooksPage.jsx";

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
