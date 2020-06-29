import axios from "axios";

const API_URL = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(country ? `${API_URL}/countries/${country}` : API_URL);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/daily`);
    return data.map(({ confirmed, deaths, reportDate }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date: reportDate,
    }));
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/countries`);
    return data.countries.map(({ name }) => name);
  } catch (error) {
    console.log(error);
  }
};
