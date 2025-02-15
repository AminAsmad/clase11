import React from 'react'
import { useEffect, useState } from "react";
import CardProduct from '../../components/CardProduct';
const API = 'https://dummyjson.com/products/category/smartphones';
const TrendingProduct = () => {
    const [datos, setDatos] = useState([])
    const getDatos = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            //console.log(data)
            setDatos(data.products);
        } catch (error) {
            console.error(error)
        }
    };
    useEffect(() => {
        getDatos();
    }, []);

    
  return (
    <section className="trending-product section" style={{ marginTop: 12 }}>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="section-title">
                    <h2>Trending Product</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form.</p>
                </div>
            </div>
        </div>
        <div className="row">
        {datos && datos.map((item, index) => (
          <CardProduct key={index} item={item}/>
               
        ))}
        </div>
    </div>
</section>
  )
}

export default TrendingProduct
