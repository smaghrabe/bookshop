import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import HomePage from "./component/HomePage";
import Header from "./component/Header";
import LoginPage from "./component/LoginPage.jsx";
import RegistrationPage from "./component/RegistrationPage.jsx";

function App() {
  return (
    <div className="w-full bg-white min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;
