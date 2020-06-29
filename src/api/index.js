import axios from "axios";

const API_URL = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirm, recovered, deaths, lastUpdate },
    } = await axios.get(API_URL);

    return { confirm, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};
