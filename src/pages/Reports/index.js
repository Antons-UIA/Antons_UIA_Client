import React from "react";
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
  const navigate = useNavigate();
  return (
    <div className="px-8 py-4">
      <Navbar value="Sign-out"/>
      <h1 className="text-3xl font-bold text-[#6B40F9]">Reports</h1>
      <div className="mt-4 flex justify-between flex-wrap">
        {dummyReports.map((report) => (
          <div
            key={report.id}
            className="p-4 shadow shadow-slate-500 rounded w-fit mt-4 relative"
          >
            <div className="flex items-center">
              <h1 className="font-bold text-lg">ID: </h1>
              <h1 className="ml-2 text-lg">{report.id}</h1>
            </div>
            <div className="flex items-center mt-2">
              <h1 className="font-bold text-lg">
                Reference Doctor/Technician:{" "}
              </h1>
              <h1 className="ml-2 text-lg">{report.doc}</h1>
            </div>
            <div className="flex items-center mt-2">
              <h1 className="font-bold text-lg">Date: </h1>
              <h1 className="ml-2 text-lg">{report.date}</h1>
            </div>
            <Link to={`${report.id}`} className="absolute bottom-0 right-0 p-2">
              {/* <a
              href={`http://localhost:3000/reports/${report.id}`}
              className="absolute bottom-0 right-0 p-2"
            > */}
              <MdArrowForwardIos
                size={20}
                className="cursor-pointer"
                color="#3A8EF6"
              />
              {/* </a> */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
