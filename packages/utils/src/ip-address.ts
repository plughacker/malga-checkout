import axios from 'axios'

export const getIpAddress = async () => {
  const { data } = await axios.get('https://geolocation-db.com/json/')

  return data.IPv4
}
