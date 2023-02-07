import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from '../../../components/Button/button1';
import './style.scss'
import { useNavigate } from 'react-router';

const ErrorModal = (props) => {
    const navigate = useNavigate()
  
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Error!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {props.content}
          </div>
        </Modal.Body>
        <Modal.Footer>
          {
            props.content === "An account with this email already exists." &&
            <div className='YeahButton'><Button value="Sign In?" onClick={() => navigate("/signIn")}  /></div>
          }
          <div className='CancelButton'><Button value="Got it!" onClick={props.onHide} /></div>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default ErrorModal;
  