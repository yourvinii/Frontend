import React from "react";
import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
        "http://localhost:8000/api/auth/login",
        formData,
      );

      console.log(response.data);

      const token = response.data.token;
      localStorage.setItem("token", token);

      // get logged-in user
      const userResponse = await axios.get(
        "http://localhost:8000/api/auth/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log("Logged-in User : ", userResponse.data);
      navigate("/dashboard");
    } catch (error) {
      console(error.response?.data || error.message);
    }

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <div>
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
        </div> */}
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
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
