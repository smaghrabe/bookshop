import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email("wrong email").required("email requrid"),
    password: Yup.string().required("wrong password"),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post(
        "https://bookstore.eraasoft.pro/api/login", 
        values,
      );

      if (response.status === 200) {
        console.log("Login Success:", response.data);
        
        localStorage.setItem("token", response.data.token);
        navigate("/home");
      }
    } catch (error) {
      setErrors({ email: " email or password wrong " });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative w-full bg-white">
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
              <Form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none text-gray-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none text-gray-500"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#e91e63] text-white py-3 rounded-lg font-bold hover:bg-[#d81b60] transition-all"
                >
                  {isSubmitting ? "Checking..." : "Log in"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
