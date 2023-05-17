"use strict";

const AxiosMockAdapter = require(
  "axios-mock-adapter");
const axios = require("axios");
const axiosMock = new AxiosMockAdapter(axios);

const {
  shipProduct,
  SHIPIT_SHIP_URL
} = require("./shipItApi");

test("shipProduct", async function () {
  axiosMock.onPost(SHIPIT_SHIP_URL).reply(200, {
    "receipt": {
      "itemId": 1001,
      "name": "dylan",
      "addr": "somewhere",
      "zip": "99999",
      "shipId": 1100
    }
  });

  const shipId = await shipProduct({
    productId: 1000,
    name: "dylan",
    addr: "somewhere",
    zip: "99999",
  });;

  expect(shipId).toEqual(1100);
});
