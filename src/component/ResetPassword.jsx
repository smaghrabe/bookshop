import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();

  // التحقق من صحة كلمة المرور الجديدة
  const validationSchema = Yup.object({
    password: Yup.string().min(8, "Must be 8 characters").required("Required"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // هنا بنبعت كلمة المرور الجديدة لـ API بتاعك
      const response = await axios.post(
        "https://bookstore.eraasoft.pro/api/reset-password",
        values,
      );
      if (response.status === 200) {
        alert("Password updated successfully!");
        navigate("/login");
      }
    } catch (error) {
      alert("Error resetting password. Link might be expired.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative w-full bg-white min-h-[70vh]">
      {/* هيدر الصفحة بنفس روح الفيجما */}
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
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md z-10 border border-gray-50">
          <h2 className="text-center text-xl font-bold text-gray-800 mb-2">
            Create New Password
          </h2>
          <p className="text-center text-gray-500 text-sm mb-8">
            Please enter your new password below.
          </p>

          <Formik
            initialValues={{ password: "", password_confirmation: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    New Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Min 8 characters"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none text-gray-400"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Confirm New Password
                  </label>
                  <Field
                    name="password_confirmation"
                    type="password"
                    placeholder="Confirm password"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none text-gray-400"
                  />
                  <ErrorMessage
                    name="password_confirmation"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#e91e63] text-white py-3 rounded-lg font-bold hover:bg-[#d81b60] transition-all shadow-md active:scale-95"
                >
                  {isSubmitting ? "Updating..." : "Reset Password"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
