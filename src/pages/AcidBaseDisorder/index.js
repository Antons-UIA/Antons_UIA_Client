import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useEffect, useState } from "react";
const API_URL = "http://localhost:4000/api/acid-base/predict";
const AcidBaseDisorder = () => {
  //   useEffect(() => {
  //     determineDisorder();
  //   }, []);
  const [pH, setpH] = useState("");
  const [CO2, setCO2] = useState("");
  const [HCO3, setHCO3] = useState("");
  const [Na, setNa] = useState("");
  const [K, setK] = useState("");
  const [Cl, setCl] = useState("");
  const [weight, setWeight] = useState("");
  const [albumin, setAlbumin] = useState("");
  const [lactate, setLactate] = useState("");
  const [report, setReport] = useState({});
  const determineDisorder = async () => {
    const response = await axios.post(API_URL, {
      pH: pH,
      CO2: CO2,
      HCO3: HCO3,
      Na: Na,
      K: K,
      Cl: Cl,
      weight: weight,
      Albumin: albumin,
      Lactate: lactate,
    });
    console.log(response.data.data);
    console.log(Object.keys(report).length);
    const ans = response.data.data;
    setReport(ans);
    window.scrollBy(0, 200);
    setpH("");
    setCO2("");
    setHCO3("");
    setNa("");
    setK("");
    setCl("");
    setWeight("");
    setAlbumin("");
    setLactate("");
  };
  const getLabelName = (label) => {
    let words = label.split("_");
    let finalLabel = "";
    words.forEach((word) => {
      finalLabel += word.charAt(0).toUpperCase() + word.slice(1) + " ";
    });
    return finalLabel;
  };
  const downloadPdf = () => {
    const report = document.getElementById("report");
    html2canvas(report).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("report.pdf");
    });
  };
  return (
    <div className="py-8 px-16">
      <h1 className="text-3xl font-bold text-[#6B40F9]">
        Determine Acid Base Disorders
      </h1>
      <div className="mt-4 p-4 max-w-[80%] flex flex-wrap items-center justify-between mr-auto ml-auto">
        <div className="mr-8 mt-4">
          <h1 className="font-semibold text-lg">Enter pH value</h1>
          <input
            className="mt-2 outline-none shadow shadow-slate-400 p-2 rounded"
            placeholder="eg. 7.6"
            type={"number"}
            value={pH}
            onChange={(e) => setpH(e.target.value)}
          />
        </div>
        <div className="mr-8 mt-4">
          <h1 className="font-semibold text-lg">Enter CO2 value</h1>
          <input
            className="mt-2 outline-none shadow shadow-slate-400 p-2 rounded"
            placeholder="eg. 23"
            type={"number"}
            value={CO2}
            onChange={(e) => setCO2(e.target.value)}
          />
        </div>
        <div className="mr-8 mt-4">
          <h1 className="font-semibold text-lg">Enter HCO3 value</h1>
          <input
            className="mt-2 outline-none shadow shadow-slate-400 p-2 rounded"
            placeholder="eg. 10"
            type={"number"}
            value={HCO3}
            onChange={(e) => setHCO3(e.target.value)}
          />
        </div>
        <div className="mr-8 mt-4">
          <h1 className="font-semibold text-lg">Enter Na value</h1>
          <input
            className="mt-2 outline-none shadow shadow-slate-400 p-2 rounded"
            placeholder="eg. 140"
            type={"number"}
            value={Na}
            onChange={(e) => setNa(e.target.value)}
          />
        </div>
        <div className="mr-8 mt-4">
          <h1 className="font-semibold text-lg">Enter K value</h1>
          <input
            className="mt-2 outline-none shadow shadow-slate-400 p-2 rounded"
            placeholder="eg. 0"
            type={"number"}
            value={K}
            onChange={(e) => setK(e.target.value)}
          />
        </div>
        <div className="mr-8 mt-4">
          <h1 className="font-semibold text-lg">Enter Cl value</h1>
          <input
            className="mt-2 outline-none shadow shadow-slate-400 p-2 rounded"
            placeholder="eg. 100"
            type={"number"}
            value={Cl}
            onChange={(e) => setCl(e.target.value)}
          />
        </div>
        <div className="mr-8 mt-4">
          <h1 className="font-semibold text-lg">Enter Lactate value</h1>
          <input
            className="mt-2 outline-none shadow shadow-slate-400 p-2 rounded"
            placeholder="eg. 11"
            type={"number"}
            value={lactate}
            onChange={(e) => setLactate(e.target.value)}
          />
        </div>
        <div className="mr-8 mt-4">
          <h1 className="font-semibold text-lg">Enter Albumin value</h1>
          <input
            className="mt-2 outline-none shadow shadow-slate-400 p-2 rounded"
            placeholder="eg. 21"
            type={"number"}
            value={albumin}
            onChange={(e) => setAlbumin(e.target.value)}
          />
        </div>
        <div className="mr-8 mt-4">
          <h1 className="font-semibold text-lg">Enter weight value in kgs</h1>
          <input
            className="mt-2 outline-none shadow shadow-slate-400 p-2 rounded"
            placeholder="eg. 34"
            type={"number"}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-8 max-w-[100px] ml-auto mr-[180px]">
        <button
          onClick={() => determineDisorder()}
          className="font-bold text-white bg-[#3A8EF6] px-8 py-2 rounded"
        >
          Submit
        </button>
      </div>
      {Object.keys(report).length > 0 ? (
        <div className="mt-4 p-4 max-w-[80%] mr-auto ml-auto">
          <div id="report" className="p-4 w-[100%]">
            <h1 className="text-3xl font-bold text-[#1678F2] mb-4">Report</h1>
            <table className="table-auto border border-black">
              <tbody>
                {Object.keys(report).map((key, index) => {
                  return (
                    <tr>
                      <td className="border border-black p-2">
                        <h1 className="font-bold text-lg" key={key}>
                          {getLabelName(key)}
                        </h1>
                      </td>
                      <td className="border border-black p-2 max-w-[600px]">
                        <h1 className="ml-2 text-lg"> {report[key]}</h1>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <button
            onClick={() => downloadPdf()}
            className="mt-4 ml-4 font-bold text-white bg-[#6B40F9] px-8 py-2 rounded"
          >
            Download Report
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default AcidBaseDisorder;
