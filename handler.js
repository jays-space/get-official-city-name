"use strict";

const validateCityName = require("./validateCityName");

module.exports.getCityName = async (event) => {
  try {
    return validateCityName(event.city);
  } catch (e) {
    return e;
  }
};
