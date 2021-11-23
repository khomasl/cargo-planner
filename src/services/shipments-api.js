import axios from 'axios'
import { notifyError } from '../components/notify'

axios.defaults.baseURL = 'http://localhost:4040'

async function fetchShipments() {
  try {
    const result = await axios.get('/shipments')
    return await result.data
  } catch (err) {
    notifyError(err.massage)
  }
}

export default fetchShipments
