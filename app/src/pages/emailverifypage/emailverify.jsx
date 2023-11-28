import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const param = useParams();
  console.log(validUrl);

  useEffect(() => {
    const verifyEmailUrl = async () => {
      const url = `http://localhost:3001/verify/${param.id}/${param.token}`;
      const data = await Axios.get(url);

      if (data.status === 200) {
        setValidUrl(false);
        setErrorMsg(data.data.message);
      } else {
        setValidUrl(true);
      }
    };

    verifyEmailUrl();

    const redirectTimer = setTimeout(() => {
      window.location.href = "/login";
    }, 5000);

    return () => clearTimeout(redirectTimer);
  }, [param, validUrl]);

  return (
    <div className="container emailverify__container">
      <div className="main__container">
        {validUrl ? (
          <>
            <div className="message__container">
              <h1>
                Your email has been verified! Welcome to BeeHub Virtual
                Assistant!
              </h1>
            </div>
            <p>Redirecting to the login page in 5 seconds...</p>
          </>
        ) : (
          <>
            <h1>{errorMsg}</h1>
            <p>Redirecting to the login page in 5 seconds...</p>
          </>
        )}
      </div>
    </div>
  );
};

export default EmailVerify;
