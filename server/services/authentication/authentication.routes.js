/**
 * @file Authentication routes
 */

import expressPromiseRouter from "express-promise-router";

const router = expressPromiseRouter();

const routes = ({ actions, renderView }) => {
  const { signUp } = actions;

  router.get("/sign-up", renderView);
  router.get("/sign-in", renderView);
  router.post("/sign-up", (req, res) => signUp(req, res));

  return router;
};

export default routes;
