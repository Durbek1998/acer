import React from 'react'
import ProductCard from './ProductCard'
const ProductList = ({data}) => {
  return (
    <>
      {
        data?.map((item,index)=>(
          <ProductCard item={item} key={index}/>

        ))
      }
        {/* <ProductCard/>
        <ProductCard/>
        <ProductCard/> */}
    </>
  )
}

export default ProductList