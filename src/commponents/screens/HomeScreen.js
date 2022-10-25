import React from 'react'
import products from '../../products'
import {Row , Col} from 'react-bootstrap'
import Product from '../Product'
import HeroSlider from '../HeroSlider'


function HomeScreen() {
   return (
     <div>
        <HeroSlider/>
         <h1 className='text-center'>Latest Products</h1>
         <Row>
             {products.map(product => (
                 <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                     <Product product={product}/>
                 </Col>
             ))}
         </Row>
     </div>
   )
}

export default HomeScreen