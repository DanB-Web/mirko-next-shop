const BACKEND_API = process.env.CMS_URL

//CUSTOM API ERROR
export class ApiError extends Error {
  constructor(url, status) {
    super(`${url} returned ${status}`)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError)
    }
    this.name = 'CustomError'
    this.status = status
  }
}

export const fetchJson = async (path) => {
  const response = await fetch(`${BACKEND_API}${path}`)
  if (!response.ok) {
    throw new ApiError(url, response.status)
  }
  return await response.json()
}

