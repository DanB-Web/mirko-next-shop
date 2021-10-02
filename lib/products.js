import { fetchJson } from "./api"

export const getProducts = async () => {
  const products = await fetchJson(`/products`)
  return products.map(product => stripProduct(product))
}

export const getProduct = async (id) => {
  const product = await fetchJson(`/products/${id}`)
  return stripProduct(product)
}

//Helper function to strip large products object from Strapi
const stripProduct = (product) => {
  return {
    id: product.id,
    title: product.title,
    description: product.description
  }
}
