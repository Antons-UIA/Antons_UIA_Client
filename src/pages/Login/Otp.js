import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Otp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState();
const handleOtpChange=(e)=>{
    setOtp(e.target.value)
}
  const API_URL = "https://uia-antons-server.herokuapp.com/api/auth/login";

  const handleOtpSubmit = async(e) => {
    console.log(otp);
    console.log(localStorage.getItem("otp"));
    if(otp===localStorage.getItem("otp"))
    {
        navigate('/')
    }
    else{
        navigate('/login')
    }
  };
    return (
        
        <div>
            <label
                className="text-left font-semibold text-[#201835] "
                htmlFor="otp"
            >
                Enter OTP
            </label>
            <input
                className="w-full self-center rounded-lg p-1 text-black bg-white border-2 my-2"
                type="number"
                placeholder="Enter OTP"
                id="otp"
                name="otp"
                value={otp}
                onChange={handleOtpChange}
            />
            <button className="w-full bg-[#1678F2] w-full self-center py-2 rounded-xl font-semibold text-md my-1 text-slate-100 px-10 py-2" onClick={handleOtpSubmit}>Confirm</button>
        </div>
    )
}

export default Otp