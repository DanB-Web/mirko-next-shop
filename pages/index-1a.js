/*
Option 1a - Fetch data server side with getStaticProps
THIS WILL RUN AT BUILD TIME ONLY - FASTER / FEWER REQUESTS / WILL NOT PICK UP CMS CHANGES
*/

/*
NOTE NEXT SUPPLIES FETCH WITHIN THE SERVER ENVIRONMENT (i.e. node-fetch via npm)
*/

import Head from 'next/head'
import Title from '../components/Title'

import { getProducts } from '../lib/products'

export const getStaticProps = async () => {
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
        <p className='py-4'>Server Side Rendering with useStaticProps</p>
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
