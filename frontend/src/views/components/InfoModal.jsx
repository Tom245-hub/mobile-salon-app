import React from "react";

import { Modal } from "react-bootstrap";

const InfoModal = (props) => {
  return (
    <Modal
      size="lg"
      show={props.infoModal}
      onHide={() => props.setInfoModal(false)}
      aria-labelledby="confirm-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="confirm-modal">{props.titleText}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.bodyText}</Modal.Body>
    </Modal>
  );
};

export default InfoModal;
