import React from "react";
import { GiPlainCircle, GiPlainSquare, GiPlantRoots } from "react-icons/gi";
import { FaArrowAltCircleRight } from "react-icons/fa";


function Signup() {
  return (
    <>
      <div className="bg-cSkin h-screen  overflow-hidden">
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

            <div className="pb-10 w-[500px] ">
              <h1 className="text-semibold text-3xl text-center ">Sign In To Your Account</h1>
            </div>

            <div className="w-1/2 flex flex-col justify-center gap-5 items-center">
              <div className="flex flex-row gap-8 justify-center items-center">
                <div className="p-1  rounded-3xl max-w-lg border-2  border-gray-300 focus-within:border-transparent focus-within:bg-gradient-to-r focus-within:from-rose-400 focus-within:via-fuchsia-500 focus-within:to-indigo-500">
                  <input
                    className="p-1 w-[230px] rounded-3xl text-center placeholder-gray-600 bg-cSkin focus:outline-none"
                    type="text"
                    id="name"
                    placeholder="First Name"
                  />
                </div>
                <div className="p-1 rounded-3xl max-w-lg border-2 border-gray-300 focus-within:border-transparent focus-within:bg-gradient-to-r focus-within:from-rose-400 focus-within:via-fuchsia-500 focus-within:to-indigo-500">
                  <input
                    className="p-1 w-[230px] rounded-3xl text-center placeholder-gray-600 bg-cSkin focus:outline-none"
                    type="text"
                    id="name"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="p-1 rounded-3xl max-w-lg border-2 border-gray-300 focus-within:border-transparent focus-within:bg-gradient-to-r focus-within:from-rose-400 focus-within:via-fuchsia-500 focus-within:to-indigo-500">
                <input
                  className="p-1 text-center w-[500px] rounded-3xl placeholder-gray-600 bg-cSkin focus:outline-none"
                  type="text"
                  id="name"
                  placeholder="Email"
                />
              </div>

              <div className="p-1 rounded-3xl max-w-lg border-2 border-gray-300 focus-within:border-transparent focus-within:bg-gradient-to-r focus-within:from-rose-400 focus-within:via-fuchsia-500 focus-within:to-indigo-500">
                <input
                  className="p-1 text-center w-[500px] rounded-3xl placeholder-gray-600 bg-cSkin focus:outline-none"
                  type="password"
                  id="name"
                  placeholder="Password"
                />
              </div>

              <div className="p-1 rounded-3xl max-w-lg border-2 border-gray-300 focus-within:border-transparent focus-within:bg-gradient-to-r focus-within:from-rose-400 focus-within:via-fuchsia-500 focus-within:to-indigo-500">
                <input
                  className="p-1 text-center w-[500px] rounded-3xl placeholder-gray-600 bg-cSkin focus:outline-none"
                  type="text"
                  id="name"
                  placeholder="Confirm Password"
                />
              </div>
              <button className="btn btn-ghost border h-10 border-cyan-500 w-40 rounded-3xl bg-cyan-200">
                <FaArrowAltCircleRight className="text-xl"/>Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
