import React from 'react'

type Props = {}

function page({}: Props) {
    const fetchProducts = async () => {
        const res = await fetch("/api/products");
        const products = await res.json();
        return products;
    }

    
  return (
    <div>page</div>
  )
}

export default page