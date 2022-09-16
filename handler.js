"use strict";

const validateCityName = require("./validateCityName");

module.exports.getCityName = async (event) => {
  try {
    return validateCityName(event.sessionState.intent.slots.CitySlot.value.interpretedValue);
  } catch (e) {
    return e;
  }
};
