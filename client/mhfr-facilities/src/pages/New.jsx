import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'

const New = () => {

  const [inputs, setInputs] = useState({
    facility_code: "",
    facility_name: "",
    district_id: "",
    owner_id: "",

  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/new", inputs);
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <div className='new'>
         <h1>Create New Facility</h1>
    <form>
      <input required type='text' placeholder='facility_name*' onChange={handleChange}/>
      <input required type='text' placeholder='district_id*' onChange={handleChange}/>
      <input required type='text' placeholder='owner_id*' onChange={handleChange}/>


      <button>Submit</button>
      <p>Facility already exists!</p>
      <span> Facility code is </span>
    </form>
    </div>
  )
}

export default New