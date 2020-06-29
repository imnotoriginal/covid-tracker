import React, { Component } from "react";
import { Cards, CountryPicker, Chart } from "./components";
import { fetchData } from "./api";
import styles from "./App.module.css";

export default class App extends Component {
  state = {
    data: {},
    loaded: false,
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data, loaded: true });
  }

  render() {
    const { data, loaded } = this.state;
    if (!loaded) return <div>Loading ...</div>;
    return (
      <div className={styles.container}>
        <Cards {...data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}
