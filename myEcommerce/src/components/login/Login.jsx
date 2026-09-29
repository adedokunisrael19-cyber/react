import React, { useState } from "react";
import { useLoginMutation } from "./../../api/dummyDataApi";
import { Link } from "react-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassWord] = useState("");
  const [login, {isLoading}] = useLoginMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await login({ password: password, username }).unwrap();
      localStorage.setItem("token, response.accessToken");
      navigate("/products");
      console.log(response)  
    } catch (error) {
       console.log(error);
    }
  };

  console.log(username);
  console.log(password);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Welcome Back</h1>
        <p className="text-gray-500 text-center mt-2">
          Sign in to your account
        </p>
        <form onSubmit={handleSubmit} className="mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>

            <input
              type="username"
              name="username"
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Enter your email"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="text"
              onChange={(event) => setPassWord(event.target.value)}
              placeholder="Enter your password"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <button
            type="submit" disabled ={isLoading}
           className="mt-6 w-full rounded-md bg-blue-600 py-2 font-medium text-white hover:bg-blue-700"
          >
           {isLoading  ? "loading..." : "login"}
        
          </button>
        </form>
          <p className="mt-6 text-center text-sm text-gray-500">don't have an account? 
             <Link to="/signup"><button className="mt-6  text-center text-sm font-medium text-blue-700 hover mb-2"> sign up</button> </Link>
          </p>
       
      </div>
    </div>
  );
};

export default Login;
