import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from "react-redux"
import Button from '../../../components/Button/button1';
import { loadStripe } from "@stripe/stripe-js"
import {
  Elements,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js"
import './style.scss'
import { useNavigate } from 'react-router';
import { addToCart } from "../../../redux/actions";
import axios from 'axios';

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PK}`)

const PaymentForm = (props) => {
  const [holder, setHolder] = useState("")
  const elements = useElements()
  const stripe = useStripe()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      if (!stripe || !elements) return
      const cardNumberElement = elements?.getElement(CardNumberElement)
      if (!cardNumberElement) console.log('No exit card!')
      const token = await stripe.createToken(cardNumberElement, { name: holder })
      if (token.error) console.log(token.error.message)
      axios.post('/orders', {
        order: props.order,
        token: token.token
      }, {
        headers: {
          'x-auth-token': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        }
      }).then(res => res.data)
        .then(data => {
          if(data.success) {
            dispatch(addToCart([]))
            localStorage.removeItem("cart")
            navigate('/')
          }
        }).catch(err => console.log(err))
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const cardNumberElement = elements?.getElement(CardNumberElement)
    if (cardNumberElement) cardNumberElement.clear()
    const expiryElement = elements?.getElement(CardExpiryElement)
    if (expiryElement) expiryElement.clear()
    const cvcElement = elements?.getElement(CardCvcElement)
    if (cvcElement) cvcElement.clear()
    setHolder("")
  }, [props.show])

  const elementStyle = {
    lineHeight: '42px',
    color: '#54504E'
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="card-types">
        <div className="letter">
          <span>Please Enter Your Card Number</span>
        </div>
      </div >
      <div className="card-number">
        <CardNumberElement
          options={{
            style: {
              base: elementStyle,
            },
          }}
        />
      </div>
      <div className="card-holder-name">
        <div className="letter">
          <span>Card Holder Name</span>
        </div>
        <div className="holder-name">
          <input
            value={holder}
            onChange={(e) => setHolder(e.target.value)}
            placeholder="CardHolder Name"
          />
        </div>
      </div>
      <div className="expire-cvv">
        <div className="expire">
          <div className="letter">
            <span>Expiry</span>
          </div>
          <div className="expire-ele">
            <CardExpiryElement
              options={{
                style: {
                  base: elementStyle,
                },
              }}
            />
          </div>
        </div>
        <div className="cvv">
          <div className="letter">
            <span>CVC</span>
          </div>
          <div className="cvv-ele">
            <CardCvcElement
              options={{
                style: {
                  base: elementStyle,
                },
              }}
            />
          </div>
        </div>
      </div>
      <div className="pay-btn" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Button value="Pay" width="150px" onClick={() => { }} />
      </div>
    </form>
  )
}

const CheckOutModal = (props) => {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">CheckOut</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Elements stripe={stripePromise}>
          <PaymentForm {...props} />
        </Elements>
      </Modal.Body>
    </Modal>
  );
}

export default CheckOutModal;
