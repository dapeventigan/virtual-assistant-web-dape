import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Axios from "axios";

import "./contactuser.css";

export default function ContactUser({ userID }) {
  const [open, setOpen] = React.useState(false);
  const [userUUID, setUserUUID] = useState();
  const handleOpen = () => {
    setUserUUID(userID);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState();
  const [emailMessage, setEmailMessage] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  console.log(errorMsg);

  const handleSendEmail = async (e) => {
    e.preventDefault();

    try {
      await Axios.post("http://localhost:3001/contactMessage", {
        email: email,
        message: emailMessage,
        subject: emailSubject,
      }).then((res) => {
        setErrorMsg(res.data.message);
      });
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getSpecificUser", {
      params: { userID: userUUID },
    }).then((res) => {
      try {
        setUser(res.data);
        setEmail(res.data[0].email);
      } catch (error) {
        console.log(error);
      }
    });
  }, [userUUID]);

  return (
    <div>
      <Button onClick={handleOpen}>Contact</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="box__container">
          {user.map((userinfo) => (
            <div className="userdetails__container" key={userinfo._id}>
              <p>
                Name: {userinfo.fname} {userinfo.mname} {userinfo.lname}
              </p>
              <p>Email: {userinfo.email}</p>
              <p>
                Mobile Number:{" "}
                {userinfo.mobileNumber === "" ? "N/A" : userinfo.mobileNumber}
              </p>
              <p>
                Location: {userinfo.streetAdd}, {userinfo.cityName},{" "}
                {userinfo.stateName}
              </p>
              <p>
                {userinfo.role === "applyUser"
                  ? "Applying for: "
                  : "Looking for: "}
                {userinfo.selectedValues}
              </p>
            </div>
          ))}
          <form onSubmit={handleSendEmail}>
            <TextField
              required
              id="outlined-required"
              label="Subject"
              placeholder="Enter subject here..."
              onChange={(e) => {
                setEmailSubject(e.target.value);
              }}
            />

            <TextField
              multiline
              label="Message"
              rows={8}
              fullWidth
              placeholder="Enter message here..."
              onChange={(e) => {
                setEmailMessage(e.target.value);
              }}
            />
            <button>Cancel</button>
            <button>Submit</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
