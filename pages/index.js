import Head from 'next/head'
import Link from 'next/link'
import Title from '../components/Title'
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
        <ul>
          {products.map(product => (
            <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <a>{product.title}</a>
            </Link>
              
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default HomePage
