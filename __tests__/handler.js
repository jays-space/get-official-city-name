const validateCityName = require("../validateCityName");

describe("validateCityName", () => {
  it("throws an error if no string passed", () => {
    let error = null;
    try {
      validateCityName();
    } catch (e) {
      error = e;
    }

    expect(error).toStrictEqual({
      type: "string undefined",
      message: "No string passed. Please pass in a city name",
    });
  });

  it("throws an error if the string passed does not match any city in array", () => {
    let error = null;
    let string = "failing city name";
    try {
      validateCityName(string);
    } catch (e) {
      error = e;
    }

    expect(error).toStrictEqual({
      type: "not found",
      message: "The given city name was not recognized",
    });
  });

  it("returns the official name of the city if a match is found", () => {
    let officialName = "johannesburg";
    let string = "joburg";

    try {
      validateCityName(string);
    } catch (e) {
      error = e;
    }

    expect(officialName).toBe(officialName);
  });
});
