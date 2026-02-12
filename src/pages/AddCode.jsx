import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddCode = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newCode = [...code];
    newCode[index] = value.substring(value.length - 1);
    setCode(newCode);

    if (value && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otp = code.join("");
    try {
      const response = await axios.post(
        "https://bookstore.eraasoft.pro/api/check-code",
        { code: otp },
      );
      if (response.status === 200) {
        navigate("/reset-password");
      }
    } catch (error) {
      alert("Invalid code, please try again.");
    }
  };

  return (
    <div className="relative w-full bg-white min-h-[70vh]">
      <div className="h-[200px] w-full relative">
        <img
          src="/bgBooks.png"
          className="w-full h-full object-cover"
          alt="Library"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">Verification</h1>
        </div>
      </div>

      <div className="flex justify-center -mt-16 pb-20 px-4">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md z-10 border border-gray-50 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Reset your password?
          </h2>
          <p className="text-gray-400 text-xs mb-8">
            Enter the 4-digit code sent to your email
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex justify-center gap-3">
              {code.map((num, idx) => (
                <input
                  key={idx}
                  ref={inputRefs[idx]}
                  type="text"
                  maxLength="1"
                  value={num}
                  onChange={(e) => handleChange(idx, e.target.value)}
                  className="w-14 h-14 border-2 rounded-xl text-center text-xl font-bold focus:border-pink-600 focus:ring-1 focus:ring-pink-600 outline-none transition-all text-gray-400"
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-[#e91e63] text-white py-3 rounded-lg font-bold hover:bg-[#d81b60] transition-all shadow-md active:scale-95"
            >
              Reset password
            </button>

            <p className="text-gray-400 text-xs">
              Didn't receive a code?
              <span className="text-pink-600 font-bold cursor-pointer ml-1 hover:underline">
                Resend again
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCode;
