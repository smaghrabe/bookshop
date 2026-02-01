import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Wrong email format")
      .required("Email is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "https://bookstore.eraasoft.pro/api/forgot-password",
        values,
      );
      if (response.status === 200) {
        alert("Reset link sent to your email!");
        navigate("/login");
      }
    } catch (error) {
      alert("Error: User not found or connection issue.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative w-full bg-white min-h-[70vh]">
      {/* Background Header Section كما في الفيجما */}
      <div className="h-[200px] w-full relative">
        <img
          src="/bgBooks.png"
          className="w-full h-full object-cover"
          alt="Library"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">Reset Password</h1>
        </div>
      </div>

      <div className="flex justify-center -mt-16 pb-20 px-4">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md z-10 border border-gray-50 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Forgot Password?
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>

          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div className="text-left">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none text-gray-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#e91e63] text-white py-3 rounded-lg font-bold hover:bg-[#d81b60] transition-all shadow-md active:scale-95"
                >
                  {isSubmitting ? "Sending..." : "Send Reset Link"}
                </button>

                <div className="mt-4">
                  <Link
                    to="/login"
                    className="text-pink-600 font-bold text-sm hover:underline"
                  >
                    Back to Login
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
