import React, { Component } from "react";
import { Cards, CountryPicker, Chart } from "./components";
import "./App.module.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}
