/*
Option 2 - Fetch data client side with useEffect
*/

import Head from 'next/head'
import { useState, useEffect } from 'react'
import { getProducts } from '../lib/products'
import Title from '../components/Title'

const HomePage = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then(products => setProducts(products))
  }, [])

  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className='px-6 py-4'>
        <Title>Next Shop</Title>
        <p className='py-4'>Client Side Rendering with useEffect</p>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default HomePage
