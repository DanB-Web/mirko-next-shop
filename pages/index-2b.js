/*
Option 2b - Fetch data client side using API routes
*/

import Head from 'next/head'
import { useState, useEffect } from 'react'
import Title from '../components/Title'

const HomePage = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/products').then(res => res.json())
      setProducts(response)
    })() 
  }, [])

  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className='px-6 py-4'>
        <Title>Next Shop</Title>
        <p className='py-4'>Client Side Rendering with API Routes</p>
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
