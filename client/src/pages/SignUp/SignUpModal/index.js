import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from '../../../components/Button/button1';
import './style.scss'
import { useNavigate } from 'react-router';

const SingUpModal = (props) => {
    const navigate = useNavigate()
  
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Welcome to FoodHero</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>You are registered successfully!</div>
          <div>Do you want to sign in with your email right now?</div>
        </Modal.Body>
        <Modal.Footer>
          <div className='YeahButton'><Button value="Yeah!" onClick={() => navigate("/signIn")}/></div>
          <div className='CancelButton'><Button value="Cancel" onClick={props.onHide}>Close</Button></div>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default SingUpModal;
  