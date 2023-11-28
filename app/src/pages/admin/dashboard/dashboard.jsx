import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Cookies from "js-cookie";
import DataTable from "react-data-table-component";

import ContactUser from "./contactuser/contactuser";
import ViewPdf from "./viewpdf";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  const [applyUsers, setApplyUsers] = useState([]);
  const [joinUsers, setJoinUsers] = useState([]);

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/admindashboard").then((res) => {
      if (res.data !== "User not found") {
        setUserDetails(res.data);
      } else {
        navigate("/");
      }
    });

    Axios.get("http://localhost:3001/getApplyUsers").then((res) => {
      try {
        setApplyUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    });

    Axios.get("http://localhost:3001/getJoinUsers").then((res) => {
      try {
        setJoinUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    });
  }, [navigate]);

  const applycolumns = [
    {
      name: "Name",
      selector: (row) => row.fname + " " + row.mname + " " + row.lname,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Location",
      selector: (row) => row.cityName + ", " + row.stateName,
      sortable: true,
    },
    {
      name: "Looking for",
      selector: (row) => row.selectedValues,
    },
    {
      name: "View Resume",
      selector: (row) => <ViewPdf filename={row.pdfFile}/>,
    },
    {
      name: "Contact",
      selector: (row) => <ContactUser userID={row._id}/>,
    },
  ];

  const joincolumns = [
    {
      name: "Name",
      selector: (row) => row.fname + " " + row.mname + " " + row.lname,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Location",
      selector: (row) => row.cityName + ", " + row.stateName,
      sortable: true,
    },
    {
      name: "Looking for",
      selector: (row) => row.selectedValues,
    },
    {
      name: "Contact",
      selector: (row) => <ContactUser userID={row._id} />,
    },
  ];

  const handleLogout = (e) => {
    e.preventDefault();

    Cookies.remove("token");
    window.location.reload();
    navigate("/");
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {userDetails && (
        <div>
          <p>Email: {userDetails.email}</p>
          <p>
            Full Name:{" "}
            {`${userDetails.fname} ${userDetails.mname} ${userDetails.lname}`}
          </p>
          <p>City: {userDetails.cityName}</p>
        </div>
      )}

      <button onClick={handleLogout}>Logout</button>

      <div className="datatable__container">
        <h1>Apply Users</h1>
        <div className="table__container">
          <DataTable columns={applycolumns} data={applyUsers} />
        </div>
      </div>

      <div className="datatable__container">
        <h1>Join Users</h1>
        <div className="table__container">
          <DataTable columns={joincolumns} data={joinUsers} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
