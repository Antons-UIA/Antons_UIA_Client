import axios from 'axios';
import React, { useState, useEffect } from 'react'
// import users from './user';
const PatientList = () => {
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
    

    // const email = localStorage.getItem("email")
    // const handlePatients = async (e) => {
    //     const response = await axios.post(API_URL, { email })
    //     const users = response.data.data
    //     return users
    // }

    return (
        <div>
            <div>
            {patients &&
            patients.map((user) => (<div key={user._id}>
                <h3>{user.patient_email}</h3>
            </div>))}
            </div>
        </div>
    )
}

export default PatientList