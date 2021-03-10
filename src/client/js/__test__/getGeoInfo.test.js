import { getGeoInfo } from './../getGeoInfo'

describe("Location from Geonames API", () => {
    test("location fetched if 200", () => {
        const response=getGeoInfo().response;
        expect(response.statusCode).toBe(200);
    });
  });
