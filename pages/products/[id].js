import Head from 'next/head'
import Image from 'next/image'
import Title from '../../components/Title'
import { ApiError } from '../../lib/api'
import { getProducts, getProduct } from '../../lib/products'

//GIT BRANCH CHECK

//GENERATE [id] PARAMETERS AND PASS TO getStaticProps
export const getStaticPaths = async () => {
  const products = await getProducts()
  return {
    paths: products.map(product => ({
      params: { id : product.id.toString()}  //NOTE PARAM HAS TO BE STRING
    })),
    //fallback: false     //Will show 404 for new id's generated after initial build
    fallback: 'blocking'  //Will attempt another BE call if id not found in initial build
  }
}

//GENERATE PROPS FOR ProductPage's
export const getStaticProps = async ({ params: { id }}) => {
  try {
    const product = await getProduct(id)
    return {
      props: {
        product
      },
      revalidate: parseInt(process.env.REVALIDATE_SECONDS)
    }
  } catch (err) {
    //Check if instance of our custom Error class
    if (err instanceof ApiError && err.status === 404) {
      return {
        notFound: true  //Next will show 404 if product not found
      }
    } else {
      throw err //Otherwise Next will handle the error
    }
    
  } 
}
const ProductPage = ({product}) => {
  return (
    <>
    <Head>
      <title>Next Shop</title>
    </Head>
    <main className='px-6 py-4'>
      <Title>{product.title}</Title>
      <div className='flex flex-col lg:flex-row'>
        <div>
          <Image src={product.pictureUrl} alt={product.title} width={640} height={480}/>
        </div>
        <div className='flex-1 lg:ml-4'>
          <p className='text-sm'>{product.description}</p>
          <p className='text-lg font-bold mt-2'>${product.price.toFixed(2)}</p>
        </div>
      </div>
    </main>
  </>
  )
}

export default ProductPage