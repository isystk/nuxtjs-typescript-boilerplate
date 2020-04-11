
import axios from 'axios';
const baseURL = 'https://api.coindesk.com/v1/bpi/';

export const client = axios.create({
  baseURL: "",
  timeout: 3000
});

export default async function(uri: string, config?: any) {
  console.log(uri);
  const { data } = await client.get(uri, config);
  return data;
}
