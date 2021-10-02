/*
Option 1b - Fetch data server side with Incremental Static Regeneration ISR
RUNS AT BUILD TIME AND THEN RECHECKS THE CMS EVERY REVALIDATE PERIOD - RECOMMENDED STRATEGY FOR SERVER SIDE UNLESS A PURELY STATIC SITE
THE revalidate PROPERTY IN THE getStaticProps RETURN REVALIDATES THE DATA EVERY SET AMOUNT OF TIME
NOTE ISR ONLY RUNS IN PRODUCTION MODE
*/

import Head from 'next/head'
import Title from '../components/Title'

import { getProducts } from '../lib/products'

export const getStaticProps = async () => {
  const products = await getProducts()
  return {
    props: {
      products
    },
    revalidate: 5 * 60  //Incremental Static Regnereration
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
        <p className='py-4'>Server Side Rendering with useStaticProps and Incremental Static Regeneration</p>
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
