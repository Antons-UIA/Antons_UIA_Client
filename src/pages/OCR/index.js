import axios from "axios";
import React, { useState } from "react";
import { decode as base64_decode, encode as base64_encode } from "base-64";
import html2canvas from "html2canvas";
const OCR = () => {
  const [file, setFile] = useState({});
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  async function Main() {
    return await toBase64(file);
  }
  const sendFile = async () => {
    try {
      const fileEncoded = await Main();
      console.log(fileEncoded);
      const response = await axios.post("http://127.0.0.1:5000/ocr", {
        data: fileEncoded,
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={() => sendFile()}>Get Data</button>
    </div>
  );
};

export default OCR;
