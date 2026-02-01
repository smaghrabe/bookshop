import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"; // ضفنا Link هنا

const RegistrationPage = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm your password"),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post(
        "https://bookstore.eraasoft.pro/api/register",
        values,
      );
      if (response.status === 200 || response.status === 201) {
        alert("Account Created Successfully!");
        navigate("/login");
      }
    } catch (error) {
      setErrors({
        email: error.response?.data?.message || "Registration failed",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Background Header */}
      <div className="h-[300px] w-full relative">
        <img
          src="/bgBooks.png"
          className="w-full h-full object-cover"
          alt="Library"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">Join Our Community</h1>
        </div>
      </div>

      {/* Form Container */}
      <div className="flex justify-center -mt-20 pb-20 px-4">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl w-full max-w-2xl z-10 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Register</h2>

          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              email: "",
              password: "",
              password_confirmation: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <Field
                      name="first_name"
                      type="text"
                      className="w-full p-3 border rounded-lg outline-none focus:border-pink-500 text-gray-700"
                    />
                    <ErrorMessage
                      name="first_name"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <Field
                      name="last_name"
                      type="text"
                      className="w-full p-3 border rounded-lg outline-none focus:border-pink-500 text-gray-700"
                    />
                    <ErrorMessage
                      name="last_name"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className="w-full p-3 border rounded-lg outline-none focus:border-pink-500 text-gray-700"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <Field
                      name="password"
                      type="password"
                      className="w-full p-3 border rounded-lg outline-none focus:border-pink-500 text-gray-700"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password
                    </label>
                    <Field
                      name="password_confirmation"
                      type="password"
                      className="w-full p-3 border rounded-lg outline-none focus:border-pink-500 text-gray-700"
                    />
                    <ErrorMessage
                      name="password_confirmation"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-pink-600 text-white py-4 rounded-lg font-bold hover:bg-pink-700 transition-all disabled:bg-gray-400"
                >
                  {isSubmitting ? "Processing..." : "Create Account"}
                </button>

                <p className="text-center text-sm text-gray-500">
                  Already have an account?
                  <Link
                    to="/login"
                    className="text-pink-600 font-bold ml-1 hover:underline"
                  >
                    Log In
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

export default RegistrationPage;
