import React, { useState } from "react";
import { GiPlainCircle, GiPlainSquare, GiPlantRoots } from "react-icons/gi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useAuthStore } from "@/State/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Login() {
  const { authUser, setAuthUser } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/users/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      localStorage.setItem("authUser", JSON.stringify(res.data.loggedInUser));
      if (res.status === 200) {
        toast.success("Login Successful");
        setAuthUser(res.data.loggedInUser);
      }
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("Invalid Credentials");
      }
    }
  };
  return (
    <div className="bg-cSkin h-screen  overflow-hidden">
      {" "}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row justify-center items-center h-full">
          <div className="w-1/2 h-screen object-cover  bg-orange-100 flex justify-center items-center ">
            {" "}
            <img
              src="./9008026.jpg"
              alt="Wheat field"
              className="  h-screen object-cover"
            />
          </div>

          <div className="flex flex-col justify-center items-center w-1/2 ">
            <h1 className="ml-3 mb-2 text-4xl font-serif font-bold text-center">
              &nbsp; Manage Farm
              <br />
              <span className="inline-flex items-center">
                Harvest
                <GiPlainCircle className="mr-1 text-red-200" />
                <GiPlainSquare className="mr-1 text-green-600" />
                <GiPlantRoots className="mr-1 text-green-400" /> Success
              </span>
            </h1>
            <div className="divider divider-accent px-24 mb-24"></div>
            {/* 
          <div className="pb-24 w-[500px] ">
            <h1 className="text-semibold text-3xl text-center ">
            Log In To Your Account
            </h1>
          </div> */}{" "}
            <div className="w-1/2 flex flex-col justify-center gap-5 items-center">
              <div className="p-1 rounded-3xl max-w-lg border-2 border-gray-300 focus-within:border-transparent focus-within:bg-gradient-to-r focus-within:from-rose-400 focus-within:via-fuchsia-500 focus-within:to-indigo-500">
                <input
                  className="p-1 text-center w-[500px] rounded-3xl placeholder-gray-600 bg-cSkin focus:outline-none"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  
                  placeholder="Email Or Username"
                />
              </div>

              <div className="p-1 rounded-3xl max-w-lg border-2 border-gray-300 focus-within:border-transparent focus-within:bg-gradient-to-r focus-within:from-rose-400 focus-within:via-fuchsia-500 focus-within:to-indigo-500">
                <input
                  className="p-1 text-center w-[500px] rounded-3xl placeholder-gray-600 bg-cSkin focus:outline-none"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>

              <button className="btn btn-ghost border h-10 border-cyan-500 w-40 mt-5 rounded-3xl bg-cyan-200">
                <FaArrowAltCircleRight className="text-xl" />
                Log In
              </button>
              <Link to="/signup">
                  <h1 className="hover:text-gray-500 font-semibold text-sm">Dont have a account Sign up</h1>
                </Link>
            </div>
          </div>
        </div>{" "}
      </form>
    </div>
  );
}

export default Login;
