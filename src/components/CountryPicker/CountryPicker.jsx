import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";

const CountryPicker = ({ value, handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async () => {
      const countries = await fetchCountries();
      setCountries(countries);
    })();
  }, []);

  return (
    <FormControl>
      <NativeSelect
        value={value}
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="global">Global</option>
        {countries.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
