import React, { Component } from "react";
import { Cards, CountryPicker, Chart } from "./components";
import styles from "./App.module.css";

export default class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}
