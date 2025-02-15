import React from 'react'
import { formatCurrency } from '../utils/utils'

const CardProduct = ({item}) => {
  return (
<div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Product */}
         
                <div className="single-product">
                    <div className="product-image">
                        <img src={item.thumbnail} alt="#" />
                        <div className="button">
                            <a href="product-details.html" className="btn"><i className="lni lni-cart" /> Add to Cart</a>
                        </div>
                    </div>
                    <div className="product-info">
                        <span className="category">{item.category}</span>
                        <h4 className="title">
                            <a href="product-grids.html"> {item.title}</a>
                        </h4>
                        <ul className="review">
                {[...Array(Math.floor(item.rating))].map((_, index) => (
                    <li key={`full-${index}`}><i className="lni lni-star-filled" /></li>
                ))}
                {[...Array(6 - Math.ceil(item.rating))].map((_, index) => (
                    <li key={`empty-${index}`}><i className="lni lni-star" /></li>
                ))}
                <li><span>{Math.floor(item.rating)}</span></li>
                </ul>
                <div className="price text-center">
                    <span className="text-danger">${formatCurrency(item.price)}</span>
                </div>
                       
                    </div>
                </div>
                {/* End Single Product */}
            </div>
  )
}

export default CardProduct
