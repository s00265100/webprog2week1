import request from "supertest";
import { app } from "../../src/app";

describe("Cars API", () => {

  let carId: string;

  it("creates a car", async () => {
    const response = await request(app)
      .post("/api/v1/cars")
      .set("x-api-key", "blahblah")
      .send({
        make: "Toyota",
        model: "Corolla",
        year: 2020
      });

    expect(response.status).toBe(201);

    carId = response.body._id;
  });

  it("gets the created car", async () => {
    const response = await request(app)
      .get(`/api/v1/cars/${carId}`)
      .set("x-api-key", "blahblah");

    expect(response.status).toBe(200);
    expect(response.body.make).toBe("Toyota");
    expect(response.body.model).toBe("Corolla");
  });

  it("deletes the car", async () => {
    const response = await request(app)
      .delete(`/api/v1/cars/${carId}`)
      .set("x-api-key", "blahblah");

    expect(response.status).toBe(200);
  });

  it("cannot find the deleted car", async () => {
    const response = await request(app)
      .get(`/api/v1/cars/${carId}`)
      .set("x-api-key", "blahblah");

    expect(response.status).toBe(404);
  });

});