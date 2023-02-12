import React, { useState, useEffect } from 'react'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { BsDashCircle } from "react-icons/bs"
import { addToCart } from '../../redux/actions';
import Button from "../../components/Button/button1"
import CheckOutModal from './CheckOutForm';
import "./style.scss"

const CheckOut = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.items);

  const [active, setActive] = useState(false)
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [extra, setExra] = useState("")
  const priceSubTotal = items.reduce((accumulator, value) => { return accumulator + value.price * value.count; }, 0)

  const remove = (index) => {
    const products = items.filter((item, i) => i !== index)
    localStorage.setItem("cart", JSON.stringify(products))
    dispatch(addToCart(products))
  }

  const InputCSS = {
    '&.MuiInputBase-root:after': { borderBottom: '2px solid black' },
    ':hover:not(.Mui-disabled):before': { borderBottom: '2px solid rgba(0, 0, 0, 0.6)' },
    '&.MuiInputBase-root:before': { borderBottom: '1px solid rgba(0, 0, 0, 0.6)' },
  }
  const LabelCSS = {
    '&.Mui-focused': { color: 'rgba(0, 0, 0, 0.6)' }
  }
  const InputOtherCSS = {
    width: '100%',
    marginBottom: '20px',
    ':before': { borderBottom: '1px solid rgba(0, 0, 0, 0.6)' },
    ':hover:not(.Mui-disabled):before': { borderBottom: '2px solid rgba(0, 0, 0, 0.6)' },
    ':after': { borderBottom: '2px solid black' }
  }
  const FormCSS = { width: '80%' }
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <div className='checkOut-container'>
      <div className='main-title'>CHECK OUT</div>
      <div className='main-content'>
        <div className='summary'>
          <div className='summary-title'>Order Summary</div>
          <hr />
          <div className='detail-group'>
            <div className='summary-detail'>
              <div className='detail-title'>Total Price:</div>
              <div className='detail-price'>{"$ " + (priceSubTotal).toFixed(2)}</div>
            </div>
            <div className='summary-detail'>
              <div className='detail-title'>Stripe Fee:</div>
              <div className='detail-price'>{"$ " + (priceSubTotal * 0.0034 + 0.5).toFixed(2)}</div>
            </div>
          </div>
          <hr />
          <div className='total'>
            <div className='total-title'>Total:</div>
            <div className='total-price'>{"$ " + (priceSubTotal * 1.0034 + 0.5).toFixed(2)}</div>
          </div>
          <Button value="Place Order" onClick={() => setIsOpen(true)} />
        </div>
        <div className='review'>
          <div className='review-order'>
            <div className='order-title' onClick={() => setActive(!active)}>
              <div className='title-txt'>1. Review Order</div>
              <div className='title-symbol'>
                {active ? <VscTriangleDown /> : <VscTriangleUp />}
              </div>
            </div>
            <hr />
            {active &&
              <div className='order-content'>
                {items.map((item, index) => (
                  <div className='review-individual' key={index}>
                    <div className='individual-img'>
                      <img src={`${process.env.REACT_APP_SERVER_URL}/${item.img}`} alt="Review" />
                    </div>
                    <div className='individual-content'>
                      <div className='individual-desc'>
                        <div className="combo-part">
                          <div className="combo-content">
                            <span className="key">Name: </span>
                            <span className="value">{item.title}</span>
                          </div>
                          <div className="combo-content">
                            <span className="key">Price: </span>
                            <span className="value">$ {item.price}</span>
                          </div>
                          <div className="combo-content">
                            <span className="key">Quantity: </span>
                            <span className="value">{item.count}</span>
                          </div>
                        </div>
                      </div>
                      <div className='individual-final'>
                        <div className='remove-button' onClick={() => remove(index)}><BsDashCircle style={{ fontSize: "12px" }} /> Remove</div>
                        <div className='individual-price'>{"$ " + (item.count * item.price).toFixed(2)}</div>
                      </div>
                    </div>
                  </div>
                )
                )}
                <hr />
              </div>
            }
          </div>
          <div className='address'>
            <div className='address-title'>
              <div className='title-txt'>2. Address</div>
            </div>
            <Input
              value={address}
              fullWidth
              onChange={e => setAddress(e.target.value)}
              id="formatted-text-mask-input"
              sx={{ ...InputCSS }}
            />
            <div className='contact-info'>
              <div className='contact-title'>Contact Information</div>
              <div className='contact-option'>
                <div className='input-info'>
                  <FormControl variant="standard" sx={{ ...FormCSS }}>
                    <InputLabel htmlFor="formatted-text-mask-input" sx={{ ...LabelCSS }}>Phone Number</InputLabel>
                    <Input
                      value={phone}
                      placeholder="+61 222 222 222"
                      onChange={e => setPhone(e.target.value)}
                      name="textmask"
                      id="formatted-text-mask-input"
                      sx={{ ...InputCSS }}
                    />
                  </FormControl>
                  <FormControl variant="standard" sx={{ ...FormCSS }}>
                    <InputLabel htmlFor="input-with-icon-adornment" sx={{ ...LabelCSS }}>
                      Addtional Notes (Optional)
                    </InputLabel>
                    <Input
                      id="input-with-icon-adornment"
                      value={extra}
                      onChange={e => setExra(e.target.value)}
                      startAdornment={
                        <InputAdornment position="start"  >
                          <AccountCircle />
                        </InputAdornment>
                      } sx={{ ...InputOtherCSS }}
                    />
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CheckOutModal
        show={modalIsOpen}
        order={{
          totalPrice: priceSubTotal * 1.0034 + 0.5,
          orders: items,
          address: address,
          phone: phone,
          extra: extra,
        }}
        onHide={() => setIsOpen(false)}
      />
    </div>
  )
}

export default CheckOut;