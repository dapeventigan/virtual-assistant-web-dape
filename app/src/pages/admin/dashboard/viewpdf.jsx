import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Axios from "axios";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const ViewPdf = ({ filename }) => {
  const [open, setOpen] = React.useState(false);
  console.log(filename);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/viewPDF", {
      params: { filename: filename },
    })
      .then((response) => {
        setPdfUrl(response.data.url);
      })
      .catch((error) => {
        console.error("Error fetching PDF URL:", error);
      });
  }, [filename]);

  return (
    <div className="container pdf__container">
      <div>
        <Button onClick={handleOpen}>View PDF</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="box__container">
            <h2>View PDF</h2>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 1)",
                  height: "550px",
                }}
              >
                <Viewer fileUrl={pdfUrl} />;
              </div>
            </Worker>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default ViewPdf;
