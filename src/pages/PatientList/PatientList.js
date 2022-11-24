import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// import users from './user';
const PatientList = () => {
    const navigate=useNavigate()
    const [patients, setPatients]=useState(undefined)

    const API_URL = "https://uia-antons-server.herokuapp.com/api/reports/doctor";

    useEffect(() => {
        const email = localStorage.getItem("email")

        async function getPatients(){
        const response = await axios.post(API_URL, { email })
        // console.log(response)
        const users = response.data.data;
        console.log(users);
        setPatients(users)
        }

        getPatients();
    }, [])
    
    const handlePatient=()=>{
        navigate('/reports/')
    }

    // const email = localStorage.getItem("email")
    // const handlePatients = async (e) => {
    //     const response = await axios.post(API_URL, { email })
    //     const users = response.data.data
    //     return users
    // }

    return (
        <div>
            <div className='m-5'>
            <h6 className="text-5xl font-bold text-[#1678F2] my-5">
                Patients:
            </h6>
            
            {patients &&
            patients.map((user) => (<div key={user._id}>
                <div className='shadow-sm p-3 flex justify-between' onClick={handlePatient}>
                <h3>{user.patient_name}</h3>
                <h3>{user.patient_email}</h3>
                </div>
            </div>))}
            </div>
        </div>
    )
}

export default PatientList