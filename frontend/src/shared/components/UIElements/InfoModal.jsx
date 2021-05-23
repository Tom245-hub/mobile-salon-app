import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";

const InfoModal = ({ infoModal, setInfoModal, titleText, bodyText }) => {
  return (
    <Modal size='lg' show={infoModal} onHide={() => setInfoModal(false)} aria-labelledby='confirm-modal'>
      <Modal.Header closeButton>
        <Modal.Title id='confirm-modal'>{titleText}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{bodyText}</Modal.Body>
    </Modal>
  );
};

InfoModal.propTypes = {
  infoModal: PropTypes.bool.isRequired,
  setInfoModal: PropTypes.func.isRequired,
  titleText: PropTypes.string.isRequired,
  bodyText: PropTypes.string.isRequired,
};

export default InfoModal;
