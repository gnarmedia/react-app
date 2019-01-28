/**
 * @file Authentication tests
 */

import request from "supertest";

import express from "express";

import routes from "../authentication.routes";

const app = express();

const renderView = () => {};
const actions = {
  signUp: jest.fn()
};

const authenticationRoutes = routes({ actions, renderView });

app.use(authenticationRoutes);

xdescribe("GET", () => {
  describe("/sign-up", () => {
    it("should render the sign-in page", async () => {
      return (
        request(app)
          .get("/sign-in")
          // .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200)
          .then(response => {
            assert(response.body.email, "foo@bar.com");
          })
      );
    });
  });
});
