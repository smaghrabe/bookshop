import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const navigate = useNavigate();

  
  const validationSchema = Yup.object({
    first_name: Yup.string().required("First name req"),
    last_name: Yup.string().required("Last name req"),
    email: Yup.string().email("Wrong email").required("Email req"),
    password: Yup.string()
      .min(8, "Password must be 8") 
      .required("Password req"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Wrong password")
      .required("Password confirm"),
  });

 
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post(
        "https://bookstore.eraasoft.pro/api/register",
        values
      );

      if (response.status === 200 || response.status === 201) {
        console.log("Success:", response.data); 
        alert("Create succsfully");
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration Error:", error.response?.data);
      
      setErrors({ email: error.response?.data?.message || "Error wile login" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative w-full bg-white min-h-screen">
      <div className="h-[250px] w-full relative">
        <img src="/bgBooks.png" className="w-full h-full object-cover" alt="Library" />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      
      <div className="flex justify-center -mt-24 pb-20 px-4">
        <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-2xl z-10 border border-gray-50">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">Create Account</h2>

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
              <Form className="space-y-5">
                
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
                    <Field name="first_name" type="text" placeholder="John" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none text-gray-500" />
                    <ErrorMessage name="first_name" component="div" className="text-red-500 text-xs mt-1" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
                    <Field name="last_name" type="text" placeholder="Doe" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none text-gray-500" />
                    <ErrorMessage name="last_name" component="div" className="text-red-500 text-xs mt-1" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                  <Field name="email" type="email" placeholder="example@gmail.com" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none text-gray-500" />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
                    <Field name="password" type="password" placeholder="Min 8 characters" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none text-gray-500" />
                    <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Confirm Password</label>
                    <Field name="password_confirmation" type="password" placeholder="Confirm" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none text-gray-500" />
                    <ErrorMessage name="password_confirmation" component="div" className="text-red-500 text-xs mt-1" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#e91e63] text-white py-4 rounded-lg font-bold hover:bg-[#d81b60] transition-all shadow-lg active:scale-95 disabled:bg-gray-400"
                >
                  {isSubmitting ? "Registering..." : "Sign Up"}
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  Already have an account? 
                  <span onClick={() => navigate("/login")} className="text-pink-600 font-bold cursor-pointer ml-1 hover:underline">Log In</span>
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



