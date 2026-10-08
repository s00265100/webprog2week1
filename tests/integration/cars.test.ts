import request from "supertest";
import { app } from "../../src/app";

describe("GET /cars", () => {
  it("returns all cars", async () => {
    const response = await request(app)
      .get("/api/v1/cars")
      .set("x-api-key", "blahblah");

    expect(response.status).toBe(200);
  });
});