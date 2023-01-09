import React from "react"
import ButtonOne from "../Button/button1"
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/actions"

export default function CarouselElement(props) {
	const { item, index } = props
	const dispatch = useDispatch()

	const addCart = () => {
		const cart = localStorage.getItem("cart")
		if (cart) {
			let carts = JSON.parse(cart)
			const foundIndex = carts.findIndex((cart) => cart.productId === item._id)
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
					productId: item._id,
					title: item.name,
					img: item.img,
					price: item.price,
					count: 1
				})
			}
			dispatch(addToCart(carts))
			localStorage.setItem("cart", JSON.stringify(carts))
		} else {
			let carts = []
			carts.push({
				productId: item._id,
				title: item.name,
				price: item.price,
				img: item.img,
				count: 1
			})
			dispatch(addToCart(carts))
			localStorage.setItem("cart", JSON.stringify(carts))
		}
	}

	return (
		<div className="individual-carousel">
			<div className="carousel-detail">
				<div className="detail-title"><span>{index} </span>{item?.name}</div>
				<div className="detail-content">
					{item?.description}
				</div>
				<div className="detail-additional">
					Charge for Food Delivery
				</div>
				<div className="detail-price">$ {item?.price}</div>
				<hr />
				<div className="detail-button">
					<ButtonOne value="Order Now" onClick={addCart} />
				</div>
			</div>
			<div className="carousel-img" >
				{item &&
					<img src={`${process.env.REACT_APP_SERVER_URL}/${item?.img}`} alt="Banner" width={'100%'} height={'100%'} />
				}
			</div>
		</div>
	)
}

