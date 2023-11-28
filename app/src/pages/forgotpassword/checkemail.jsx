import React, { useState } from "react";
import Axios from "axios";

const CheckEmail = () => {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleCheckEmail = async (e) => {
    e.preventDefault();

    try {
      await Axios.post("http://localhost:3001/getEmail", { email }).then(
        (res) => {
          setErrorMsg(res.data.message);
        }
      );
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="container checkemail__container">
      <div className="main__container">
        <div className="form__container">
          <form onSubmit={handleCheckEmail}>
            <strong>Input email</strong>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button>Cancel</button>
            <button>Submit</button>
          </form>
          {errorMsg}
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
