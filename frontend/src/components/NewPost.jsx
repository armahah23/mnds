import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";
import { LOCAL_HOST_URL } from "../../config/Config.js";


function NewPost() {
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth();

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    directedBy: Yup.string().required("Director name is required"),
    releasedYear: Yup.number().required("Release year is required"),
    cast: Yup.string().required("Cast is required"),
    type: Yup.string().required("Type is required"),
  });

  const handleImageChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    setFieldValue("image", file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    setError(null);

    try {
      const postData = {
        ...values,
        image: preview,
        publisherId: user.id,
        createdAt: new Date().toISOString(),
        id: Date.now().toString(),
      };

      await axios.post(`${LOCAL_HOST_URL}/posts`, postData);

      resetForm();
      setPreview(null);
      Swal.fire({
        title: "Post Created Successfully!",
        icon: "success",
        draggable: true,
      });
      navigate("/publisher");
    } catch (err) {
      setError("Failed to create post. Please try again.");
      console.error("Error creating post:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 bg-gray-50 min-h-screen">
      <div className="relative">
        <button
          onClick={() => navigate("/publisher")}
          className="absolute right-0 top-0 text-gray-600 hover:text-gray-900"
        >
          <IoMdClose size={24} />
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8 text-gray-800">
          Create New Post
        </h2>

        <Formik
          initialValues={{
            title: "",
            description: "",
            directedBy: "",
            releasedYear: "",
            cast: "",
            type: "",
            image: null,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="w-full md:w-1/2 space-y-4">
                <div>
                  <Field
                    name="title"
                    type="text"
                    placeholder="Title"
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <Field
                    name="description"
                    as="textarea"
                    rows="4"
                    placeholder="Description"
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <Field
                    name="directedBy"
                    type="text"
                    placeholder="Directed By"
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  />
                  <ErrorMessage
                    name="directedBy"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <Field
                    name="releasedYear"
                    type="number"
                    placeholder="Released Year"
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  />
                  <ErrorMessage
                    name="releasedYear"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <Field
                    name="cast"
                    type="text"
                    placeholder="Cast"
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  />
                  <ErrorMessage
                    name="cast"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <Field
                    name="type"
                    as="select"
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Select Type</option>
                    <option value="movie">Movie</option>
                    <option value="webseries">Web Series</option>
                  </Field>
                  <ErrorMessage
                    name="type"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <input
                    type="file"
                    onChange={(e) => handleImageChange(e, setFieldValue)}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    accept="image/*"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Publish
                </button>
              </div>

              <div className="w-full md:w-1/2 flex items-center justify-center mt-4 md:mt-0">
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full max-h-[300px] md:max-h-[500px] rounded-lg shadow-lg object-contain"
                  />
                ) : (
                  <div className="w-full h-[300px] md:h-[500px] bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Image Preview</p>
                  </div>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default NewPost;
