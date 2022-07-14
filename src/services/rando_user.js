import axios from "axios";

export default async function fetchUser() {
  const BASE_URL = "https://api.randomuser.me/";

  const response = await axios.get(BASE_URL);
  return response.data.results[0];
}
