import { React, useEffect, useState } from "react"
import { useSelector } from 'react-redux';
import Button from "../../components/Button/button1"
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions";
import { BsDashCircle } from "react-icons/bs";

import Basket from "../../assets/img/Vector.png";
import EmptyCart from "../../assets/img/emptyCart.png"
import ArrowDown from "../../assets/img/arrowDown.png"
import ArrowUp from "../../assets/img/arrowUp.png"
import "./cart.scss"

const Cart = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const items = useSelector((state) => state.items);
  const token = useSelector((state) => state.token);

  const [activeCart, setActiveCart] = useState(false);
  const priceTotal = items.reduce((accumulator, value) => { return accumulator + value.price * value.count; }, 0)

  const handleUpCart = () => { setActiveCart(activeCart => !activeCart) }
  const remove = (index) => {
    const products = items.filter((item, i) => i !== index)
    localStorage.setItem("cart", JSON.stringify(products))
    dispatch(addToCart(products))
  }
  const checkOut = () => {
    if (token) {
      handleUpCart()
      navigate("/check-out")
    } else navigate('/signIn')
  }

  useEffect(() => {
    const cart = localStorage.getItem('cart')
    if (cart) dispatch(addToCart(JSON.parse(cart)))
  }, [])

  return (
    <div className='cart'>
      <div className='cart-header'>
        <div className='small'>
          {items.length > 0 ?
            <div className='fill'>
              <img src={Basket} alt="basket" />
              <div className='fill-status'>{items.length + " items"}</div>
            </div>
            :
            <div className='empty'>
              <img src={Basket} alt="basket" />
              <div className='empty-status'>Empty Cart</div>
            </div>
          }
          <div className="price-toggle">
            {items.length > 0 && <div className="priceTotal">{"$" + (priceTotal).toFixed(2)}</div>}
            <div onClick={() => handleUpCart()}>
              {activeCart ? <img src={ArrowDown} alt="Down" style={{ cursor: 'pointer' }} /> : <img src={ArrowUp} style={{ cursor: 'pointer' }} alt="Up" />}
            </div>
          </div>
        </div>
      </div>
      {activeCart &&
        <div className='cart-content'>
          {items.length === 0 ?
            <div className="empty-cart">
              <div className="comment">Please Add to Cart</div>
              <img className='cart-img' src={EmptyCart} alt="basket" />
              <Button value={"Check Out"} status={true} />
            </div>
            :
            <div className='cart-detail scrollbar scrollbar--light'>
              {items.map((item, index) => (
                <div className='cart-individual' key={index}>
                  <div className='image'><img src={`${process.env.REACT_APP_SERVER_URL}/${item.img}`} alt="cart-small" /></div>
                  <div className='content'>
                    <div className="combo-content">
                      <span className="key">Name: </span>
                      <span className="value">{item.title}</span>
                    </div>
                    <div className="combo-content">
                      <span className="key">Price: </span>
                      <span className="value">${item.price}</span>
                    </div>
                    <div className="combo-content">
                      <span className="key">Count: </span>
                      <span className="value">{item.count}</span>
                    </div>
                    <div className='final'>
                      <div className='remove-edit'>
                        <div className='remove' onClick={() => remove(index)}>
                          <BsDashCircle style={{ fontSize: "12px" }} /> Remove
                        </div>
                      </div>
                      <div className='final-price'>
                        {"$ " + (item.price * item.count).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          }
          {items.length > 0 && <Button value={"Check Out"} onClick={checkOut} />}
        </div>
      }
    </div>
  )
}

const mapStateToProps = state => { return { items: state.items } }
const mapStateToDispatch = dispatch => { return { dispatch } }

export default connect(mapStateToProps, mapStateToDispatch)(Cart);

