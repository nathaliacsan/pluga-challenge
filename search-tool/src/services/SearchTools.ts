import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export async function requestTools() {
  const response = await axios.get(`${BASE_URL}/tools`)
  const data = response.data

  return data
}
