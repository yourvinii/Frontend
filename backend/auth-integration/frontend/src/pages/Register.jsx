import React from "react";
import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleFormData = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/register",
        formData,
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
    // console.log(formData);

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            className="border "
            type="text"
            id="name"
            placeholder="Enter Name"
            name="name"
            value={formData.name}
            onChange={handleFormData}
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            className="border "
            placeholder="enter email"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleFormData}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            className="border "
            placeholder="enter password"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleFormData}
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
