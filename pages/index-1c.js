/*
Option 1c - Fetch data server side with getServerSideProps
THIS WILL RUN AT EVERY SERVER REQUEST - SLOWER / MANY REQUESTS / WILL PICK UP CMS CHANGES
*/

import Head from 'next/head'
import Title from '../components/Title'

import { getProducts } from '../lib/products'

export const getServerSideProps = async () => {
  const products = await getProducts()
  return {
    props: {
      products
    }
  }
}

const HomePage = ({ products }) => {

  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className='px-6 py-4'>
        <Title>Next Shop</Title>
        <p className='py-4'>Server Side Rendering with useServerSideProps</p>
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
