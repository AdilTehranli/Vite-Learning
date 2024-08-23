import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [values, setValues] = useState({
    id: id,
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + id)
      .then((res) => {
        setValues({ ...values, name: res.data.name, email: res.data.email, phone: res.data.phone });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("https://jsonplaceholder.typicode.com/users/" + id, values)
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h1 className="text-center">Update</h1>
        <form onSubmit={handleSubmit} className="d-flex flex-column">
          <label className="mb-2">Name:</label>
          <input
            value={values.name}
            onChange={handleChange}
            type="text"
            name="name"
            className="form-control mb-2"
            placeholder="Enter your name"
          />
          <label className="mb-2">Email:</label>
          <input
            value={values.email}
            onChange={handleChange}
            type="email"
            name="email"
            className="form-control mb-2"
            placeholder="Enter your email"
          />
          <label className="mb-2">Phone:</label>
          <input
            value={values.phone}
            onChange={handleChange}
            type="text"
            name="phone"
            className="form-control mb-2"
            placeholder="Enter your phone"
          />
          <button type="submit" className="btn btn-primary mb-2">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;