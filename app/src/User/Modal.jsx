import React, { Fragment, useCallback, useState } from "react";
import "./styles/Modal.css";
import axios from "axios";
import { Button } from "@chakra-ui/react";

export default function Modal() {
  const [modal, setModal] = useState(false);
  const [isRetrived, setIsRetrived] = useState(false);

  const toggleModal = useCallback(() => {
    setModal(!modal);
    setIsRetrived(false);
  }, [modal]);
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const downloadFile = () => {
    axios
      .get("http://127.0.0.1:8000/cours/download/", {
        responseType: "blob",
      })
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "WebScraper.xlsx");
        document.body.appendChild(link);
        link.click();
      });
  };
  const retrieveData = (e) => {
    e.preventDefault();
    setIsRetrived(true);
    axios
      .get("http://localhost:8000/cours/scraper/")
      .then((res) => {
        console.log(res);
        toggleModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Button
        height={"40px"}
        backgroundColor={"#00F07D"}
        color={"black"}
        width={"300px"}
        mt={10}
        onClick={retrieveData}
        borderRadius={"0px"}
        isLoading={isRetrived}
        _hover={{
          backgroundColor: "#00F07D",
          color: "black",
          outline: "none",
          border: "none",
        }}
        _active={{
          backgroundColor: "#00F07D",
          color: "black",
          outline: "none",
          border: "none",
        }}
        _focus={{
          backgroundColor: "#00F07D",
          color: "black",
          outline: "none",
          border: "none",
        }}
      >
        START
      </Button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h3 className="modal-title">Data retreived successfully !</h3>
            <div className="modal-footer">
              <Button
                height={"40px"}
                backgroundColor={"#FFF84B"}
                color={"black"}
                width={"150px"}
                mt={10}
                borderRadius={"0px"}
                onClick={downloadFile}
                _hover={{
                  backgroundColor: "#FFF84B",
                  color: "black",
                  outline: "none",
                  border: "none",
                }}
                _active={{
                  backgroundColor: "#FFF84B",
                  color: "black",
                  outline: "none",
                  border: "none",
                }}
                _focus={{
                  backgroundColor: "#FFF84B",
                  color: "black",
                  outline: "none",
                  border: "none",
                }}
              >
                Download(.xlsx)
              </Button>
              <Button
                height={"40px"}
                background={"#DEE2E6"}
                color={"#343A40"}
                width={"150px"}
                mt={10}
                borderRadius={"0px"}
                onClick={() => {
                  toggleModal();
                }}
                _hover={{
                  background: "#DEE2E6",
                  color: "#343A40",
                  outline: "none",
                  border: "none",
                }}
                _active={{
                  background: "#DEE2E6",
                  color: "#343A40",
                  outline: "none",
                  border: "none",
                }}
                _focus={{
                  background: "#DEE2E6",
                  color: "#343A40",
                  outline: "none",
                  border: "none",
                }}
              >
                Discard
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
