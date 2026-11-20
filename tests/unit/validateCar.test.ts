import { createcarzSchema } from "../../src/models/cars";

const validCar = {
  make: "Toyota",
  model: "Corolla",
  year: 1980
};

describe("Test Car Validation", () => {

  it("should pass for valid data", () => {
    expect(() => createcarzSchema.parse({ body: validCar })).not.toThrow();
  });

  it("should pass with no year", () => {
    expect(() =>
      createcarzSchema.parse({
        body: {
          ...validCar,
          year: undefined
        }
      })
    ).not.toThrow();
  });

  it("should fail with no model", () => {
    expect(() =>
      createcarzSchema.parse({
        body: {
          ...validCar,
          model: undefined
        }
      })
    ).toThrow();
  });

  it("should fail with no make", () => {
    expect(() =>
      createcarzSchema.parse({
        body: {
          ...validCar,
          make: undefined
        }
      })
    ).toThrow();
  });

  it("should fail if year is before 1950", () => {
    expect(() =>
      createcarzSchema.parse({
        body: {
          ...validCar,
          year: 1949
        }
      })
    ).toThrow();
  });

  it("should fail if year is not a number", () => {
    expect(() =>
      createcarzSchema.parse({
        body: {
          ...validCar,
          year: "wrong year"
        }
      })
    ).toThrow();
  });

});