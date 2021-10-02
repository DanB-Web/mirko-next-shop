import { getProducts } from "../../lib/products"

//NOTE THAT THIS ROUTE IS USED IN index-2b AS AN EXAMPLE, NOT THE FINAL SITE
const handler = async (req, res) => {
  const products = await getProducts()
  res.status(200).json(products)
}

export default handler
