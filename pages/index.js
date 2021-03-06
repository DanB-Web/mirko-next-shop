import Head from 'next/head'
import Title from '../components/Title'
import ProductCard from '../components/ProductCard'
import { getProducts } from '../lib/products'

export const getStaticProps = async () => {
  const products = await getProducts()
  return {
    props: {
      products
    },
    //USING process.env TO HAVE SHORTER REVALIDATE TIME IN DEV MODE
    revalidate: parseInt(process.env.REVALIDATE_SECONDS)  
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
        <ul className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
          {products.map(product => (
            <li key={product.id}>
              <ProductCard product={product}/>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default HomePage
