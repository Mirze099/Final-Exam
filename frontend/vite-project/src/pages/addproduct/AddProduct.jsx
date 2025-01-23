import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { Helmet } from "react-helmet";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  img: Yup.string()
    .min(2, "Too Short!")
    .max(500, "Too Long!")
    .required("Required"),
});

export default function AddProduct() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  async function getData() {
    try {
      let res = await axios.get("http://localhost:3000/product");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [setData]);

  function handleAdd(values) {
    axios
      .post(`http://localhost:3000/product`, values)
      .then(() => navigate(-1));
  }

  function handleDel(id) {
    axios.delete(`http://localhost:3000/product/${id}`);
    let filtered = data.filter((item) => item._id !== id);
    setData(filtered);
  }

  return (
    <div className="mains container">
      <Helmet>
        <title>Add Product-Page</title>
      </Helmet>
      <table id="customers">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((data) => (
              <tr key={data._id}>
                <td>
                  <img src={data.img} alt="" className="img" />
                </td>
                <td>{data.name}</td>
                <td>{data.price}$</td>
                <td>
                  <button className="btn" onClick={() => handleDel(data._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Formik
        initialValues={{
          name: "",
          price: "",
          img: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          handleAdd(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <Field name="name" className="inp" placeholder="Name" />
            {errors.name && touched.name ? (
              <Alert severity="error">{errors.name}</Alert>
            ) : null}

            <Field name="price" className="inp" placeholder="Price" />
            {errors.price && touched.price ? (
              <Alert severity="error">{errors.name}</Alert>
            ) : null}

            <Field name="img" className="inp" placeholder="Img" />
            {errors.img && touched.img ? (
              <Alert severity="error">{errors.name}</Alert>
            ) : null}

            <button type="submit" className="btn">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
