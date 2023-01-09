import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions";
import Button from "../Button/button1";

export default function ProductTwo(props) {
    const dispatch = useDispatch();

    const clickEvent = () => {
        const cart = localStorage.getItem("cart")
        if (cart) {
            let carts = JSON.parse(cart)
            const foundIndex = carts.findIndex((cart) => cart.productId === props.id)
            if (foundIndex !== -1) {
                carts = carts.map((cart, i) => {
                    if (i === foundIndex) {
                        return {
                            ...cart,
                            count: cart.count + 1
                        }
                    } else return cart
                })
            } else {
                carts.push({
                    productId: props.id,
                    title: props.title,
                    img: props.source,
                    price: props.price,
                    count: 1
                })
            }
            dispatch(addToCart(carts))
            localStorage.setItem("cart", JSON.stringify(carts))
        } else {
            let carts = []
            carts.push({
                productId: props.id,
                title: props.title,
                img: props.source,
                price: props.price,
                count: 1
            })
            dispatch(addToCart(carts))
            localStorage.setItem("cart", JSON.stringify(carts))
        }
    }

    return (
        <div className={props.className} key={props.key}>
            <div className="product-position">
                <img src={`${process.env.REACT_APP_SERVER_URL}/${props.source}`} alt="#" />
                <div><div className="title">{props.title}</div>
                    <div className="desc">{props.desc}</div>
                    <div className="price">$ {props.price}</div>
                    <div style={{ marginBottom: '20px' }}><Button onClick={clickEvent} value={props.button_value} /></div>
                </div>
            </div>
        </div>
    )
}