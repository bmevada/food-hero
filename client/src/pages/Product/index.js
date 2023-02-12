import React, { useState, useEffect } from 'react'
import "./style.scss"
import { useParams } from "react-router-dom";
import CarouselElement from '../../components/Carousel/element';
import axios from "axios";

const Product = () => {
  let params = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    axios.get(`/products/${params.id}`)
      .then(res => res.data)
      .then(data => { if (data.success) setProduct(data.product) })
  }, [])

  return (
    <div className='product-container'>
      <div style={{ margin: '20px auto', maxWidth: '900px' }}>
        <CarouselElement item={product} />
      </div>
    </div >
  )
}

export default Product;