import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
const dummyReports = [
  {
    id: 2331,
    doc: "Manan Shah",
    date: "21/11/2022",
  },
  {
    id: 2332,
    doc: "Manan Shah",
    date: "21/11/2022",
  },
  {
    id: 2333,
    doc: "Manan Shah",
    date: "21/11/2022",
  },
  {
    id: 2334,
    doc: "Manan Shah",
    date: "21/11/2022",
  },
];
const Reports = () => {
  const [reportData, setReportData] = useState([]);
  const [docNames, setDocNames] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getPatientData();
  }, []);
  const getPatientData = async () => {
    const email = localStorage.getItem("email");
    const response = await axios.post(
      "https://uia-antons-server.herokuapp.com/api/reports/patient",
      {
        email: email,
      }
    );
    console.log(response.data.data);
    response.data.data.map(async (report) => {
      console.log(report.ref_doctor_email);
      const name = await getDoctorName(report.ref_doctor_email);
      setReportData(response.data.data);
      setDocNames((docNames) => [...docNames, name]);
    });
  };
  const getDoctorName = async (email) => {
    const response = await axios.post(
      "https://uia-antons-server.herokuapp.com/api/auth/profile",
      {
        email: email,
      }
    );
    return response.data.data;
  };
  return (
    <div className="px-8 py-4">
      <Navbar value="Sign-out" />
      <h1 className="text-3xl font-bold text-[#6B40F9]">Reports</h1>
      <div className="mt-4 flex flex-wrap">
        {reportData.length > 0
          ? reportData.map((report, index) => (
              <div
                key={report._id}
                className="p-4 shadow shadow-slate-500 rounded w-fit mt-4 relative mr-4"
              >
                <div className="flex items-center">
                  <h1 className="font-bold text-lg">ID: </h1>
                  <h1 className="ml-2 text-lg">{report._id}</h1>
                </div>
                <div className="flex items-center mt-2">
                  <h1 className="font-bold text-lg">Doctor/Technician: </h1>
                  <h1 className="ml-2 text-lg">{docNames[index]}</h1>
                </div>
                <div className="flex items-center mt-2">
                  <h1 className="font-bold text-lg">Doctor Email: </h1>
                  <h1 className="ml-2 text-lg">{report.ref_doctor_email}</h1>
                </div>
                <div className="flex items-center mt-2">
                  <h1 className="font-bold text-lg">Date: </h1>
                  <h1 className="ml-2 text-lg">
                    {new Date(Date(report.date)).toLocaleDateString()}
                  </h1>
                </div>

                <div
                  onClick={() => {
                    navigate(`${report._id}`, { state: { report: report } });
                  }}
                  className="absolute bottom-0 right-0 p-2"
                >
                  <MdArrowForwardIos
                    size={20}
                    className="cursor-pointer"
                    color="#3A8EF6"
                  />
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Reports;
