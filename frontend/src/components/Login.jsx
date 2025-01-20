import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import loginpage from '../assets/images/loginpage.jpg';

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await axios.get('http://localhost:3000/users', {
        params: {
          email: values.email,
          password: values.password,
        },
      });
      if (response.data.length > 0) {
        localStorage.setItem('user', JSON.stringify(response.data[0]));
        console.log('User logged in successfully:', response.data[0]);
        Swal.fire({
          title: "Login Success!",
          icon: "success",
          draggable: true
        });
        navigate('/');
      } else {
        console.error('Invalid email or password');
        Swal.fire({
          title: "Login Failed!",
          text: "Invalid email or password",
          icon: "error",
          draggable: true
      });
    }
    } catch (error) {
      console.error('Error logging in user:', error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-1/2 flex items-center justify-center p-4">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="w-full max-w-sm">
            <h1 className="text-2xl text-blue-700 font-bold mb-4">Login</h1>
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
            <button type="submit" className="btn w-full text-sm">
              Login
            </button>
            <div className="mt-2 text-center">
              <p className="text-gray-700">
                Don&apos;t have an account?{" "}
                <a href="/register" className="text-blue-500">
                  Register here
                </a>
              </p>
              <p className="text-md text-gray-700">Or login with</p>
              <div className="flex w-full gap-2 items-center justify-between">
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
      <div className="md:w-1/2 flex items-center justify-center bg-gray-200">
        <img
          src={loginpage}
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
