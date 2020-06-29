import React, { Component } from "react";
import { Cards, CountryPicker, Chart } from "./components";
import { fetchData } from "./api";
import styles from "./App.module.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loaded: false,
      country: "global",
    };
    this.handleCountryChange = this.handleCountryChange.bind(this);
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data, loaded: true });
  }

  async handleCountryChange(country) {
    this.setState({ loaded: false });
    if (country === "global") country = undefined;
    const data = await fetchData(country);
    this.setState({ country, data, loaded: true });
  }

  render() {
    const { data, loaded, country } = this.state;
    if (!loaded) return <div>Loading ...</div>;
    return (
      <div className={styles.container}>
        <Cards {...data} />
        <CountryPicker
          value={country}
          handleCountryChange={this.handleCountryChange}
        />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
