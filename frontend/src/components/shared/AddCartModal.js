import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export const AddCartModal = ({ open, setOpen }) => {
  return (
    <Modal
      show={open}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => setOpen(false)}
    >
      <Modal.Body>
        <p>Product added successfully to cart</p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={() => setOpen(false)}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
