import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import useAuthStore from "../store";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const validationSchema = Yup.object({
    email: Yup.string().email("wrong email").required("email required"),
    password: Yup.string().required("password required"),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post(
        "https://bookstore.eraasoft.pro/api/login",
        values,
      );

      console.log("API Response:", response.data);

      const token = response.data.token || response.data.data?.token;
      const user = response.data.user || response.data.data?.user;

      if (token) {
        login(user, token);

        localStorage.setItem("token", token);

        navigate("/");
      }
    } catch (error) {
      setErrors({ email: "Email or password wrong" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative w-full bg-white min-h-screen">
      <div className="h-[250px] w-full relative">
        <img
          src="/bgBooks.png"
          className="w-full h-full object-cover"
          alt="Library"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="flex justify-center -mt-20 pb-20 px-4">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md z-10 border border-gray-50">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
            Log in
          </h2>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Email
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
                    className="text-red-500 text-[10px] mt-1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none text-gray-500"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-[10px] mt-1"
                  />
                </div>

                <div className="flex justify-between items-center text-xs">
                  <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                    <input type="checkbox" className="accent-pink-600" />
                    Remember me
                  </label>
                  <Link
                    to="/forgot-password"
                    size={24}
                    className="text-pink-600 font-semibold hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#e91e63] text-white py-3 rounded-lg font-bold hover:bg-[#d81b60] transition-all shadow-md active:scale-95 disabled:bg-gray-400 mt-2"
                >
                  {isSubmitting ? "Checking..." : "Log in"}
                </button>

                <p className="text-center text-sm text-gray-500 mt-6">
                  Don't have an account?
                  <Link
                    to="/register"
                    className="text-pink-600 font-bold ml-1 hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
