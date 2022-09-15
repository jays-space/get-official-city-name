const { JOHANNESBURG_NAMES, TSHWANE_NAMES } = require("./cities.constants");

//! Refactor to use loops
const validateCityName = (string) => {
  if (!string)
    throw {
      type: "string undefined",
      message: "No string passed. Please pass in a city name",
    };

  // checks the given string against individual city lists arrays
  if (JOHANNESBURG_NAMES.includes(string)) return "johannesburg";
  if (TSHWANE_NAMES.includes(string)) return "tshwane";

  throw {
    type: "not found",
    message: "The given city name was not recognized",
  };
};

module.exports = validateCityName;
