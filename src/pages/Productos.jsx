import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const API = 'https://dummyjson.com/products/category/';
const Productos = () => {
    const params = useParams()
    const [datos, setDatos] = useState([])

    const URI = `${API}${params.id}`
    const getDatos = async () => {
        try {
            const response = await fetch(URI);
            const data = await response.json();
            console.log(data)
            setDatos(data.products);
        } catch (error) {
            console.error(error)
        }
    };
    useEffect(() => {
        getDatos();
    }, [params.id]);


    return (
        <section className="trending-product section" style={{ marginTop: 12 }}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h2>Trending Product {params.id}</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {datos && datos.map((item, index) => (
                        <div key={index} className="col-lg-3 col-md-6 col-12">
                            {/* Start Single Product */}
                            <div className="single-product">
                                <div className="product-image">
                                    <img src={item.thumbnail} alt="#" />
                                    <div className="button">
                                        <a href="product-details.html" className="btn"><i className="lni lni-cart" /> Add to Cart</a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <span className="category">Watches</span>
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
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Productos
