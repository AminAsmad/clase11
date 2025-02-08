import React from 'react'

const Detalles = () => {
  return (<>
    <div className="breadcrumbs">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 col-md-6 col-12">
        <div className="breadcrumbs-content">
          <h1 className="page-title">Single Product</h1>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-12">
        <ul className="breadcrumb-nav">
          <li><a href="index.html"><i className="lni lni-home" /> Home</a></li>
          <li><a href="index.html">Shop</a></li>
          <li>Single Product</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<section className="item-details section">
  <div className="container">
    <div className="top-area">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 col-12">
          <div className="product-images">
            <main id="gallery">
              <div className="main-img">
                <img src="assets/images/product-details/01.jpg" id="current" alt="#" />
              </div>
              <div className="images">
                <img src="assets/images/product-details/01.jpg" className="img" alt="#" />
                <img src="assets/images/product-details/02.jpg" className="img" alt="#" />
                <img src="assets/images/product-details/03.jpg" className="img" alt="#" />
                <img src="assets/images/product-details/04.jpg" className="img" alt="#" />
                <img src="assets/images/product-details/05.jpg" className="img" alt="#" />
              </div>
            </main>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12">
          <div className="product-info">
            <h2 className="title">GoPro Karma Camera Drone</h2>
            <p className="category"><i className="lni lni-tag" /> Drones:<a href="javascript:void(0)">Action
                cameras</a></p>
            <h3 className="price">$850<span>$945</span></h3>
            <p className="info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt
              ut labore et dolore magna aliqua.</p>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                <div className="form-group color-option">
                  <label className="title-label" htmlFor="size">Choose color</label>
                  <div className="single-checkbox checkbox-style-1">
                    <input type="checkbox" id="checkbox-1" defaultChecked />
                    <label htmlFor="checkbox-1"><span /></label>
                  </div>
                  <div className="single-checkbox checkbox-style-2">
                    <input type="checkbox" id="checkbox-2" />
                    <label htmlFor="checkbox-2"><span /></label>
                  </div>
                  <div className="single-checkbox checkbox-style-3">
                    <input type="checkbox" id="checkbox-3" />
                    <label htmlFor="checkbox-3"><span /></label>
                  </div>
                  <div className="single-checkbox checkbox-style-4">
                    <input type="checkbox" id="checkbox-4" />
                    <label htmlFor="checkbox-4"><span /></label>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div className="form-group">
                  <label htmlFor="color">Battery capacity</label>
                  <select className="form-control" id="color">
                    <option>5100 mAh</option>
                    <option>6200 mAh</option>
                    <option>8000 mAh</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div className="form-group quantity">
                  <label htmlFor="color">Quantity</label>
                  <select className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="bottom-content">
              <div className="row align-items-end">
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="button cart-button">
                    <button className="btn" style={{width: '100%'}}>Add to Cart</button>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="wish-button">
                    <button className="btn"><i className="lni lni-reload" /> Compare</button>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="wish-button">
                    <button className="btn"><i className="lni lni-heart" /> To Wishlist</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="product-details-info">
      <div className="single-block">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="info-body custom-responsive-margin">
              <h4>Details</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
              <h4>Features</h4>
              <ul className="features">
                <li>Capture 4K30 Video and 12MP Photos</li>
                <li>Game-Style Controller with Touchscreen</li>
                <li>View Live Camera Feed</li>
                <li>Full Control of HERO6 Black</li>
                <li>Use App for Dedicated Camera Operation</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="info-body">
              <h4>Specifications</h4>
              <ul className="normal-list">
                <li><span>Weight:</span> 35.5oz (1006g)</li>
                <li><span>Maximum Speed:</span> 35 mph (15 m/s)</li>
                <li><span>Maximum Distance:</span> Up to 9,840ft (3,000m)</li>
                <li><span>Operating Frequency:</span> 2.4GHz</li>
                <li><span>Manufacturer:</span> GoPro, USA</li>
              </ul>
              <h4>Shipping Options:</h4>
              <ul className="normal-list">
                <li><span>Courier:</span> 2 - 4 days, $22.50</li>
                <li><span>Local Shipping:</span> up to one week, $10.00</li>
                <li><span>UPS Ground Shipping:</span> 4 - 6 days, $18.00</li>
                <li><span>Unishop Global Export:</span> 3 - 4 days, $25.00</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div className="modal fade review-modal" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Leave a Review</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="review-name">Your Name</label>
              <input className="form-control" type="text" id="review-name" required />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="review-email">Your Email</label>
              <input className="form-control" type="email" id="review-email" required />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="review-subject">Subject</label>
              <input className="form-control" type="text" id="review-subject" required />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="review-rating">Rating</label>
              <select className="form-control" id="review-rating">
                <option>5 Stars</option>
                <option>4 Stars</option>
                <option>3 Stars</option>
                <option>2 Stars</option>
                <option>1 Star</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="review-message">Review</label>
          <textarea className="form-control" id="review-message" rows={8} required defaultValue={""} />
        </div>
      </div>
      <div className="modal-footer button">
        <button type="button" className="btn">Submit Review</button>
      </div>
    </div>
  </div>
</div>

</>
  )
}

export default Detalles
