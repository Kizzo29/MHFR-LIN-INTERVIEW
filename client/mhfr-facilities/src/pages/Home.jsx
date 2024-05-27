import React from 'react'
import { AgGridReact } from 'ag-grid-react'; 
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'

const Home = () => {
  const [facilities, setFacilities] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/facilities");
        setFacilities(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const [rowData, setRowData] = useState([
    { Code: "", Facility_name: "", District: "", Ownership: "", Status: '',Type:''},
    { Code: "", Facility_name: "", District: "", Ownership: "", Status: '',Type:''},
    { Code: "", Facility_name: "", District: "", Ownership: "", Status: '',Type:''},
    { Code: "", Facility_name: "", District: "", Ownership: "", Status: '',Type:''},
    { Code: "", Facility_name: "", District: "", Ownership: "", Status: '',Type:''},
    { Code: "", Facility_name: "", District: "", Ownership: "", Status: '',Type:''},
        ]);
        
  const [colDefs, setColDefs] = useState([
    { field: "make", filter: true },
    { field: "Code" },
    { field: "Facility_name" },
    { field: "District" },
    { field: "Ownership" },
    { field: "Status" },
    { field: "Type" }

        ]);
  return (
    <div className='home'>
        <div className='ag-theme-quartz' style={{height: 500}}>
          <AgGridReact
           rowData={rowData}
           columnDefs={colDefs}/>

        </div>
    </div>
  )
}

export default Home