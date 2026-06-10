import axios from "axios";

export async function request(url) {
  const response = await axios.get(url);
  return response.data;
}
