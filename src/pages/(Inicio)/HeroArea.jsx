import React from 'react'

const HeroArea = () => {
  return (
    <section className="hero-area">
    <div className="container">
        <div className="row">
            <div className="col-lg-8 col-12 custom-padding-right">
                <div className="slider-head">
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="public/assets/images/banner/banner-1-bg.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="public/assets/images/banner/banner-2-bg.jpg" className="d-block w-100" alt="..." />
                            </div>

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
            </div>
            <div className="col-lg-4 col-12">
                <div className="row">
                    <div className="col-lg-12 col-md-6 col-12 md-custom-padding">
                        {/* Start Small Banner */}
                        <div className="hero-small-banner" style={{ backgroundImage: 'url("assets/images/hero/slider-bnr.jpg")' }}>
                            <div className="content">
                                <h2>
                                    <span>New line required</span>
                                    iPhone 12 Pro Max
                                </h2>
                                <h3>$259.99</h3>
                            </div>
                        </div>
                        {/* End Small Banner */}
                    </div>
                    <div className="col-lg-12 col-md-6 col-12">
                        {/* Start Small Banner */}
                        <div className="hero-small-banner style2">
                            <div className="content">
                                <h2>Weekly Sale!</h2>
                                <p>Saving up to 50% off all online store items this week.</p>
                                <div className="button">
                                    <a className="btn" href="product-grids.html">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        {/* Start Small Banner */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default HeroArea
