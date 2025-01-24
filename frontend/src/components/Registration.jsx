import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import registeration from "../assets/images/registration.jpg";
import Swal from "sweetalert2";
import { useAuth } from "../context/AuthContext";

const Registration = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const initialValues = {
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const userData = {
        name: values.fullName,
        email: values.email,
        password: values.password,
        phoneNumber: values.phoneNumber,
      };

      const success = await register(userData);
      
      if (success) {
        Swal.fire({
          title: "Registration Success!",
          icon: "success",
          draggable: true,
        });
        navigate("/login");
      } else {
        Swal.fire({
          title: "Registration Failed!",
          text: "Email might already be registered",
          icon: "error",
          draggable: true,
        });
      }
    } catch (error) {
      console.error("Error registering user:", error);
      Swal.fire({
        title: "Registration Error!",
        text: "Something went wrong",
        icon: "error",
        draggable: true,
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-1/2 flex items-center justify-center bg-gray-200">
        <img
          src={registeration}
          alt="Registration"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-1/2 flex items-center justify-center p-4">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="w-full max-w-sm">
            <h1 className="text-xl font-bold mb-4 text-blue-700">Register</h1>
            <div className="mb-2">
              <label htmlFor="fullName" className="block text-gray-700 text-sm">
                Full Name
              </label>
              <Field
                type="text"
                id="fullName"
                name="fullName"
                className="mt-1 block w-full p-2 border border-gray-300 rounded text-sm"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="phoneNumber"
                className="block text-gray-700 text-sm"
              >
                Phone Number
              </label>
              <Field
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="mt-1 block w-full p-2 border border-gray-300 rounded text-sm"
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="block text-gray-700 text-sm">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded text-sm"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="block text-gray-700 text-sm">
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded text-sm"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 text-sm"
              >
                Confirm Password
              </label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="mt-1 block w-full p-2 border border-gray-300 rounded text-sm"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <button type="submit" className="btn w-full text-sm">
              Register
            </button>
            <div className="mt-2 text-center">
              <p className="text-xs text-gray-700">
                Already registered?{" "}
                <a href="/login" className="text-blue-500">
                  Login here
                </a>
              </p>
              <p className="text-md text-gray-700">Or login with</p>
              <div className="flex justify-center items-center gap-2">
                <button className="btn w-full mt-2 bg-red-500 text-sm flex items-center justify-center gap-4">
                  <FcGoogle className="text-xl" />
                  Google
                </button>
                <button className="btn w-full mt-2 bg-blue-700 text-sm flex items-center justify-center gap-4">
                  <FaSquareFacebook className="text-xl" />
                  Facebook
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Registration;
