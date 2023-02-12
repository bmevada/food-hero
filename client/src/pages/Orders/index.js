import { useEffect, useState } from "react"
import { BsCurrencyBitcoin, BsDashCircle } from "react-icons/bs";
import axios from "axios"
import "./style.scss"

export default function Order() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        axios.get('/orders')
            .then(res => res.data)
            .then(data => {
                if (data.success) setOrders(data.orders)
            }).catch(err => console.log(err))
    }, [])

    return (
        <div className="orders">
            <h1>Orders</h1>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Product</th>
                        <th>Total</th>
                        <th>Extras</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{order.userId.displayName}</td>
                            <td>{order.userId.email}</td>
                            <td>{order.address}</td>
                            <td>{order.phone}</td>
                            <td>{order.orderItems.map((item, index) => (
                                <div className='cart-individual' key={index}>
                                    <div className='image'><img src={`${process.env.REACT_APP_SERVER_URL}/${item.productId.img}`} alt="cart-small" /></div>
                                    <div className='content'>
                                        <div className="combo-content">
                                            <span className="key">Name: </span>
                                            <span className="value">{item.productId.name}</span>
                                        </div>
                                        <div className="combo-content">
                                            <span className="key">Price: </span>
                                            <span className="value">${item.productId.price}</span>
                                        </div>
                                        <div className="combo-content">
                                            <span className="key">Quantity: </span>
                                            <span className="value">{item.count}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </td>
                            <td>${order.orderItems.reduce((prev, current) => {
                                return prev + current.productId.price * current.count;
                            }, 0).toFixed(2)}</td>
                            <td>{order.extra}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}