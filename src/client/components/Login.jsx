import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Nice");
        navigate("/userHome");
      } else {
        console.log("Request failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="md:px-36 px-16 pb-8 pt-8 md:pb-24 shadow-lg text-slate-300  bg-indigo-950">
      <form onSubmit={handleSubmit}>
        <img src="/logo.png" alt="brand-logo" className="w-72 mx-auto" />
        <div className="text-center py-8">
          <p className="text-lg font-semibold my-4">Email</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="md:w-1/3 w-1/2 mb-4 text-black  px-2 py-3"
          />
          <p className="text-lg font-semibold my-4">Password</p>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="md:w-1/3 w-1/2 mb-4 text-black px-2 py-3"
          />
          <button
            type="submit"
            className="block mx-auto md:w-1/3 w-1/2 px-2 py-3 my-4 text-lg bg-indigo-800 hover:bg-indigo-500"
          >
            LOG IN
          </button>
        </div>

        <div className="flex items-center">
          <hr className="flex-grow" />
          <p className="mx-4">OR</p>
          <hr className="flex-grow" />
        </div>

        <div className="text-center my-4">
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="underline hover:text-slate-100">
              SIGN UP
            </Link>
          </p>
          <Link to="/">
            <button className="bg-indigo-800 hover:bg-indigo-500 px-2 py-2.5 my-4 text-slate-300">
              Back to homepage
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
