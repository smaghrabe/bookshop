import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import HomePage from "./component/HomePage";
import Header from "./component/Header";
import LoginPage from "./component/LoginPage.jsx";
import RegistrationPage from "./component/RegistrationPage.jsx";
import AboutPage from "./component/AboutPage.jsx";

function App() {
  return (
    <div className="w-full bg-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;
