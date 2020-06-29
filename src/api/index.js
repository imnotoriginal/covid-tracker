import axios from "axios";

const API_URL = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const res = await axios.get(API_URL);
    return res;
  } catch (error) {
    console.log(error);
  }
};
