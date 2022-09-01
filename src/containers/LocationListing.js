import React, { useState } from "react";
import LocationComponent from "./LocationComponent";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

const LocationListing = () => {
  const dataLocation = JSON.parse(localStorage.getItem("CharacterLocation"));
  //   console.log(dataLocation.locations);

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {dataLocation === null ? (
        <div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header className="bg-warning">
              <Modal.Title>Warning!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Please input the location!</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                <Link to="/">Dashboard</Link>
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : (
        <LocationComponent value={dataLocation.locations} />
      )}
    </div>
  );
};

export default LocationListing;
