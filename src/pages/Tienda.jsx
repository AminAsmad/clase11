import React from 'react'
import { useEffect, useState } from "react";
const API='https://dummyjson.com/products';
import Productos from './Productos'
import CardProduct from '../components/CardProduct';

const Tienda = () => {
    const [datos, setDatos] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);
  const [total , setTotal] = useState(0);
  const getDatos = async () => {
    try {

      //?limit=12&skip=
      const URI = `${API}?limit=${limit}&skip=${skip}`;
      const response = await fetch(URI);
      const data = await response.json();
      //console.log(data)
      setDatos(data.products);
      setTotal(data.total)
    } catch (error) {
      console.error(error)
    }
  };
  useEffect(() => {
     getDatos();
  }, [skip]);


  
  return (
    <section className="trending-product section" style={{ marginTop: 12 }}>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="section-title">
                <h3 className="lead " >{skip} Pagina {Math.floor(skip / limit) + 1} de {Math.ceil(total / limit)}</h3>
                <div className="d-flex justify-content-center">
                
                <ul className="d-flex pagination">
                  <li className={`page-item  ${skip === 0 ? 'disabled' : ''}`}>
                    <a className="page-link" href="#" onClick={() => setSkip(skip - limit)}>Anterior</a>
                  </li>
                
                  <li className="page-item active" aria-current="page">
                    <a className="page-link" >{Math.floor(skip / limit) + 1}</a>
                  </li>
                 
                  <li className={`page-item ${skip + limit >= total ? 'disabled' : ''}`}>
                    <a className="page-link" href="#" onClick={() => setSkip(skip + limit)}>Siguiente</a>
                  </li>
                  <li className={`page-item ${skip + limit >= total ? 'disabled' : ''}`}>
                    <a className="page-link" href="#" onClick={() => setSkip(total-limit)}>ultimo</a>
                  </li>
                  <li className={`page-item ${skip + limit >= total ? 'disabled' : ''}`}>
                    <a className="page-link" href="#" onClick={() => setSkip(0)}>primera</a>
                  </li>
                </ul>
            

            </div>
                    
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

export default Tienda
