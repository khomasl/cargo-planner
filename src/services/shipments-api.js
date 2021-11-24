import axios from 'axios'
import { notifyError } from '../components/notify'

// axios.defaults.baseURL = 'http://localhost:4040'
axios.defaults.baseURL = '/cargo-planner'

async function fetchShipments() {
  try {
    const result = await axios.get('/shipments.json')
    return await result.data
  } catch (err) {
    notifyError(err.massage)
  }
}

export default fetchShipments
