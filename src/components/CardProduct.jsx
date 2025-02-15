import React from 'react'

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
                            <li><i className="lni lni-star-filled" /></li>
                            <li><i className="lni lni-star-filled" /></li>
                            <li><i className="lni lni-star-filled" /></li>
                            <li><i className="lni lni-star-filled" /></li>
                            <li><i className="lni lni-star" /></li>
                            <li><span>{item.rating}</span></li>
                        </ul>
                        <div className="price">
                            <span>{item.price}</span>
                        </div>
                    </div>
                </div>
                {/* End Single Product */}
            </div>
  )
}

export default CardProduct
