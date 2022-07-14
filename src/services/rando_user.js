import axios from "axios";

export default async function fetchUser() {
  const BASE_URL = "https://api.randomuser.me/";

  try {
    const response = await axios.get(BASE_URL);
    return response.data.results[0];
  } catch (err) {
    console.log(err);
    return null;
  }
}
