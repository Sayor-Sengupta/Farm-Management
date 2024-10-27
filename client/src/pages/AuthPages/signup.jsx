import React, { useState } from "react";
import { GiPlainCircle, GiPlainSquare, GiPlantRoots } from "react-icons/gi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAuthStore } from "@/State/useAuth";
import toast from "react-hot-toast";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [userId, setUserId] = useState(""); 
  const {authUser, setAuthUser} = useAuthStore()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/users/signUp", {
        fullName,
        userName,
        email,
        password,
        confirmPassword,
      },{withCredentials:true});
      console.log("res.data", res.data);
     
    
      setUserId(res.data.data.userId);
      setIsOtpSent(true); 
    } catch (error) {
      console.log(error);
    }
  };

  const handleOtpSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/users/verify", {
        otp,
        userId
      },{withCredentials:true});
    
      console.log("res.data", res.data);
      if (res.data.status === "verified") {

        console.log("Account verified");
        toast.success("Account Verified")
        setAuthUser(res.data.loggedInUser);
        

      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-cSkin h-screen overflow-hidden">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row justify-center items-center h-full">
            <div className="w-1/2 h-screen object-cover bg-orange-100 flex justify-center items-center">
              <img
                src="./9008026.jpg"
                alt="Wheat field"
                className="h-screen object-cover"
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

              <div className="flex flex-col justify-center items-center gap-5">
                <div className="p-1 rounded-3xl max-w-lg border-2 border-gray-300 focus-within:border-transparent focus-within:bg-gradient-to-r focus-within:from-rose-400 focus-within:via-fuchsia-500 focus-within:to-indigo-500">
                  <input
                    className="p-1 w-[500px] rounded-3xl text-center placeholder-gray-600 bg-cSkin focus:outline-none"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                  />
                </div>
                <div className="p-1 rounded-3xl max-w-lg border-2 border-gray-300 focus-within:border-transparent focus-within:bg-gradient-to-r focus-within:from-rose-400 focus-within:via-fuchsia-500 focus-within:to-indigo-500">
                  <input
                    className="p-1 w-[500px] rounded-3xl text-center placeholder-gray-600 bg-cSkin focus:outline-none"
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="UserName"
                  />
                </div>
                <div className="p-1 rounded-3xl max-w-lg border-2 border-gray-300 focus-within:border-transparent focus-within:bg-gradient-to-r focus-within:from-rose-400 focus-within:via-fuchsia-500 focus-within:to-indigo-500">
                  <input
                    className="p-1 text-center w-[500px] rounded-3xl placeholder-gray-600 bg-cSkin focus:outline-none"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="p-1 rounded-3xl max-w-lg border-2 border-gray-300 focus-within:border-transparent focus-within:bg-gradient-to-r focus-within:from-rose-400 focus-within:via-fuchsia-500 focus-within:to-indigo-500">
                  <input
                    className="p-1 text-center w-[500px] rounded-3xl placeholder-gray-600 bg-cSkin focus:outline-none"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="p-1 rounded-3xl max-w-lg border-2 border-gray-300 focus-within:border-transparent focus-within:bg-gradient-to-r focus-within:from-rose-400 focus-within:via-fuchsia-500 focus-within:to-indigo-500">
                  <input
                    className="p-1 text-center w-[500px] rounded-3xl placeholder-gray-600 bg-cSkin focus:outline-none"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <button className="btn btn-ghost border h-10 border-cyan-500 w-40 rounded-3xl bg-cyan-200">
                  <FaArrowAltCircleRight className="text-xl" />
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </form>

        
        {isOtpSent && (
          <Dialog open={isOtpSent}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Enter OTP</DialogTitle>
                <DialogDescription>
                  Please enter the OTP sent to your email.
                </DialogDescription>
              </DialogHeader>
              <input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="OTP" className="bg-white text-black"
              />
              <button className="btn"onClick={handleOtpSubmit}>Verify OTP</button>
            </DialogContent>
          </Dialog>
        )} 
      </div>
    </>
  );
}

export default Signup;
