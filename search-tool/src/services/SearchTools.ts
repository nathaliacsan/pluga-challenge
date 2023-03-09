import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export async function requestTools(page: number, limit: number) {
  const response = await axios.get(
    `${BASE_URL}/tools?_page=${page}&_limit=${limit}`,
  )
  const data = response.data

  return data
}
